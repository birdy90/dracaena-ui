import DuiCard from '../components/DuiCard';
import DuiContainer from '../components/layout/DuiContainer';

function Cards() {
  return (
    <div className="bg-stone-100 mt-8 pb-8">
      <DuiContainer centered className="flex flex-col gap-2">
        <h2>Cards</h2>

        <DuiCard>
          Card is stretching for full width
        </DuiCard>

        <p>Flex aligned</p>
        <div className="flex gap-2">
          <DuiCard>Cards</DuiCard>
          <DuiCard>can be stacked in a parent container</DuiCard>
        </div>

        <p>Grid aligned</p>
        <div className="grid grid-cols-3 gap-2">
          <DuiCard>Cards</DuiCard>
          <DuiCard>can be stacked</DuiCard>
          <DuiCard>in grid</DuiCard>
        </div>

        <p>Card with different content</p>
        <div className="flex justify-start">
          <DuiCard className="!bg-stone-200">
            <h3>Cards</h3>
            can contain anything you want
            <div className="flex gap-2">
              <DuiCard>Even another cards</DuiCard>
              <DuiCard>But why? :)</DuiCard>
            </div>
          </DuiCard>
        </div>

        <p>Different density</p>
        <div className="flex items-start justify-start gap-8">
          <DuiCard>
            <span>This is</span>
            <span>
              <b>normal</b>
              {' '}
              density
            </span>
            <span>card</span>
          </DuiCard>
          <DuiCard compact>
            <span>This card</span>
            <span>has</span>
            <span>
              <b>compact</b>
              {' '}
              prop
            </span>
          </DuiCard>
          <DuiCard noPadding>
            <span>This card</span>
            <span>has</span>
            <span>
              <b>noPadding</b>
              {' '}
              prop
            </span>
          </DuiCard>
        </div>
      </DuiContainer>
    </div>
  );
}

export default Cards;
