import { observer } from "mobx-react"
import style from './index.module.css'
import { useAppStore } from "../../hooks/useAppStore"
import LessonHeader from "../../components/LessonHeader";
import CoursesList from "../../components/CoursesList";
import { useEffect, useMemo } from "react";
import { useBottonContent } from "../../hooks/useBottomContent";
import { useCurtainControl } from "../../hooks/useCurtainContol";
import CurtainLesson from "../../components/CurtainContents/CurtainLesson";

const LessonContent = () => {
    const {lesson} = useAppStore(); 
    const {setProps} = useBottonContent()
    const {setProps: setCurtainProps} = useCurtainControl();

    useEffect(() => {
        setProps({
            isOpen: true,
            buttonProps: {
                title: 'Следующий урок',
                backgroundColor: 'rgba(121, 93, 149, 1)',
                titleColor: `rgba(164, 164, 165, 1)`,
            },
        })
    }, [])

    const handleClick = useMemo(() => () => {
        setCurtainProps({
            isOpen: true,
            children: <CurtainLesson
                description={lesson.description}
                setClose={() => {
                    setCurtainProps({
                        isOpen: false
                    })
                    setTimeout(() => {
                        setCurtainProps({
                            children: undefined
                        })
                    }, 300)
                }}
            />
        })
    }, [])

    
    return (
        <>
            <LessonHeader id={lesson.id}/>
            <div className={style.wrapper}>
                <div className={style.title}>{lesson.title}</div>
                <div className={style.more}>
                    <span onClick={handleClick}>Подробнее</span>
                    <div className={style.arrow}></div>
                </div>
                <div className={style.need}>
                    <CoursesList
                        title={'Потребуется для урока'}
                        items={lesson.recomendations}
                        negativeMargin={16}
                        paddingLeft={8}
                        titlePadding={16}
                        titleSize={16}
                    />
                </div>
            </div>
        </>
    )
}

export default observer(LessonContent)