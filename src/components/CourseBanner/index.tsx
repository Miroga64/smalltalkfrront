
import style from './index.module.css'
import { useAppStore } from '../../hooks/useAppStore'
import { observer } from 'mobx-react'


const CourseBanner = () => {
    const {course} = useAppStore()
    return (
        <div
            className={style.wrapper}
            style={{
                backgroundImage: `url(${course?.image})`
            }}
        ></div>
    )

}

export default observer(CourseBanner)