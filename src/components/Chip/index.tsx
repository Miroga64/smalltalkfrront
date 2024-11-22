import { observer } from "mobx-react";
import cn from 'classnames'
import style from './index.module.css'

interface ChipProps {
    title: string;
    isCaps?: boolean,
    backgrond?: string,
}

const Chip = (props: ChipProps) => {
    const {
        title,
        backgrond,
        isCaps = true,
    } = props;

    return (
        <div 
            className={cn(style.wrapper, {[style.caps]: isCaps})}
            style={{
                background: backgrond,
            }}
        >
            {title}
        </div>
    )
}

export default observer(Chip);