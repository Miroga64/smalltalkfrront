import cn from 'classnames'
import style from './index.module.css'
import { CALENDAR, FILE, TIME, VIDEO } from '../../icons';
import { observer } from 'mobx-react';



export enum TagsTypes {
    INPROGRESS = 'INPROGRESS',
    COMPLETED = 'COMPLETED',
    NEW = 'NEW',
    VIDEO = 'VIDEO',
    FILE = 'FILE',
    BUYED = 'BUYED',
    CALENDAR = 'CALENDAR',
}

interface TagProps {
    type: TagsTypes;
    isCaps?: boolean,
    title?: string,
}

const tagsTexts = {
    [TagsTypes.INPROGRESS]: {
        title: 'В работе',
        icon: <TIME fill="#E0C1FF" stroke="#491779" />
    },
    [TagsTypes.COMPLETED]: {
        title: 'Пройден',
        icon: <TIME fill="#C1FFC3" stroke="#156718" />
    },
    [TagsTypes.NEW]: {
        title: 'Не начат',
        icon: <TIME fill="#929EB1" stroke="#2C2C2E" />
    },
    [TagsTypes.VIDEO]: {
        title: 'Видео',
        icon: <VIDEO fill="#C1FFC3" />
    },
    [TagsTypes.FILE]: {
        title: 'Файл',
        icon: <FILE fill="#8EAFFF" />
    },
    [TagsTypes.BUYED]: {
        title: 'Куплено',
        icon: null,
    },
    [TagsTypes.CALENDAR]: {
        title: '',
        icon: <CALENDAR fill="#929EB1" />
    }
}

const Tag = ({type, isCaps = true, title}: TagProps) => {
    return (
        <div className={cn(style.wrapper, )}>
            {
                tagsTexts[TagsTypes[type]]?.icon && (
                    <div className={style.icon}>{tagsTexts[TagsTypes[type]].icon}</div>
                )
            }
            <div
                className={cn(
                    style.title,
                    style[type],
                    {
                        [style.caps]: isCaps
                    }
                )}>
                    {
                        title ? title : tagsTexts[TagsTypes[type]].title
                    }
            </div>
        </div>
    )
}

export default observer(Tag)