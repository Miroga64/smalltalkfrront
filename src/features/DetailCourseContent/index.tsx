import style from './index.module.css'
import { useAppStore } from '../../hooks/useAppStore'
import DropDownList from '../../components/DropDownList';
import { observer } from 'mobx-react';


const DetailCourseContent = () => {
    const {course} = useAppStore();

    return(
        <div className={style.wrapper}>
            {
                course?.title && course?.modules && (
                    <>
                        <div className={style.title}>{course.title}</div>
                        <div className={style.modulesContainer}>
                            {
                                course.modules.map((module: any, index: number) => (
                                    <div key={module.id} className={style.module}>
                                        <DropDownList
                                            title={module.title}
                                            startedItemsCount={index === 0 ? module.items.length : 0}
                                            items={module.items}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

export default observer(DetailCourseContent)