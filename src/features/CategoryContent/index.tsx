import style from './index.module.css'
import { useAppStore } from "../../hooks/useAppStore"
import { CourseCardProps } from "../../components/CourseCard"
import CoursesList from "../../components/CoursesList"
import { observer } from 'mobx-react'


interface CategoryInterface {
    title: string,
    id: number,
    items: Array<CourseCardProps>
}

const CategoryContent = () => {
    const {category} = useAppStore();

    return(
        <div className={style.wrapper}>
                {
                    category.categories.map((category: CategoryInterface) => (
                        <div className={style.coursesWrapper}>
                            <CoursesList
                                key={category.id}
                                {...category}
                            />
                        </div>
                    ))
                }
        </div>
    )
}

export default observer(CategoryContent)