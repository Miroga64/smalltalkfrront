import { observer } from "mobx-react"
import { NavLink } from "react-router-dom";
import style from './index.module.css'
import Tag, { TagsTypes } from "../Tag"

interface MaterialCardProps {
    title: string,
    tagProps: {
        type: TagsTypes,
        customTitle?: string,
    },
    link: string,
    preview?: string,
}
 
const MaterialCard = (props: MaterialCardProps) => {
    const {
        title,
        tagProps,
        link,
        preview
    } = props;
    console.log('items:', props)
    return (
        <NavLink to={`${link}`} className={style.wrapper}>
            <div className={style.tag}>
                <Tag type={tagProps.type} title={tagProps.customTitle}/>
            </div>
            <div className={style.title}>{title}</div>
            {
                preview && (
                    <div
                        className={style.preview}
                        style={{
                            backgroundImage: `url(${preview})`
                        }}
                    ></div>
                )
            }
        </NavLink>
    )
}

export default observer(MaterialCard)