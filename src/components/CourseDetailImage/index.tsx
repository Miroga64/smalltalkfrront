
import { observer } from 'mobx-react'
import style from './index.module.css'


interface CouseDetailImageProps {
    src: string,
}

const CouseDetailImage = ({src}: CouseDetailImageProps) => {
    return (
        <div
            className={style.wrapper}
            style={{
                backgroundImage: `url(${src})`
            }}
        />
    )
}

export default observer(CouseDetailImage)