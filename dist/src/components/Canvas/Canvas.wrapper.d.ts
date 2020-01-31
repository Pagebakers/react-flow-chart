import * as React from 'react';
import { IConfig, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas } from '../../';
import { ICanvasInnerDefaultProps } from './CanvasInner.default';
import { ICanvasOuterDefaultProps } from './CanvasOuter.default';
import { ICanvasScaleDefaultProps } from './CanvasScale.default';
export interface ICanvasWrapperProps {
    config: IConfig;
    position: {
        x: number;
        y: number;
    };
    scale: number;
    onDragCanvas: IOnDragCanvas;
    onDeleteKey: IOnDeleteKey;
    onCanvasClick: IOnCanvasClick;
    onCanvasDrop: IOnCanvasDrop;
    ComponentInner: React.FunctionComponent<ICanvasInnerDefaultProps>;
    ComponentOuter: React.FunctionComponent<ICanvasOuterDefaultProps>;
    ComponentScale: React.FunctionComponent<ICanvasScaleDefaultProps>;
    onSizeChange: (x: number, y: number) => void;
    children: any;
}
interface IState {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
}
export declare class CanvasWrapper extends React.Component<ICanvasWrapperProps, IState> {
    state: {
        width: number;
        height: number;
        offsetX: number;
        offsetY: number;
    };
    private ref;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private updateSize;
}
export {};
