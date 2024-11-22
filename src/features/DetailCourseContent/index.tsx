import style from './index.module.css'
import { useAppStore } from '../../hooks/useAppStore'
import DropDownList from '../../components/DropDownList';
import { observer } from 'mobx-react';


const DetailCourseContent = () => {
    const {detailCourse} = useAppStore();

    const {title, modules} = detailCourse;

    return(
        <div className={style.wrapper}>
            <div className={style.title}>{title}</div>
            <div className={style.modulesContainer}>
                {
                    modules.map(({id, subtitle, title, items}: any, index: number) => (
                        <div key={id} className={style.module}>
                            <DropDownList
                                subtitle={subtitle}
                                title={title}
                                startedItemsCount={index === 0 ? items.length : 0}
                                items={items}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default observer(DetailCourseContent)