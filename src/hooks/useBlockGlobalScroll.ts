import { useEffect, useMemo } from "react"

const useBlockGlobalScroll = () => {
    const setGlobalScroll = useMemo(() => (scrollBehavior: string) => {
        const root = document.getElementById('root');

        document.documentElement.style.overflow = scrollBehavior;
        if(root) {
            root.style.overflow = scrollBehavior;
        }
    }, [])

    useEffect(() => {
        return () => {
            const root = document.getElementById('root');
            if(root) {
                root.style.overflow = 'auto';
            }
            document.documentElement.style.overflow = 'scroll'
        }
    }, [])

    return {setGlobalScroll}
}

export default useBlockGlobalScroll;