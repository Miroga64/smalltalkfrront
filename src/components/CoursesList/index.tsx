
import style from './index.module.css'
import CourseCard, { CourseCardProps } from "../CourseCard"
import { observer } from 'mobx-react'

interface CoursesListProps {
    items: Array<CourseCardProps>,
    title: string
    titlePadding?: number,
    titleSize?: number,
    negativeMargin?: number,
    paddingLeft?: number,
    withoutCount?: boolean,
}

const CoursesList = (props: CoursesListProps) => {
    const {
        items,
        title, 
        titlePadding, 
        withoutCount, 
        titleSize = 20, 
        negativeMargin = 0, 
        paddingLeft = 0
    } = props;
    return (
        <div
            className={style.wrapper}
            style={{
                width: `calc(100% + ${negativeMargin * 2}px)`,
                marginLeft: `-${negativeMargin}px`,
                marginRight: `-${negativeMargin}px`,
            }}
        >
            <div
                className={style.title}
                style={{
                    paddingLeft: `${titlePadding}px`,
                    fontSize: `${titleSize}px`
                }}
            >
                <div
                    style={{
                        fontSize: `${titleSize}px`
                    }}
                    className={style.text}
                >{title}</div>
                {
                    withoutCount && (
                        <div className={style.count}>{items.length}</div>
                    )
                }
            </div>
            <div
                className={style.scroll}
                style={{
                    paddingLeft: `${paddingLeft}px`
                }}
            >
                {
                    items.map((course) => (
                        <CourseCard
                            key={course.id}
                            {...course}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default observer(CoursesList)