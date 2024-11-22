import { observer } from 'mobx-react'
import style from './index.module.css'
import MyCourseContent from '../../features/MyCourseContent'
import Curtain from '../../components/Curtain'


const MyCoursePage = () => {
    return (
        <div className={style.wrapper}>
            <MyCourseContent />
            <Curtain />
        </div>
    )
}

export default observer(MyCoursePage)