import { observer } from "mobx-react"
import YouTube, {YouTubeProps} from "react-youtube"
import { useState } from "react"

import style from './index.module.css'

interface LessonHeaderProps {
    id: string,
}

const LessonHeader = (props: LessonHeaderProps) => {
    const [currentInterval, setCurrentInterval] = useState<number | null>() 

    const YouTubeProps: YouTubeProps['opts'] = {
        width: window.innerWidth,
        height: 200,
    }
    return (
        <div className={style.wrapper}>
            <YouTube
                videoId={'5FrhtahQiRc'}
                opts={YouTubeProps}
                onPlay={(e: any) => {
                    const interval = window.setInterval(() => {
                        console.log('currentData:', e.target.getCurrentTime());
                    }, 2000)
                    setCurrentInterval(interval)
                }}
                onPause={() => {
                    if(currentInterval) {
                        clearInterval(currentInterval)
                    }
                    setCurrentInterval(null)
                }}
            />
        </div>
    )
}

export default observer(LessonHeader)