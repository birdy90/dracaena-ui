import { useState } from 'react';
import DuiContainer from '../components/layout/DuiContainer';
import DuiButton from '../components/DuiButton';
import DuiModal from '../components/modals/DuiModal';
import DuiConfirm from '../components/modals/DuiConfirm';

function Modals() {
  const [isAnimatedVisible, setIsAnimatedVisible] = useState(false);
  const [isYesNoVisible, setIsYesNoVisible] = useState(false);
  const [yesNoValue, setYesNoValue] = useState(false);

  const onYesNoSelect = (val: boolean | undefined) => {
    setYesNoValue(Boolean(val));
    setIsYesNoVisible(false);
  };

  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Modals</h2>

      <p>Animated</p>
      <div className="flex">
        <DuiButton accent onClick={() => setIsAnimatedVisible(true)}>
          Show fancy animated modal
        </DuiButton>

        <DuiModal
          isVisible={isAnimatedVisible}
          appearAnimation
          onClose={() => setIsAnimatedVisible(false)}
        >
          Tested animated popup. Click aside to close
        </DuiModal>
      </div>

      <p>
        Confirm. Selected value:
        {' '}
        <span
          className={yesNoValue ? 'text-emerald-500 font-bold' : 'text-red-500 font-bold'}
        >
          {yesNoValue ? 'yes' : 'no'}
        </span>
      </p>
      <div className="flex">
        <DuiButton accent onClick={() => setIsYesNoVisible(true)}>
          Show confirm modal
        </DuiButton>

        <DuiConfirm isVisible={isYesNoVisible} onClose={onYesNoSelect}>
          Did you see this modal?
        </DuiConfirm>
      </div>
    </DuiContainer>
  );
}

export default Modals;
