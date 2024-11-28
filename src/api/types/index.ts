type CategoriesResponseType = {
    count_courses: number,
    image: string,
    position: number
    title: string,
    _id: string
}

type MyCoursesResponseType = {
    id: string,
    status: string,
    title: string,
    progress: {
        completed: number,
        total: number,
    }
}

type CategoryCourse = {
    id: string,
    image: string,
    payment_status: string,
    preview_text: string,
    mark?: number,
    price: number,
    title: string,
}

type CategorySubcategoriesResponse = {
    count_courses?: number,
    id?: string,
    title: string,
    courses: Array<CategoryCourse>
}


type CategoryResponseType = {
    count_courses: number,
    id: string,
    image: string,
    title: string,
    subcategories: Array<CategorySubcategoriesResponse>
}

type CourseLessonResponseType = {
    free: boolean,
    id: string
    position: number,
    title: string,
}

type CourseModuleResponseType = {
    lessons: Array<CourseLessonResponseType>
    position: number,
    title: string
}

type CourseResponseType = {
    description: string
    id: string
    image: string,
    modules: Array<CourseModuleResponseType>
    payment_status: string,
    price: number,
    title: string,
}

export type { CategoriesResponseType, MyCoursesResponseType, CategoryResponseType, CategorySubcategoriesResponse, CategoryCourse, CourseResponseType, CourseModuleResponseType, CourseLessonResponseType }