import { observer } from 'mobx-react';
import style from './index.module.css'
import cn from "classnames";

export enum SwitcherValuesEnum {
    AVAILABLE = 'AVAILABLE',
    INPROGRESS = 'INPROGRESS',
}

interface SwitcherProps {
    value: SwitcherValuesEnum,
    setValue: (e: SwitcherValuesEnum) => void
}

const Switcher = (props: SwitcherProps) => {
    const {
        value,
        setValue
    } = props;
    return (
        <div className={cn(style.switcher, {
            [style.leftActive]: value === SwitcherValuesEnum.AVAILABLE
        })}>
            <div
                className={cn(style.switcherItem, {
                    [style.active]:  value === SwitcherValuesEnum.AVAILABLE
                })}
                onClick={() => {setValue(SwitcherValuesEnum.AVAILABLE)}}
            >Доступные</div>
            <div
                className={cn(style.switcherItem, {
                    [style.active]:  value === SwitcherValuesEnum.INPROGRESS
                })}
                onClick={() => {setValue(SwitcherValuesEnum.INPROGRESS)}}
            >Я прохожу</div>
        </div>
    )
}

export default observer(Switcher);