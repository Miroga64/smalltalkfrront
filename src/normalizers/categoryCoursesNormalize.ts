import { CategorySubcategoriesResponse } from "../api/types";

export type CategorySubcategories = CategorySubcategoriesResponse & {
    titlePadding?: number,
    titleSize?: number,
    negativeMargin?: number,
    paddingLeft?: number,
    withoutCount?: boolean,
}

export default function CategoryCoursesNormalize (props: CategorySubcategories): CategorySubcategories  {
    const {courses} = props;
    const innerCourses = courses.map(course => {
        return ({
            ...course,
            title: '',
            preview_text: course.title,
        })
    })

    return ({
        ...props,
        courses: innerCourses
    })
}