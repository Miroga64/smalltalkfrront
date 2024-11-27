import { NavLink } from 'react-router-dom';
import style from './index.module.css'
import Tag from '../Tag';
import { observer } from 'mobx-react';
import { MyCoursesType } from '../../normalizers/myCourseNormalize';


export enum Statuses {
    COMPLETED = 'COMPLETED',
    INPROGRESS = 'INPROGRESS',
    NEW = 'NEW',
}

const statuses = {
    [Statuses.COMPLETED]: 'пройдено',
    [Statuses.INPROGRESS]: 'в работе',
    [Statuses.NEW]: 'новый',
}

const MyCourseCard = (props: MyCoursesType) => {
    const {
        title,
        tagStatus,
        progress,
        status,
        id
    } = props;
    return (
        <NavLink to={`/mycourse/${id}`} className={style.wrapper}>
            <div className={style.tagWrapper}><Tag isCaps type={tagStatus}/></div>
            <div className={style.title}>{title}</div>
            <div className={style.status}>
                <div className={style.top}>
                    <div className={style.description}>{statuses[status]}</div>
                    <div className={style.count}>{progress.completed}/{progress.total}</div>
                </div>
                <div className={style.bottom}>
                    {
                        (progress.completed || progress.completed !== 0) && (
                            <div
                                className={style.progress}
                                style={{
                                    width: `${progress.completed / progress.total * 100}%`
                                }}
                            ></div>
                        )
                    }
                </div>
            </div>
        </NavLink>
    )
}

export default observer(MyCourseCard);