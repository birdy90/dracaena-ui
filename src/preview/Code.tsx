import DuiCode from "../components/DuiCode";
import DuiContainer from "../components/layout/DuiContainer";

const Code = () => {
    return (
        <DuiContainer centered className="flex flex-col gap-2">
            <h2>Code blocks</h2>

            <p>
                This is some <DuiCode inline>inline code block</DuiCode>. Can be used to highlight
                things in paragraph.
            </p>

            <p>And this is large code block:</p>

            <DuiCode>
{`const DuiCode = (props) => {
    return (
        <code className={\`
            bg-stone-100 rounded-xl
            \${ props.inline ? 'inline px-2 py-1' : ' block w-full px-4 py-2' }
        \`}>
            <pre>{ props.children }</pre>
        </code>
    );
};

export default DuiCode;`}
            </DuiCode>

            <p>Here you can see the <DuiCode inline>DuiCode</DuiCode> component sources.</p>
        </DuiContainer>
    );
};

export default Code;
