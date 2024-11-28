
import style from './index.module.css'
import { NavLink } from "react-router-dom";
import { STAR } from "../../icons";
import { observer } from 'mobx-react';
import { CategoryCourse } from '../../api/types';


const CourseCard = (props: CategoryCourse) => {
    const {
        price,
        preview_text,
        mark,
        image,
        id,
        title,
    } = props;
    return (
        <NavLink to={`/course/${id}`} className={style.wrapper}>
            <div
                className={style.image}
                style={{
                    backgroundImage: `url(${image})`
                }}
            ></div>
            <div className={style.content}>
                <div className={style.top}>
                    {
                        price !== undefined && (<div className={style.price}>{price}.00 ₽</div>)
                    }
                    {
                        title && (<div className={style.price}>{title}</div>)
                    }
                    {
                        mark && (
                            <div className={style.mark}>
                                <div className={style.markNumber}>{mark}</div>
                                <div className={style.star}><STAR /></div>
                            </div>
                        )
                    }
                </div>
                <div className={style.description}>{preview_text}</div>
            </div>
        </NavLink>
    )
}

export default observer(CourseCard)