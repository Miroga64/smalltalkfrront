
import { observer } from 'mobx-react';
import MainPageBanner from '../../components/MainPageBanner';
import MainPageContent from '../../features/MainPageContent';
import style from './index.module.css';
import Curtain from '../../components/Curtain';

const MainPage = () => {
    return (
        <div className={style.wrapper}>
            <MainPageBanner />
            <MainPageContent />
            <Curtain />
        </div>
    )
}

export default observer(MainPage);