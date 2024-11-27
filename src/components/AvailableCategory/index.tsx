import { observer } from 'mobx-react';
import style from './index.module.css'
import { NavLink } from "react-router-dom";
import { CategoriesResponseType } from '../../api/types';

const AvailableCategory = (props: CategoriesResponseType) => {
    const {
        image,
        title,
        count_courses,
        _id
    } = props;
    return (
        <NavLink to={`/category/${_id}`} style={{backgroundImage: `url(${image})`}} className={style.wrapper}>
            <div className={style.name}>{title}</div>
            <div className={style.count}>{count_courses}</div>
        </NavLink>
    )
}

export default observer(AvailableCategory);