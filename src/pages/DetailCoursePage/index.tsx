import style from './index.module.css'
import DetailCourseContent from "../../features/DetailCourseContent"
import { observer } from 'mobx-react'
import Curtain from '../../components/Curtain'


const DetailCoursePage = () => {
    return (
        <div className={style.wrapper}>
            <DetailCourseContent />
            <Curtain />
        </div>
    )
}

export default observer(DetailCoursePage)