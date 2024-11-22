import { observer } from "mobx-react"
import style from './index.module.css'
import Tag, { TagsTypes } from "../Tag";

interface LessonHeaderProps {
    title: string,
    description: string,
    deadline?: Date,
}

const LessonHeader = (props: LessonHeaderProps) => {
    const {
        title,
        description,
        deadline
    } = props;

    return (
        <div className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            {
                deadline && (
                    <div className={style.deadline}>
                        <Tag
                            type={TagsTypes.CALENDAR}
                            title={deadline.toISOString()}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default observer(LessonHeader)