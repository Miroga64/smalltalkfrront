import { useState } from "react"
import style from './index.module.css'
import SwitcherMemo, {SwitcherValuesEnum} from "../../components/Switcher"
import AvailableCategoryList from "../../components/AvailableCategoriesList";
import MyCoursesList from "../../components/MyCoursesList";
import { observer } from "mobx-react";

const MainPageContent = () => {
    const [switcherValue, setSwitcherValue] = useState(SwitcherValuesEnum.AVAILABLE);

    return (
        <>
            <div className={style.wrapper}>
                <SwitcherMemo value={switcherValue} setValue={setSwitcherValue}/>
            </div>
            {
                switcherValue === SwitcherValuesEnum.AVAILABLE && (
                    <AvailableCategoryList />
                )
            }
            {
                 switcherValue === SwitcherValuesEnum.INPROGRESS && (
                    <MyCoursesList />
                )
            }
        </>
    )
}

export default observer(MainPageContent)