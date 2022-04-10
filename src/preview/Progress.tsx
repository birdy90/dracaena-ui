import DuiProgress from "../components/DuiProgress";
import DuiContainer from "../components/layout/DuiContainer";

const Progress = () => {
    return (
        <DuiContainer centered className="flex flex-col gap-2">
            <h2>Progress</h2>

            <p>Common progress bar</p>
            <DuiProgress progress={33} />
            <p>Progress bar with percentage</p>
            <DuiProgress progress={53.75} withPercentage />
        </DuiContainer>
    );
};

export default Progress;
