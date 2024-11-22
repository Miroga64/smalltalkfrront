
import { observer } from 'mobx-react'
import style from './index.module.css'


const CourseDetailContent = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}></div>
        </div>
    )
}

export default observer(CourseDetailContent)