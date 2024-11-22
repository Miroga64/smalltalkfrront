import { useEffect, useMemo } from "react"

const useBlockGlobalScroll = () => {
    const setGlobalScroll = useMemo(() => (scrollBehavior: string) => {
        console.log('scrollBehavior: 0',scrollBehavior)
        document.body.style.overflowY = scrollBehavior
    }, [])

    useEffect(() => {
        return () => {
            console.log('scrollBehavior: 1')
            document.body.style.overflowY = 'scroll'
        }
    }, [])

    return {setGlobalScroll}
}

export default useBlockGlobalScroll;