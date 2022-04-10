import DuiButton from "../components/DuiButton";
import DuiControlsGroup from "../components/DuiControlsGroup";
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
  WarningOutlined
} from "@mui/icons-material";
import DuiContainer from "../components/layout/DuiContainer";

const Buttons = () => {
    return (

        <DuiContainer centered className="flex flex-col gap-2">
            <h2>Buttons</h2>

            <div className="flex gap-4 mt-4">
                <h5>Normal</h5>
                <DuiButton accent>Just accent</DuiButton>
                <DuiButton secondary>This is secondary</DuiButton>
                <DuiButton alert>Alert</DuiButton>
                <DuiButton>Common</DuiButton>
            </div>

            <div className="flex gap-4 mt-4">
                <h5>Icon</h5>
                <DuiButton accent><Home /></DuiButton>
                <DuiButton secondary><BookmarkOutlined /></DuiButton>
                <DuiButton alert><Delete /></DuiButton>
                <DuiButton><Mail /></DuiButton>
            </div>

            <div className="flex gap-4 mt-4">
                <h5>Combined</h5>
                <DuiButton accent><Handshake /> Hello!</DuiButton>
                <DuiButton secondary><WarningOutlined /> Beware! <Pets /></DuiButton>
                <DuiButton alert>No! <NotAccessible /></DuiButton>
                <DuiButton >Send <Mail /> to <People /></DuiButton>
            </div>

            <div className="flex gap-4 mt-4">
                <h5>Disabled</h5>
                <DuiButton disabled>Hello!</DuiButton>
            </div>

            <h2>Button groups</h2>

            <div className="flex flex-wrap gap-4 mt-4">
                <h5>Grouped</h5>

                <DuiControlsGroup accent>
                    <DuiButton>Let <People /></DuiButton>
                    <DuiButton><Handshake /></DuiButton>
                    <DuiButton>other <People /></DuiButton>
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

            <div className="flex flex-wrap gap-4 mt-4">
                <h5>Grouped vertical</h5>

                <DuiControlsGroup vertical>
                    <DuiButton><People /></DuiButton>
                    <DuiButton><Handshake /></DuiButton>
                    <DuiButton><Person /></DuiButton>
                </DuiControlsGroup>

                <DuiControlsGroup secondary vertical>
                    <DuiButton>Some <People /></DuiButton>
                    <DuiButton alert><Handshake /></DuiButton>
                    <DuiButton><Person /> without asking</DuiButton>
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

            <div className="flex flex-wrap gap-4 mt-4">
                <h5>Group with invalid child</h5>

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
};

export default Buttons;
