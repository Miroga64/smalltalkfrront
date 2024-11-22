import { useEffect, useMemo } from 'react'
import style from './index.module.css'
import { useAppStore } from '../../hooks/useAppStore'
import StarsMark from '../../components/StarsMark';
import wordNormalize from '../../helpers/wordNomalize';
import DropDownText from '../../components/DropDownText';
import DropDownList from '../../components/DropDownList';
import { NavLink } from 'react-router-dom';
import Tag, { TagsTypes } from '../../components/Tag';
import { useBottonContent } from '../../hooks/useBottomContent';
import { observer } from 'mobx-react';


const CourseContent = () => {
    const {course} = useAppStore();
    const {title, rating, reviewsCount, description, items, id, isBuyed} = course;

    const {
        setProps
    } = useBottonContent();

    useEffect(() => {
        setProps({
            callback: () => {},
            buttonProps: {
                title: 'Купить курс',
                subtitle: `${course.price} ₽`,
                backgroundColor: 'rgba(183, 136, 229, 1)',
            },
            isOpen: true,
        })
        return () => {
            setProps({
                isOpen: false,
            })
        }
    }, [])

    const FullCourseButton = useMemo(() => {
        return (
            <NavLink className={style.corseButton} to={`/course/detail/${id}`}>
                <span>Показать весь курс</span>
                <div className={style.arrow}></div>
            </NavLink>
        )
    }, [id])

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                {
                    isBuyed && (
                        <div className={style.chip}>
                            <Tag type={TagsTypes.BUYED}/>
                        </div>
                    )
                }
                <div className={style.title}>{title}</div>
                <div className={style.rating}>
                    <div className={style.number}>{rating}</div>
                    <div className={style.start}><StarsMark count={rating}/></div>
                    <div className={style.reviews}>{reviewsCount} {wordNormalize('отзыв', reviewsCount)}</div>
                </div>
            </div>
            <div className={style.description}>
                <div className={style.descriptionTitle}>Описание</div>
                <DropDownText description={description}/>
            </div>
            <div className={style.list}>
                <DropDownList
                    items={items}
                    startedItemsCount={items.length}
                    title={'Демо-доступ'}
                    description={'Вам доступно несколько уроков из курса'}
                    customButton={FullCourseButton}
                />
            </div>
        </div>
    )
}

export default observer(CourseContent)