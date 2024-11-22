import { NavLink } from 'react-router-dom';
import style from './index.module.css'
import Tag, { TagsTypes } from '../Tag';
import { observer } from 'mobx-react';


export enum Statuses {
    COMPLETED = 'COMPLETED',
    INPROGRESS = 'INPROGRESS',
    NEW = 'NEW',
}

export interface MyCoursesInterface {
    title: string,
    tagStatus: TagsTypes,
    currentProgress: number,
    fullCount: number,
    status: Statuses,
    id: string,
}

const statuses = {
    [Statuses.COMPLETED]: 'пройдено',
    [Statuses.INPROGRESS]: 'в работе',
    [Statuses.NEW]: 'новый',
}

const MyCourseCard = (props: MyCoursesInterface) => {
    const {
        title,
        tagStatus,
        currentProgress,
        fullCount,
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
                    <div className={style.count}>{currentProgress}/{fullCount}</div>
                </div>
                <div className={style.bottom}>
                    {
                        (currentProgress || currentProgress !== 0) && (
                            <div
                                className={style.progress}
                                style={{
                                    width: `${currentProgress / fullCount * 100}%`
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