import { useState } from "react"
import style from './index.module.css'
import SwitcherMemo, {SwitcherValuesEnum} from "../../components/Switcher"
import AvailableCategoryListMemo from "../../components/AvailableCategoriesList";
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
                    <AvailableCategoryListMemo />
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