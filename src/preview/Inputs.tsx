import DuiInput from "../components/DuiInput";
import DuiContainer from "../components/layout/DuiContainer";
import {useState} from "react";
import {Help, People, Person, Search} from "@mui/icons-material";
import DuiButton from "../components/DuiButton";
import DuiControlsGroup from "../components/DuiControlsGroup";
import DuiTextarea from "../components/DuiTextarea";

const Inputs = () => {
    const [value, setValue] = useState('');

    return (
        <DuiContainer centered className="flex flex-col gap-2">
            <h2>Inputs</h2>

            <DuiContainer narrow className="flex flex-col gap-2">
                <p>Input without value prop: <span className="text-emerald-500 font-bold">{value}</span></p>

                <DuiInput placeholder="Some input" onChange={setValue} />

                <p>Input with value prop: <span className="text-emerald-500 font-bold">{value}</span></p>

                <DuiInput placeholder="Some input" value={value} onChange={setValue} clearable />

                <p>Inputs with icons and other content</p>

                <DuiInput placeholder="Some input" clearable>
                    <Search />
                </DuiInput>

                <DuiInput placeholder="Some input" contentOnTheLeft clearable>
                    <Person />
                    <Help />
                    <People />
                </DuiInput>

                <p>Clearable input</p>

                <DuiInput placeholder="Some input" clearable />

                <p>Readonly / Disabled inputs</p>

                <DuiInput value="This is a readonly input" readonly />
                <DuiInput value="This is disabled" disabled />
                <DuiInput disabled placeholder="Some input right">
                    <Search />
                    Search
                </DuiInput>

                <p>Borderless input</p>

                <DuiInput placeholder="This is a borderless input" borderless />

                <p>Colored input</p>

                <DuiInput placeholder="Some input accent" accent />
                <DuiInput placeholder="Some input secondary" secondary />
                <DuiInput placeholder="Some input alert" alert />
                <DuiInput placeholder="Some input default" />
                <p>Labeled input</p>
                <DuiInput label="The label" placeholder="Some input with label" />
                <DuiInput
                    label="The label"
                    sublabel="And this is an additional description for field"
                    placeholder="Some input with label"
                />
            </DuiContainer>

            <h2>Input groups</h2>

            <DuiContainer narrow className="flex flex-col gap-2">
                <DuiControlsGroup>
                    <DuiInput placeholder="Some input 1" />
                    <DuiButton secondary>Search</DuiButton>
                    <DuiInput placeholder="Some input 2" />
                </DuiControlsGroup>

                <DuiControlsGroup>
                    <DuiInput placeholder="Some input left" />
                    <DuiButton>Search</DuiButton>
                </DuiControlsGroup>

                <DuiControlsGroup>
                    <DuiButton>Search</DuiButton>
                    <DuiInput placeholder="Some input right">
                        <Search />
                    </DuiInput>
                </DuiControlsGroup>

                <DuiControlsGroup>
                    <DuiButton>Search</DuiButton>
                    <DuiInput placeholder="Some input right">
                        <Search />
                    </DuiInput>
                    <DuiButton>Search</DuiButton>
                </DuiControlsGroup>

                <DuiControlsGroup>
                    <DuiButton>-</DuiButton>
                    <DuiInput placeholder="Some input right" />
                    <DuiButton>+</DuiButton>
                </DuiControlsGroup>

                <DuiControlsGroup>
                    <DuiButton>Search</DuiButton>
                    <DuiInput placeholder="Some input right" borderless>
                        <Search />
                    </DuiInput>
                    <DuiButton>Search</DuiButton>
                </DuiControlsGroup>

                <p>Disabled group</p>

                <DuiControlsGroup disabled>
                    <DuiInput placeholder="Some search input with button" />
                    <DuiButton>Search</DuiButton>
                </DuiControlsGroup>
            </DuiContainer>

            <h2>Textarea</h2>

            <DuiContainer narrow className="flex flex-col gap-2">
                <DuiTextarea placeholder="Accent textarea" accent />
                <DuiTextarea placeholder="Secondary textarea" secondary />
                <DuiTextarea placeholder="Some long long very long long long long very  long long very long long long long very  long long very long long long long very  long long very long long long long very very long very long long long very long long long long very very long very long long long very long long long long very very long very long value" alert />
                <DuiTextarea placeholder="Disabled textarea" disabled />
                <DuiTextarea placeholder="Code textarea" code />
                <DuiTextarea label="The label" placeholder="Labeled textarea" />
            </DuiContainer>
        </DuiContainer>
    );
};

export default Inputs;
