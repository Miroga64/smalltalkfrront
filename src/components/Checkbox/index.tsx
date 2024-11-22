import { observer } from "mobx-react"
import cn from 'classnames'
import style from './index.module.css'

interface CheckboxProps {
    value: boolean,
    setValue: (e: boolean) => void,
    id: string,
}

const Checkbox = (props: CheckboxProps) => {
    const {
        value,
        setValue,
        id
    } = props;
    return (
        <label className={cn(style.label, {
            [style.active]: value
        })}>
            <div className={style.circle}></div>
            <input onChange={(e) => {
                setValue(e.target.checked);
            }} className={style.input} type="checkbox"/>
        </label>
    )
}

export default observer(Checkbox)