import { useState } from "react"
import style from './index.module.css'
import { observer } from "mobx-react"

interface DropDownTextProps {
    description: string,
}
const DropDownText = ({description}: DropDownTextProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={style.wrapper}>
            <div 
                className={style.text}
                style={{
                    lineClamp: `${isOpen ? 200 : 3}`,
                    WebkitLineClamp: `${isOpen ? 200 : 3}`,
                }}
            >{description}</div>
            <div
                onClick={() => {
                    setIsOpen((prev) => !prev)
                }}
                className={style.button}>
                {
                    isOpen ? "Свернуть" : "Показать полностью"
                }
                <div
                    className={style.arrow}
                    style={{
                        transform: `rotate(${isOpen ? 180 : 0}deg)`
                    }}
                ></div>
            </div>
        </div>
    )
}

export default observer(DropDownText)