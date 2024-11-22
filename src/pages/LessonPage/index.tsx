import { observer } from 'mobx-react'
import style from './index.module.css'
import LessonContent from '../../features/LessonContent'
import Curtain from '../../components/Curtain'


const LessonPage = () => {
    return (
        <div className={style.wrapper}>
            <LessonContent />
            <Curtain />
        </div>
    )
}

export default observer(LessonPage)