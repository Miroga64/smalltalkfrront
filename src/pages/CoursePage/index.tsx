import style from './index.module.css'
import CourseBanner from "../../components/CourseBanner"
import CourseContent from "../../features/CourseContent"
import { observer } from "mobx-react"
import Curtain from '../../components/Curtain'

const CoursePage = () => {
    return (
        <div className={style.wrapper}>
            <CourseBanner />
            <CourseContent />
            <Curtain />
        </div>
    )
}

export default observer(CoursePage)