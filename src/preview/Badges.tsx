import { Person } from '@mui/icons-material';
import DuiCode from '../components/DuiCode';
import DuiBadge from '../components/DuiBadge';
import DuiControlsGroup from '../components/DuiControlsGroup';
import DuiButton from '../components/DuiButton';
import DuiContainer from '../components/layout/DuiContainer';

function Badges() {
  return (
    <DuiContainer centered className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h2>Badges</h2>
        <p>
          Can be put on anything
          <DuiCode inline>relative</DuiCode>
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <h5>Buttons with badges</h5>

        <DuiButton>
          Hello
          <DuiBadge />
        </DuiButton>
        <DuiButton>
          Hello
          <DuiBadge value="1" accent />
        </DuiButton>
        <DuiButton>
          <Person />
          <DuiBadge value="88" />
        </DuiButton>
        <DuiButton>
          Hello
          <DuiBadge value="120" grey />
        </DuiButton>
        <DuiButton>
          Hello
          <DuiBadge value="3" grey pulsating />
        </DuiButton>
        <DuiButton>
          Hello
          <DuiBadge value="120" pulsating />
        </DuiButton>
        <DuiButton>
          Hello
          <DuiBadge pulsating />
        </DuiButton>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <h5>Groups with badges</h5>

        <DuiControlsGroup accent vertical="true">
          <DuiButton>Create</DuiButton>
          <DuiButton>Read</DuiButton>
          <DuiButton>
            Update
            <DuiBadge />
          </DuiButton>
          <DuiButton>Delete</DuiButton>
        </DuiControlsGroup>

        <DuiControlsGroup vertical="true">
          <DuiButton>
            Create
            <DuiBadge />
          </DuiButton>
          <DuiButton>
            Read
            <DuiBadge value={23} />
          </DuiButton>
          <DuiButton>
            Update
            <DuiBadge pulsating />
          </DuiButton>
          <DuiButton>
            Delete
            <DuiBadge value={23} pulsating />
          </DuiButton>
        </DuiControlsGroup>

        <DuiControlsGroup alert vertical="true">
          <DuiButton>
            Create
            <DuiBadge grey />
          </DuiButton>
          <DuiButton>
            Read
            <DuiBadge grey value={23} />
          </DuiButton>
          <DuiButton>
            Update
            <DuiBadge secondary pulsating />
          </DuiButton>
          <DuiButton>
            Delete
            <DuiBadge secondary value={23} pulsating />
          </DuiButton>
        </DuiControlsGroup>
      </div>
    </DuiContainer>
  );
}

export default Badges;
