import {action, makeAutoObservable} from 'mobx'
import { ReactElement } from 'react';

interface IBottomControl {
    callback?: any,
    buttonProps?: {
        backgroundColor?: string,
        title?: string,
        titleColor?: string,
        subtitle?: string,
        subtitleColor?: string,
        isImportantColor?: boolean,
        component?: ReactElement
    },
    isOpen?: boolean,
}

export class BottomControl implements IBottomControl {
    callback: any;
    buttonProps?: {
        backgroundColor?: string,
        title?: string,
        titleColor?: string,
        subtitle?: string,
        subtitleColor?: string,
        isImportantColor?: boolean,
        component?: ReactElement
    };
    isOpen: boolean = false;

    @action setProps = (props: IBottomControl) => {
        if(props.callback !== undefined) {
            this.callback = props.callback;
        }
        if(props.buttonProps !== undefined) {
            this.buttonProps = props.buttonProps;
        }
        if(props.isOpen !== undefined) {
            this.isOpen = props.isOpen;
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}
