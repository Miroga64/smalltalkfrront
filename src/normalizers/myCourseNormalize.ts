import { MyCoursesResponseType } from "../api/types";
import { Statuses } from "../components/MyCourseCard";
import { TagsTypes } from "../components/Tag";
import { MyCoursesInterface } from "../stores/appStore";

export type MyCoursesType = MyCoursesResponseType & {
    tagStatus: TagsTypes,
    status: Statuses,
}

const statusAndTagNormalize = (data: MyCoursesResponseType): MyCoursesType => {
    let tagStatus = TagsTypes.NEW
    let statusInner = Statuses.NEW

    switch(data.status) {
        case 'todo':
            tagStatus = TagsTypes.NEW;
            statusInner = Statuses.NEW;
            break;
        case 'in_progress':
            tagStatus = TagsTypes.INPROGRESS;
            statusInner = Statuses.INPROGRESS;
            break;
        case 'ready_to_done':
            tagStatus = TagsTypes.INPROGRESS;
            statusInner = Statuses.INPROGRESS;
            break;
        case 'done':
            tagStatus = TagsTypes.COMPLETED;
            statusInner = Statuses.COMPLETED;
            break;
    }

    return {
        ...data,
        tagStatus,
        status: statusInner
    }
}

export default function MyCoursesNormalize (data: Array<MyCoursesResponseType>): MyCoursesInterface {

    const dataInner = data.reduce<MyCoursesInterface>((acc, myCourse) => {
        const myCourseInner = statusAndTagNormalize(myCourse);

        if(myCourse.status === Statuses.COMPLETED) {
            acc.completed.push(myCourseInner)
        } else {
            acc.inprocess.push(myCourseInner)
        }

        return acc
    }, {
        inprocess: [],
        completed: [],
    })

    return dataInner;

}