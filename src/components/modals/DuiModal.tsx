import React, {PropsWithChildren, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import DuiCard from '../DuiCard';
import { randomString } from '../../utils/utils';

type Props = {
  className?: string,
  onClose?: (b?: boolean) => void,
  appearAnimation?: boolean,
  isVisible?: boolean,
};

type DuiModalProps = PropsWithChildren<Props>;

const DuiModal = (props: DuiModalProps) => {
  const [el, setEl] = useState<HTMLElement | undefined>(undefined)

  const createPortalElement = (): HTMLElement => {
    const newElement = document.createElement('div');
    newElement.className = `portal-wrapper portal-${randomString()}`;
    return newElement;
  }

  const onBackgroundClick = (e: React.MouseEvent) => {
    if (!props.isVisible) return;
    if (e.target !== e.currentTarget) return;
    if (props.onClose) {
      props.onClose();
    }
  }

  const openPortal = () => {
    if (el) return;
    const newEl = createPortalElement();
    setEl(newEl);
    document.body.appendChild(newEl);
  }

  const closePortal = () => {
    if (el) {
      document.body.removeChild(el);
    }
  }


  useEffect(() => {
    openPortal();
    return () => {
      closePortal();
    }
  }, []);

  const portalContents = (
    <div
      className="fixed top-0 left-0 h-full w-full bg-stone-600/50 flex items-center justify-center"
      onClick={onBackgroundClick}
    >
      <DuiCard className={`
        absolute
        ${props.appearAnimation ? 'animate-card-appear' : ''}
        ${props.className}
      `}>
        { props.children }
      </DuiCard>
    </div>
  );

  if (props.isVisible && el) {
    return <>{ ReactDOM.createPortal(portalContents, el) }</>;
  }

  return null;
}

export default DuiModal;

export {
  DuiModalProps,
};
