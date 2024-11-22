import style from './index.module.css'
import MainBannerBg from '../../images/MainBannerBg.png'
;
import { observer } from 'mobx-react';


const MainPageBanner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${MainBannerBg})`,
            }}
            className={style.banner}
        ></div>
    )
}

export default observer(MainPageBanner);