import { observer } from "mobx-react"
import { useState } from "react"
import { useAppStore } from "../../hooks/useAppStore"
import style from './index.module.css'
import MyCourseCard from "../MyCourseCard"
import CompletedCurtain from "../CompletedCurtain"
import { MyCoursesType } from "../../normalizers/myCourseNormalize"


const MyCoursesList = () => {
    const {myCourses} = useAppStore()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.wrapper}>
            {
                myCourses.inprocess.map((course: MyCoursesType) => (
                    <MyCourseCard
                        {...course}
                        key={course.id}
                    />
                ))
            }
            {
                myCourses.completed.length > 0 && (
                    <CompletedCurtain isOpen={isOpen} setIsOpen={setIsOpen} items={myCourses.completed}/>
                )
            }
        </div>
    )
}

export default observer(MyCoursesList)