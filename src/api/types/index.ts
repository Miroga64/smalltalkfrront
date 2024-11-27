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

export type { CategoriesResponseType, MyCoursesResponseType}