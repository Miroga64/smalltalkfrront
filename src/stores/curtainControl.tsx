import { action, makeAutoObservable } from "mobx";

interface ICurtainControl {
    children: any,
    isOpen: any,
    recomendations: any;
}

export class CurtainControl implements ICurtainControl {
    children: any;
    isOpen: any = false;
    recomendations: any;

    @action setProps = (props: any) => {
        if(props.children !== undefined) {
            this.children = props.children;
        }
        if(props.isOpen !== undefined) {
            this.isOpen = props.isOpen;
        }
    }

    @action setRecomendation = (recomendations: any) => {
        this.recomendations = recomendations;
    }

    constructor() {
        makeAutoObservable(this);
    }
}