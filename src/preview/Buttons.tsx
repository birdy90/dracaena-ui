import {
  BookmarkOutlined,
  Delete,
  Handshake,
  Home,
  Mail,
  NotAccessible,
  People,
  Person,
  Pets,
  WarningOutlined,
} from '@mui/icons-material';
import React from 'react';
import DuiButton from '../components/DuiButton';
import DuiControlsGroup from '../components/DuiControlsGroup';
import DuiContainer from '../components/layout/DuiContainer';

function Buttons() {
  return (

    <DuiContainer centered className="flex flex-col gap-2">
      <h2>Buttons</h2>

      <p>Normal</p>
      <div className="flex flex-wrap gap-2">
        <DuiButton accent>Just accent</DuiButton>
        <DuiButton secondary>This is secondary</DuiButton>
        <DuiButton alert>Alert</DuiButton>
        <DuiButton>Common</DuiButton>
      </div>

      <p>Icon</p>
      <div className="flex flex-wrap gap-2">
        <DuiButton accent><Home /></DuiButton>
        <DuiButton secondary><BookmarkOutlined /></DuiButton>
        <DuiButton alert><Delete /></DuiButton>
        <DuiButton><Mail /></DuiButton>
      </div>

      <p>Combined</p>
      <div className="flex flex-wrap gap-2">
        <DuiButton accent>
          <Handshake />
          {' '}
          Hello!
        </DuiButton>
        <DuiButton secondary>
          <WarningOutlined />
          {' '}
          Beware!
          {' '}
          <Pets />
        </DuiButton>
        <DuiButton alert>
          No!
          <NotAccessible />
        </DuiButton>
        <DuiButton>
          Send
          <Mail />
          {' '}
          to
          <People />
        </DuiButton>
      </div>

      <p>Disabled</p>
      <div className="flex flex-wrap gap-2">
        <DuiButton disabled>Hello!</DuiButton>
      </div>

      <h2>Button groups</h2>

      <p>Grouped</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-4">
          <DuiControlsGroup accent>
            <DuiButton>
              Let
              <People />
            </DuiButton>
            <DuiButton><Handshake /></DuiButton>
            <DuiButton>
              other
              <People />
            </DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup alert>
            <DuiButton>AL</DuiButton>
            <DuiButton>ER</DuiButton>
            <DuiButton>T!!</DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup>
            <DuiButton><People /></DuiButton>
            <DuiButton><Handshake /></DuiButton>
            <DuiButton><Person /></DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup>
            <DuiButton accent>Save</DuiButton>
            <DuiButton alert>Delete</DuiButton>
            <DuiButton disabled>Delete</DuiButton>
            <DuiButton disabled>Cancel</DuiButton>
            <DuiButton>Cancel</DuiButton>
          </DuiControlsGroup>
        </div>
      </div>

      <p>Grouped vertical</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-4">
          <DuiControlsGroup vertical>
            <DuiButton><People /></DuiButton>
            <DuiButton><Handshake /></DuiButton>
            <DuiButton><Person /></DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup secondary vertical>
            <DuiButton>
              Some
              <People />
            </DuiButton>
            <DuiButton alert><Handshake /></DuiButton>
            <DuiButton>
              <Person />
              {' '}
              without asking
            </DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup alert vertical="true">
            <DuiButton>Create</DuiButton>
            <DuiButton>Read</DuiButton>
            <DuiButton>Update</DuiButton>
            <DuiButton>Delete</DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup vertical="true">
            <DuiButton>Create</DuiButton>
            <DuiButton>Read</DuiButton>
            <DuiButton disabled>Update</DuiButton>
            <DuiButton>Delete</DuiButton>
          </DuiControlsGroup>

          <DuiControlsGroup disabled vertical="true">
            <DuiButton>Create</DuiButton>
            <DuiButton>Read</DuiButton>
            <DuiButton>Update</DuiButton>
            <DuiButton>Delete</DuiButton>
          </DuiControlsGroup>
        </div>
      </div>

      <p>Group with invalid child (only buttons and text inputs allowed)</p>
      <div className="flex flex-col gap-2">
        <DuiControlsGroup>
          <DuiButton>Hello</DuiButton>
          <DuiControlsGroup>
            <DuiButton>Hello</DuiButton>
          </DuiControlsGroup>
          <DuiButton>Hello</DuiButton>
        </DuiControlsGroup>
      </div>
    </DuiContainer>
  );
}

export default Buttons;
