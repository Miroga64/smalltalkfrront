import { observer } from "mobx-react"
import style from './index.module.css'
import Chip from "../Chip"
import { NavLink } from "react-router-dom"

interface CompletedCourseProps {
    title: string,
    id: number,
    chips: Array<{
        title: string,
        background?: string
    }>
}

const CompletedCourse = (props: CompletedCourseProps) => {
    const {
        title,
        chips,
        id,
    } = props;

    return (
        <NavLink to={`/lesson/${id}`} className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.chipList}>
                {
                    chips.map((chip) => (
                        <div className={style.chipWrapper}>
                            <Chip {...chip} />
                        </div>
                    ))
                }
            </div>
        </NavLink>
    )
}

export default observer(CompletedCourse)