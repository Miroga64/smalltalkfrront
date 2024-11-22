import { observer } from 'mobx-react';
import style from './index.module.css'
import { NavLink } from "react-router-dom";

interface AvailableCategoryProps {
    image: string,
    name: string,
    count: string,
    id: number
}

const AvailableCategory = (props: AvailableCategoryProps) => {
    const {
        image,
        name,
        count,
        id
    } = props;
    return (
        <NavLink to={`/category/${id}`} style={{backgroundImage: `url(${image})`}} className={style.wrapper}>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
        </NavLink>
    )
}

export default observer(AvailableCategory);