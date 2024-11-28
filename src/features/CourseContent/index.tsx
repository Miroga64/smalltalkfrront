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

    const {
        setProps
    } = useBottonContent();

    useEffect(() => {
        setProps({
            callback: () => {},
            buttonProps: {
                title: 'Купить курс',
                subtitle: `${course?.price} ₽`,
                backgroundColor: 'rgba(183, 136, 229, 1)',
            },
            isOpen: true,
        })
        return () => {
            setProps({
                isOpen: false,
            })
        }
    // eslint-disable-next-line
    }, [])

    const FullCourseButton = useMemo(() => {
        return (
            <NavLink className={style.corseButton} to={`/course/detail/${course?.id}`}>
                <span>Показать весь курс</span>
                <div className={style.arrow}></div>
            </NavLink>
        )
    }, [course?.id])

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                {
                    course?.isBuyed && (
                        <div className={style.chip}>
                            <Tag type={TagsTypes.BUYED}/>
                        </div>
                    )
                }
                <div className={style.title}>{course?.title}</div>
                {
                    course?.rating && course?.reviewsCount && (
                        <div className={style.rating}>
                            <div className={style.number}>{course.rating}</div>
                            <div className={style.start}><StarsMark count={course.rating}/></div>
                            <div className={style.reviews}>{course.reviewsCount} {wordNormalize('отзыв', course.reviewsCount)}</div>
                        </div>
                    )
                }
                
            </div>
            {
                course?.description && (
                    <div className={style.description}>
                        <div className={style.descriptionTitle}>Описание</div>
                        <DropDownText description={course.description}/>
                    </div>
                )
            }

            {
                course?.items && (
                    <div className={style.list}>
                        <DropDownList
                            items={course.items}
                            startedItemsCount={course.items.length}
                            title={'Демо-доступ'}
                            description={'Вам доступно несколько уроков из курса'}
                            customButton={FullCourseButton}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default observer(CourseContent)