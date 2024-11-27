import {action, makeAutoObservable} from 'mobx'
import fetchMock from '../api/mockApi'
import { MocksEnum } from '../mock/mocks'
import $api from '../api';
import { CategoriesResponseType, MyCoursesResponseType } from '../api/types';
import MyCoursesNormalize, { MyCoursesType } from '../normalizers/myCourseNormalize';

export interface MyCoursesInterface {
    inprocess: Array<MyCoursesType>,
    completed: Array<MyCoursesType>,
}

interface IAppStore {
    availableCategories: Array<CategoriesResponseType>,
    myCourses: MyCoursesInterface,
}


export class AppStore implements IAppStore {
    currentScroll: number = 0;
    availableCategories: Array<CategoriesResponseType> = [];
    myCourses: MyCoursesInterface = {
        inprocess: [],
        completed: [],
    };
    category: any = {};
    course: any = {};
    detailCourse: any = {};
    myCourse: any = {};
    lesson: any = {};

    @action getAvailableCategories = async () => {
        return $api.get<CategoriesResponseType>('/api/v1/catalog/categories')
    }

    @action setAvailableCategories = (data: Array<CategoriesResponseType>) => {
        this.availableCategories = data;
    }

    @action getMyCourses = async () => {
        return $api.get<MyCoursesResponseType>('/api/v1/users/me/courses/all')
    }

    @action setMyCourses = (data: Array<MyCoursesResponseType>) => {
        this.myCourses = MyCoursesNormalize(data);
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