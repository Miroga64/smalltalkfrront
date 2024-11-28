import style from './index.module.css'
import wordNormalize from "../../helpers/wordNomalize";
import { useAppStore } from "../../hooks/useAppStore";
import { observer } from 'mobx-react';


const CategoryBanner = () => {
    const {category} = useAppStore();
    
    return (
        <div
            className={style.wrapper}
            style={{backgroundImage: `url(${category?.image})`}}
        >
            <div className={style.title}>{category?.title}</div>
            <div className={style.bottom}>
                <div className={style.count}>{category?.count_courses}</div>
                <div className={style.description}>{wordNormalize('курс', category?.count_courses)} {wordNormalize('доступн', category?.count_courses, 'v')}</div>
            </div>
        </div>
    )
}

export default observer(CategoryBanner)