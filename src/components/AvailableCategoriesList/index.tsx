import { useAppStore } from "../../hooks/useAppStore";
import style from './index.module.css'
import AvailableCategoryMemo from "../AvailableCategory";
import { observer } from "mobx-react";

const AvailableCategoryList = () => {
    const {availableCategories} = useAppStore();

    if(!availableCategories.length) {
        return null
    }

    return (
        <div className={style.wrapper}>
            {
                availableCategories.map((category: any) => (
                    <AvailableCategoryMemo
                        key={category.id}
                        image={category.image}
                        count={category.count}
                        name={category.name}
                        id={category.id}
                    />
                ))
            }
        </div>
    )
}

export default observer(AvailableCategoryList);