import { useEffect, useMemo } from "react"

const useBlockGlobalScroll = () => {
    const setGlobalScroll = useMemo(() => (scrollBehavior: string) => {
        document.documentElement.style.overflowY = scrollBehavior
    }, [])

    useEffect(() => {
        return () => {
            document.documentElement.style.overflowY = 'scroll'
        }
    }, [])

    return {setGlobalScroll}
}

export default useBlockGlobalScroll;