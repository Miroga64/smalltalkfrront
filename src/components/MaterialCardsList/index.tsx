import { observer } from "mobx-react"
import style from './index.module.css'
import MaterialCard from "../MaterialCard"

interface MaterialCardsListProps {
    items: Array<any>
}

const MaterialCardsList = ({items}: MaterialCardsListProps) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>Материалы</div>
            <div className={style.listWrapper}>
                {
                    items.map((item, index) => (
                        <div className={style.itemWrapper}>
                            <MaterialCard
                                key={index}
                                title={item.title}
                                tagProps={{type: item.type}}
                                link={item.link}
                                preview={item.preview}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default observer(MaterialCardsList)