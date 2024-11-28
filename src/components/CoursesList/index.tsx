
import style from './index.module.css'
import CourseCard from "../CourseCard"
import { observer } from 'mobx-react'
import { CategorySubcategories } from '../../normalizers/categoryCoursesNormalize';

const CoursesList = (props: CategorySubcategories) => {
    const {
        courses,
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
                        <div className={style.count}>{courses.length}</div>
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
                    courses.map((course) => (
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