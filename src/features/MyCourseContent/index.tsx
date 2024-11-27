import { observer } from "mobx-react"
import style from './index.module.css'
import MyCourseCard, { Statuses } from "../../components/MyCourseCard"
import { useAppStore } from "../../hooks/useAppStore"
import DropDownList from "../../components/DropDownList"
import { useEffect } from "react"
import { useCurtainControl } from "../../hooks/useCurtainContol"
import CurtainContent from "../../components/CurtainContents/CurtainContentCompleted"
import { useBottonContent } from "../../hooks/useBottomContent"
import { useNavigate } from "react-router-dom"


const MyCourseContent = () => {
    const {myCourse} = useAppStore();
    const {setProps: setCurtainProps} = useCurtainControl();
    const {setProps: setBottomContentProps} = useBottonContent();
    const {modules, recomendations} = myCourse;
    const navigate = useNavigate();

    useEffect(() => {
        if(myCourse.status === Statuses.COMPLETED) {
            setBottomContentProps({
                isOpen: true,
                callback: () => {
                    setCurtainProps({
                        children: <CurtainContent
                                recomendations={recomendations}
                                setClose={() => {
                                    setCurtainProps({isOpen: false})
                                }}
                            />,
                        isOpen: true,
                    })
                },
                buttonProps: {
                    title: 'Завершить курс',
                    backgroundColor: 'rgba(241, 190, 18, 1)'
                }
            })
        }  else {
            setBottomContentProps({
                isOpen: true,
                callback: () => {navigate('/lesson/0')},
                buttonProps: {
                    title: 'Продолжить',
                }
            })
        }

        return () => {
            setBottomContentProps({
                isOpen: false,
            });
            setCurtainProps({isOpen: false, children: null});
        }
    // eslint-disable-next-line
    }, [myCourse.status])

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <MyCourseCard
                    title={myCourse.title}
                    tagStatus={myCourse.tagStatus}
                    progress={{
                        completed: myCourse.currentProgress,
                        total: myCourse.fullCount
                    }}
                    status={myCourse.status}
                    id={myCourse.id}
                />
            </div>
            <div className={style.content}>
                {
                    modules.map((module: any) => (
                        <div className={style.listWrapper}>
                            <DropDownList
                                {...module}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default observer(MyCourseContent)