import { ReactElement, useState } from 'react';
import style from './index.module.css'
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import Tag, { TagsTypes } from '../Tag';


interface DropDownListItems {
    title: string,
    path: string,
    id: number,
    isDisabled?: boolean,
    complete?: boolean,
}

export interface DropDownListProps {
    subtitle?: string,
    title: string,
    description?: string,
    items: Array<DropDownListItems>,
    startedItemsCount?: number,
    customButton?: ReactElement,
    tagStatus?: TagsTypes,
}

const DropDownList = (props: DropDownListProps) => {
    const {
        subtitle,
        title,
        description,
        items,
        startedItemsCount = 0,
        customButton,
        tagStatus,
    } = props;

    const [currentItemsCount, setCurrentItemsCount] = useState(startedItemsCount)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                {
                    (subtitle || tagStatus) && (
                        <div className={cn(style.subtitle, style.upperCase)}>
                            {
                                subtitle && <span>{subtitle}</span>
                            }
                            {
                                tagStatus && <Tag type={tagStatus}/>
                            }
                        </div>
                    )
                }
                <div className={style.title}>{title}</div>
                {
                    description && (
                        <div className={style.subtitle}>{description}</div>
                    )
                }
            </div>
            <div className={style.items}>
                {
                    (currentItemsCount === items.length ? items : items.slice(0, currentItemsCount)).map((item) => (
                        <>
                        {
                            item.isDisabled
                            ? (
                                <div key={item.id} className={style.item}>
                                    <div className={cn(style.itemTitle, style.disabled)}>{item.title}</div>
                                </div>
                            )
                            : (
                                <NavLink key={item.id} to={`/${item.path}/${item.id}`} className={style.item}>
                                    <div className={style.itemTitle}>{item.title}</div>
                                    <div className={cn(style.arrow, {[style.completedArrow]: item.complete})}></div>
                                </NavLink>
                            )
                        }
                        </>
                    ))
                }
            </div>
            <div className={style.buttonWrapper}>
                {
                    customButton
                    ? customButton
                    : (
                        <div
                            className={style.button}
                            onClick={() => {
                                if(currentItemsCount === 0) {
                                    setCurrentItemsCount(items.length)
                                } else {
                                    setCurrentItemsCount(0)
                                }
                            }}
                        >
                            <span>{currentItemsCount === items.length ? 'Скрыть уроки' : 'Показать уроки'}</span>
                            <div
                                className={style.buttonArrow}
                                style={{
                                    transform: `rotate(${currentItemsCount === items.length ? 180 : 0}deg)`
                                }}
                            ></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default observer(DropDownList)