import { CourseResponseType } from "../api/types";
import { DropDownListItems } from "../components/DropDownList";

export type CourseModuleType = {
    title: string,
    items: Array<DropDownListItems>
}

export type CourseType = {
    image: string,
    title: string,
    rating?: number,
    reviewsCount?: number,
    description: string,
    items: Array<DropDownListItems>,
    id: string,
    isBuyed: boolean;
    price?: number,
    modules: Array<CourseModuleType>
}

export default function DetailCourseNormalize(props: CourseResponseType): CourseType {
    const {
        image,
        title,
        description,
        modules,
        payment_status,
        price,
        id
    } = props;

    const items: Array<DropDownListItems> = [];

    const innerModules = modules.sort((a, b) => a.position - b.position).map((module) => {
        return {
            title: module.title,
            items: module.lessons.sort((a, b) => a.position - b.position).map((lesson) => {
                if(lesson.free) {
                    items.push({
                        ...lesson,
                        isDisabled: false,
                        complete: false,
                        path: `/lesson/${lesson.id}`
                    })
                }
                return ({
                    title: lesson.title,
                    path: `/lesson/${lesson.id}`,
                    isDisabled: !lesson.free,
                    id: lesson.id,
                })
            })
        }
    })

    return {
        image,
        title,
        description,
        items,
        id,
        isBuyed: payment_status === 'bought',
        price,
        modules: innerModules,
    }
}