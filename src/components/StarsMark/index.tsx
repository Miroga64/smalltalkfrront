import { observer } from 'mobx-react'
import style from './index.module.css'



export interface StarsMarkProps {
    count: number,
    size?: number
}

const getStarFillWidth = (count: number, index: number) => {
    if(index < count) {
        return 100
    }

    console.log('index + 1 > count:', 100 - (index - count) * 100) 

    return 100 - (index - count) * 100
}

const StarsMark = (props: StarsMarkProps) => {
    const {
        count,
        size = 12
    } = props;
    return (
        <div className={style.wrapper}>
            {
                [1, 2, 3, 4, 5].map((el: number) => (
                    <div
                        className={style.star}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    >
                        <div
                            className={style.starFill}
                            style={{
                                width: `${getStarFillWidth(count, el)}%`
                            }}
                        ></div>
                    </div>
                ))
            }
        </div>
    )
}

export default observer(StarsMark)