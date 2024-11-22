import { observer } from "mobx-react";
import CategoryBanner from "../../components/CategoryBanner";
import CategoryContent from "../../features/CategoryContent";
import style from './index.module.css'
import Curtain from "../../components/Curtain";

const CategoryPage = () => {
    return (
        <div className={style.wrapper}>
            <CategoryBanner />
            <CategoryContent />
            <Curtain />
        </div>
    )
}

export default observer(CategoryPage);