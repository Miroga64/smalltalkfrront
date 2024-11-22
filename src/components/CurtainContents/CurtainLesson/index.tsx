import style from './index.module.css'
import { observer } from 'mobx-react';

const CurtainLessonContent = (props: any) => {
    const {setClose, description} = props;
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <span className={style.titleText}>Об уроке</span>
                <div
                    className={style.exitButton}
                    onClick={() => {
                        setClose()
                    }}
                ></div>
            </div>
            <div className={style.description}>{description}</div>
        </div>
    );
}

export default observer(CurtainLessonContent);
