import {action, makeAutoObservable} from 'mobx'
import fetchMock from '../api/mockApi'
import { MocksEnum } from '../mock/mocks'

// interface Category {
//     image: string,
//     name: string,
//     count: number,
//     id: number
// }

interface IAppStore {
    availableCategories: any
}


export class AppStore implements IAppStore {
    currentScroll: number = 0;
    availableCategories: any = [];
    myCourses: any = [];
    category: any = {};
    course: any = {};
    detailCourse: any = {};
    myCourse: any = {};
    lesson: any = {};

    @action getAvailableCategories = async () => {
        return fetchMock(MocksEnum.AvailableCategories)
    }

    @action setAvailableCategories = (data: any) => {
        this.availableCategories = data;
    }

    @action getMyCourses = async () => {
        return fetchMock(MocksEnum.MyCourses)
    }

    @action setMyCourses = (data: any) => {
        this.myCourses = data;
    }

    @action getCategory = () => {
        return fetchMock(MocksEnum.Category)
    }

    @action setCategory = (data: any) => {
        this.category = data;
    }

    @action getCourse = () => {
        return fetchMock(MocksEnum.Course)
    }

    @action setCourse = (data: any) => {
        this.course = data;
    }

    @action getDetailCourse = () => {
        return fetchMock(MocksEnum.DetailCourse)
    }

    @action setDetailCourse = (data: any) => {
        this.detailCourse = data;
    }

    @action getMyCourse = () => {
        return fetchMock(MocksEnum.MyCourse)
    }

    @action setMyCourse = (data: any) => {
        this.myCourse = data;
    }

    @action getLesson = () => {
        return fetchMock(MocksEnum.Lesson)
    }

    @action setLesson = (data: any) => {
        this.lesson = data;
    }

    @action setCurrentScroll = (scroll: number) => {
        this.currentScroll = scroll;
    }

    constructor() {
        makeAutoObservable(this);
    }
}