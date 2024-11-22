import { observer } from 'mobx-react'
import style from './index.module.css'
import cn from 'classnames'
import { useEffect, useMemo, useRef, useState } from 'react'
import useBlockGlobalScroll from '../../hooks/useBlockGlobalScroll'
import { useCurtainControl } from '../../hooks/useCurtainContol'


const Curtain = () => {
    const {children, setProps, isOpen} = useCurtainControl();
    const [contentWidth, setContentWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState<any>(1200);
    const {setGlobalScroll} = useBlockGlobalScroll();
    const ref = useRef<any>();

    const handleClose = useMemo(() => () => {
        setProps({isOpen: false})
        setGlobalScroll('scroll')
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        if(isOpen) {
            setGlobalScroll('hidden')
        } else {
            setGlobalScroll('scroll')
        }
    // eslint-disable-next-line
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
                onClick={handleClose}
            />
            <div
                className={style.innerWrapper}
                style={{
                    bottom: `${isOpen ? 0 : -windowHeight}px`
                }}
            >
                <div
                    ref={ref}
                    className={style.content}
                    style={{
                        borderRadius: `${isOpen && contentWidth >= windowHeight ? '0px' : '24px 24px 0 0'}`
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default observer(Curtain);