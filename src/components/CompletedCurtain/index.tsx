import { observer } from 'mobx-react'
import style from './index.module.css'
import cn from 'classnames'
import { Dispatch, useEffect, useMemo, useRef, useState } from 'react'
import { ARROWTOP } from '../../icons'
import CompletedCourse from '../CompletedCourse'
import useBlockGlobalScroll from '../../hooks/useBlockGlobalScroll'

interface CompletedCurtainProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>,
    items: Array<any>
}

const CompletedCurtain = (props:CompletedCurtainProps) => {
    const {
        isOpen,
        setIsOpen,
        items
    } = props;

    const [contentWidth, setContentWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState<any>(0);
    const [scrollStatus, setScrollStatus] = useState('hidden');
    const {setGlobalScroll} = useBlockGlobalScroll();
    const ref = useRef<any>();
    const titleRef = useRef<any>();

    const handleOpen = useMemo(() => (openStatus: boolean) => {
        if(openStatus) {
            setIsOpen(true)
            setGlobalScroll('hidden')
        } else {
            setIsOpen(false)
            setGlobalScroll('scroll')
        }
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        if(isOpen) {
            setTimeout(() => {
                setScrollStatus('scroll')
            }, 450)
        } else {
            setScrollStatus('hidden')
        }
    }, [isOpen])

    useEffect(() => {
        if(ref.current) {
            const {height} = ref.current.getBoundingClientRect()
            setContentWidth(height)
        }
    // eslint-disable-next-line
    }, [ref.current])

    return (
        <div className={cn(style.wrapper, {[style.opened]: isOpen})}>
            <div 
                className={style.bg}
                onClick={() => {
                    if(isOpen) {
                        handleOpen(false);
                    }
                }}
            />
            <div
                className={style.innerWrapper}
                style={{
                    maxHeight: `${isOpen ? Math.min(windowHeight, contentWidth) : 78}px`,
                    overflow: `${scrollStatus}`
                }}
                onClick={() => {
                    if(!isOpen) {
                        handleOpen(true);
                    }
                }}
            >
                <div
                    ref={ref}
                    className={style.content}
                    style={{
                        borderRadius: `${isOpen && contentWidth >= windowHeight ? '0px' : '24px 24px 0 0'}`
                    }}
                >
                    <div ref={titleRef} className={style.title} onClick={() => handleOpen(!isOpen)}>
                        <span className={style.innerTitle}>
                            <span className={style.spanText}>пройденные</span>
                            <div className={style.svg}>
                                <ARROWTOP fill={"#818393"} />
                            </div>
                        </span>
                    </div>
                    <div
                        className={style.exitButton}
                        onClick={() => {
                            handleOpen(false)
                        }}
                    ></div>
                    <div className={style.list}>
                        {
                            items.map((course: any) => (
                                <div className={style.courseWrapper}>
                                    <CompletedCourse
                                        {...course}
                                        key={course.id}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(CompletedCurtain);