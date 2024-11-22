
import style from './index.module.css'
import cn from 'classnames'
import { useBottonContent } from "../../hooks/useBottomContent";
import { observer } from 'mobx-react';

const BottomContent = () => {
    const {
        callback,
        buttonProps,
        isOpen
    } = useBottonContent();

    return (
        <div
            className={cn(style.wrapper, {
                [style.opened]: !!isOpen,
            })}
        >
            <div
                className={cn(style.button, {
                    [style.disabled]: !callback,
                    [style.spaceBetween]:  buttonProps?.title && buttonProps?.subtitle
                })}
                style={{
                    backgroundColor: buttonProps?.backgroundColor,
                }}
                onClick={() => {
                    if(callback) {
                        callback()
                    }
                }}
            >
                {
                    buttonProps?.title && (<span style={{color: buttonProps.titleColor}}>{buttonProps?.title}</span>)
                }
                {
                    buttonProps?.subtitle && (<span style={{color: buttonProps.subtitleColor}}>{buttonProps?.subtitle}</span>)
                }
            </div>
        </div>
    )
}

export default observer(BottomContent);