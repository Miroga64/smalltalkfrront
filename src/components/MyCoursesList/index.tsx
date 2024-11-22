import { observer } from "mobx-react"
import { useState } from "react"
import { useAppStore } from "../../hooks/useAppStore"
import style from './index.module.css'
import MyCourseCard, { MyCoursesInterface } from "../MyCourseCard"
import CompletedCurtain from "../CompletedCurtain"


const MyCoursesList = () => {
    const {myCourses} = useAppStore()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.wrapper}>
            {
                myCourses.inprocess.map((course: MyCoursesInterface) => (
                    <MyCourseCard
                        title={course.title}
                        tagStatus={course.tagStatus}
                        currentProgress={course.currentProgress}
                        fullCount={course.fullCount}
                        status={course.status}
                        key={course.id}
                        id={course.id}
                    />
                ))
            }
            <CompletedCurtain isOpen={isOpen} setIsOpen={setIsOpen} items={myCourses.completed}/>
        </div>
    )
}

export default observer(MyCoursesList)