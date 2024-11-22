import { useEffect, useMemo, useState } from "react";

const useCurrentScroll = () => {
    const [currentScroll, setCurrentScroll] = useState(0);
    const [mainHeight, setMainHeight] = useState<any>(0);
    const [windowHeight, setWindowHeight] = useState<any>(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchDiff, setTouchDiff] = useState(0);
    const [isTouchActive, setIsTouchActive] = useState(false);
    const [overScroll, setOverScroll] = useState(0);
    const [isBackScrollWithOverscroll, setIsBackScrollWithOverScroll] = useState(false);

    useEffect(() => {
        setMainHeight(document.getElementById("main")?.clientHeight)
        setWindowHeight(window.innerHeight)
    }, [])

    const onScroll = useMemo(() => (e: any) => {
        setCurrentScroll(e.target.scrollingElement.scrollTop);
    }, [])

    const onTouchStart = useMemo(() => (e: any) => {
        setTouchStart(e.touches[0].clientY)
        setIsTouchActive(true);
    }, [])

    const onTouchMove = useMemo(() => (e: any) => {
        const touchY = e.touches[0].clientY;
        const touchDiffLocal = touchY - touchStart;
        if(windowHeight + currentScroll + 2 > mainHeight) {
            if(touchY - (touchStart + 8) - touchDiff < overScroll) {
                document.body.style.overflowY = 'scroll'
            } else {
                if(overScroll !== 0) {
                    document.body.style.overflowY = 'hidden'
                }
            }
            setOverScroll(touchY - (touchStart + 8) - touchDiff)
        } else {
            setTouchDiff(touchDiffLocal);
        }
    }, [touchStart, currentScroll, mainHeight, touchDiff, overScroll, windowHeight])

    const onTouchEnd = useMemo(() => (e: any) => {
        setTouchStart(0)
        setTouchDiff(0)
        setOverScroll(0)
        setIsTouchActive(false);
        document.body.style.overflowY = 'scroll'
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        document.addEventListener('touchstart', onTouchStart)
        document.addEventListener('touchmove', onTouchMove)
        document.addEventListener('touchend', onTouchEnd)

        return () => {
            document.removeEventListener('scroll', onScroll);
            document.removeEventListener('touchstart', onTouchStart)
            document.removeEventListener('touchmove', onTouchMove)
            document.removeEventListener('touchend', onTouchEnd)
        }
    // eslint-disable-next-line
    }, [currentScroll, touchStart, touchDiff, isBackScrollWithOverscroll])

    return {currentScroll, touchDiff, overScroll: Math.abs(overScroll > 0 ? 0 : overScroll), isTouchActive}
}

export default useCurrentScroll;