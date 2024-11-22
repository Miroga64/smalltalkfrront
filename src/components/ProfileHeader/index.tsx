import { observer } from "mobx-react"
import style from './index.module.css'
import UPLOAD from "../../icons/UPLOAD";

interface ProfileHeaderProps {
    avatar?: string,
    firstName?: string,
    secondName?: string,
    userName?: string,
    onChangeAvatar?: (e: File) => void
}


const ProfileHeader = (props: ProfileHeaderProps) => {
    const {
        avatar,
        firstName,
        secondName,
        userName
    } = props;

    return (
        <div className={style.wrapper}>
            <div
                className={style.avatar}
                style={{
                    backgroundImage: `url(${avatar})`
                }}
            >
                {
                    !avatar && firstName && (
                        <div className={style.stub}>{firstName[0]}</div>
                    )
                }
                <label className={style.inputLabel}>
                    <UPLOAD stroke={"#1C1C1E"} />
                    <input type="file" className={style.input}/>
                </label>
            </div>
            <div className={style.content}>
                {
                    (firstName || secondName) && (
                        <div className={style.realName}>{firstName ? `${firstName} ` : ''}{secondName}</div>
                    )
                }
                {
                    userName && (
                        <div className={style.userName}>{userName}</div>
                    )
                }
            </div>
        </div>
    )
}

export default observer(ProfileHeader)