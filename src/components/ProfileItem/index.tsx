import { ReactElement } from 'react'
import { observer } from 'mobx-react'
import style from './index.module.css'
import { NavLink } from 'react-router-dom';

interface ProfileItemProps {
    icon: ReactElement,
    title: string,
    iconColor: string,
    link: string,
}

const ProfileItem = (props: ProfileItemProps) => {
    const {
        icon,
        title,
        iconColor,
        link
    } = props;

    return (
        <NavLink to={`/profile/${link}`} className={style.wrapper}>
            <div className={style.content}>
                <div
                    className={style.icon}
                    style={{
                        backgroundColor: iconColor,
                    }}
                >
                    {icon}
                </div>
                <div className={style.title}>{title}</div>
            </div>
            <div className={style.arrow} />
        </NavLink>
    )
}

export default observer(ProfileItem)