import style from './index.module.css'
import { useAppStore } from "../../hooks/useAppStore"
import CoursesList from "../../components/CoursesList"
import { observer } from 'mobx-react'
import CategoryCoursesNormalize, { CategorySubcategories } from '../../normalizers/categoryCoursesNormalize'


const CategoryContent = () => {
    const {category} = useAppStore();

    return(
        <div className={style.wrapper}>
                {
                    category?.subcategories.map((subcategory: CategorySubcategories) => (
                        <div className={style.coursesWrapper}>
                            <CoursesList
                                key={category.id}
                                {...CategoryCoursesNormalize(subcategory)}
                            />
                        </div>
                    ))
                }
        </div>
    )
}

export default observer(CategoryContent)