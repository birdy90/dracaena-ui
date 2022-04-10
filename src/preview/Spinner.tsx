import DuiSvgSpinner from "../components/loaders/DuiSvgSpinner";
import DuiButton from "../components/DuiButton";
import DuiContainer from "../components/layout/DuiContainer";
import DuiSquareLoader from "../components/loaders/DuiSquareLoader";

const Spinner = () => {
    return (
        <DuiContainer centered className="flex flex-col gap-2">
            <h2>Spinner</h2>

            <div className="flex flex-wrap items-center gap-4 mt-4">
                <DuiSvgSpinner />
                <DuiButton loading />
                <DuiButton accent loading>Hello world</DuiButton>
                <DuiButton secondary loading>Hello world</DuiButton>
                <DuiButton alert loading>Hello world</DuiButton>
                <DuiButton loading>Hello world</DuiButton>
            </div>

            <p>Square loading indicators</p>
            <div className="flex gap-8">
                <DuiSquareLoader accent />

                <DuiSquareLoader type="flip" secondary />

                <DuiSquareLoader type="fade" alert />

                <DuiSquareLoader random type="scale" />
            </div>
        </DuiContainer>
    );
};

export default Spinner;
