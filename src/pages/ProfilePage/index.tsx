import { observer } from 'mobx-react'
import style from './index.module.css'
import Curtain from '../../components/Curtain'
import ProfileHeader from '../../components/ProfileHeader'
import { useState } from 'react'
import { NOTIFICATIONS, PAYMENT } from '../../icons'
import ProfileItem from '../../components/ProfileItem'

const ProfileItems = [
    {
        title: 'Уведомления',
        iconColor: 'rgba(242, 66, 43, 1)',
        link: 'notifications',
        icon: <NOTIFICATIONS stroke="white"/>
    },
    {
        title: 'Оплата',
        iconColor: 'rgba(30, 195, 77, 1)',
        link: 'payment',
        icon: <PAYMENT fill="white" stroke="white" bgFill={'rgba(30, 195, 77, 1)'}/>
    },
]


const ProfilePage = () => {
    return (
        <div className={style.wrapper}>
            <ProfileHeader
                firstName='Михаил'           
                secondName='Гайсин'           
                userName='@miroga64'           
            />
            <div className={style.list}>
                {
                    ProfileItems.map((profileItem) => (
                        <ProfileItem {...profileItem}/>
                    ))
                }
            </div>
            <Curtain />
        </div>
    )
}

export default observer(ProfilePage)