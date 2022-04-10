import React, {Component, PropsWithChildren} from "react";
import ReactDOM from "react-dom";
import DuiCard from "../DuiCard";

type FunctionParameterless = () => void;
type FunctionBoolean = (b: boolean) => void;

type Props = {
    className?: string,
    onClose?: FunctionParameterless | FunctionBoolean,
    appearAnimation?: boolean,
    isVisible?: boolean,
}

type DuiModalProps = PropsWithChildren<Props>;

class DuiModal extends Component<DuiModalProps> {
    el: HTMLElement | undefined = undefined;

    createPortalElement = (): HTMLElement => {
        const newElement = document.createElement('div');
        newElement.className = 'portal-wrapper';
        return newElement;
    }

    openPortal = () => {
        if (this.el) return;
        this.el = this.createPortalElement();
        document.body.appendChild(this.el);
    }

    onBackgroundClick = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        // @ts-ignore
        this.props.onClose();
    }

    closePortal = () => {
        if (this.el) {
            document.body.removeChild(this.el);
        }
    }

    componentDidMount() {
        this.openPortal();
    }

    componentWillUnmount() {
        this.closePortal();
    }

    render() {
        return (this.props.isVisible && this.el ?
            ReactDOM.createPortal(
                <div
                    className="fixed top-0 left-0 h-full w-full bg-stone-600/50 flex items-center justify-center"
                    onClick={this.onBackgroundClick}
                >
                    <DuiCard className={`
                        absolute
                        ${this.props.appearAnimation ? 'animate-card-appear' : ''}
                        ${this.props.className}
                    `}>
                        { this.props.children }
                    </DuiCard>
                </div>,
                this.el
            ) : null);
    }
}

export default DuiModal;

export {
    DuiModalProps,
}
