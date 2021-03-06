import React from 'react';
import DuiModal, { DuiModalProps } from './DuiModal';
import DuiButton from '../DuiButton';

function DuiConfirm(props: DuiModalProps) {
  const onSelect = (val: boolean) => {
    if (props.onClose) {
      props.onClose(val);
    }
  };

  return (
    <DuiModal {...props}>
      { props.children }

      <div className="flex gap-4 justify-center">
        <DuiButton accent onClick={() => onSelect(true)}>Yes</DuiButton>
        <DuiButton alert onClick={() => onSelect(false)}>No</DuiButton>
      </div>
    </DuiModal>
  );
}

export default DuiConfirm;
