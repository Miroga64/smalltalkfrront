import { observer } from 'mobx-react'
import style from './index.module.css'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import MyCourseCard, { Statuses } from '../MyCourseCard'
import { TagsTypes } from '../Tag'

const mocks: any = [
    {
        id: 0,
        title: 'Гитарный Гуру: От Основ до Виртуозного Исполнения',
        currentProgress: 16,
        fullCount: 16,
        status: Statuses.COMPLETED,
        tagStatus: TagsTypes.COMPLETED,
    },
    {
        id: 1,
        title: 'Студийная Магия: Основы Звукозаписи и Микширования',
        currentProgress: 2,
        fullCount: 16,
        status: Statuses.INPROGRESS,
        tagStatus: TagsTypes.INPROGRESS,
    },
]

const CompletedCurtainWithScroll = ({currentpx, isTouchActive}: any) => {
    const [contentWidth, setContentWidth] = useState(0);

    console.log('currentpx:', currentpx < 5 ? -1 : 10);

    const ref = useRef<any>();
    const titleRef = useRef<any>()

    useEffect(() => {
        if(ref.current) {
            console.log(ref.current.clientHeight)
            setContentWidth(ref.current.height)
        }
    // eslint-disable-next-line
    }, [ref.current])
    
    return (
        <div className={cn(style.wrapper)}>
            <div 
                style={{
                    zIndex: currentpx === 0 ? -1 : 10,
                    opacity: currentpx === 0 ? 0 : currentpx / 70
                }}
                className={style.bg}
            ></div>

            <div
                className={style.innerWrapper}
                style={{
                    maxHeight: `${78 + currentpx}px`,
                }}
            >
                <div ref={ref} className={style.content}>
                    <div ref={titleRef} className={style.title}>
                        <span>
                            пройденные
                        </span>
                    </div>
                    <div className={style.list}>
                        {
                            mocks.map((course: any) => (
                                <MyCourseCard
                                    {...course}
                                    key={course.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(CompletedCurtainWithScroll);