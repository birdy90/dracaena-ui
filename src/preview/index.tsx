import React from "react";
import DuiContainer from "../components/layout/DuiContainer";
import Buttons from "./Buttons";
import Code from "./Code";
import Accordion from "./Accordion";
import Badges from "./Badges";
import Spinner from "./Spinner";
import Progress from "./Progress";
import Inputs from "./Inputs";
import Basics from "./Basics";
import SelectBoxes from "./SelectBoxes";
import RadioButtons from "./RadioButtons";
import CheckBoxes from "./CheckBoxes";
import DatePickers from "./DatePickers";
import Tooltips from "./Tooltips";
import Menus from "./Menus";
import Sliders from "./Sliders";
import Notifications from "./Notifications";
import Modals from "./Modals";
import Cards from "./Cards";
import Tables from "./Tables";

const Index = () => {
    return (
        <>
            <DuiContainer centered className="flex flex-col gap-2">
                <h1 className="dark:text-emerald-300">Dracaena UI Kit</h1>
            </DuiContainer>

            <div className="flex flex-col gap-2">
                <Menus />
                <DatePickers />
                <Sliders />
                <Tooltips />
                <Notifications />
                <Tables />

                <Basics />

                <Inputs />
                <SelectBoxes />

                <CheckBoxes />
                <RadioButtons />

                <Buttons />
                <Badges />
                <Spinner />
                <Cards />
                <Modals />
                <Accordion />
                <Code />
                <Progress />
            </div>
        </>
    )
};

export default Index;
