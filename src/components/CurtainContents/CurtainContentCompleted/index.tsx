import style from './index.module.css'
import CoursesList from "../../CoursesList";
import { observer } from 'mobx-react';

const CurtainContentCompleted = (props: any) => {
    const {recomendations, setClose} = props;
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <span className={style.titleText}>КУРС завершен</span>
                <div
                    className={style.exitButton}
                    onClick={() => {
                        setClose()
                    }}
                ></div>
            </div>
            <div className={style.description}>Поздравляем с успешным завершением курса! Вы проделали отличную работу, и это лишь начало. 
            Не останавливайтесь на достигнутом — выберите новый курс и продолжайте развиваться!</div>
            <div className={style.recomendation}>
                <div className={style.recomendationList}>
                    <CoursesList
                        title={'Подобрали для вас'}
                        courses={recomendations}
                        titlePadding={16}
                    />
                </div>
            </div>
        </div>
    );
}

export default observer(CurtainContentCompleted);
