import style from './index.module.css'
import wordNormalize from "../../helpers/wordNomalize";
import { useAppStore } from "../../hooks/useAppStore";
import { observer } from 'mobx-react';


const CategoryBanner = () => {
    const {category} = useAppStore();
    
    return (
        <div
            className={style.wrapper}
            style={{backgroundImage: `url(${category.banner.src})`}}
        >
            <div className={style.title}>{category.banner.title}</div>
            <div className={style.bottom}>
                <div className={style.count}>{category.banner.count}</div>
                <div className={style.description}>{wordNormalize('курс', category.banner.count)} {wordNormalize('доступн', category.banner.count, 'v')}</div>
            </div>
        </div>
    )
}

export default observer(CategoryBanner)