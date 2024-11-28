import {action, makeAutoObservable} from 'mobx'
import fetchMock from '../api/mockApi'
import { MocksEnum } from '../mock/mocks'
import $api from '../api';
import { CategoriesResponseType, CategoryResponseType, MyCoursesResponseType } from '../api/types';
import MyCoursesNormalize, { MyCoursesType } from '../normalizers/myCourseNormalize';
// eslint-disable-next-line
import ReturnedResponse from '../helpers/returnedResponse';
import { CourseType } from '../normalizers/detailCourseNormalize';

export interface MyCoursesInterface {
    inprocess: Array<MyCoursesType>,
    completed: Array<MyCoursesType>,
}

interface IAppStore {
    availableCategories: Array<CategoriesResponseType>,
    myCourses: MyCoursesInterface,
    category?: CategoryResponseType,
    course?: CourseType,
}


export class AppStore implements IAppStore {
    currentScroll: number = 0;
    availableCategories: Array<CategoriesResponseType> = [];
    myCourses: MyCoursesInterface = {
        inprocess: [],
        completed: [],
    };
    category: CategoryResponseType | undefined;
    course: CourseType | undefined;
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

    @action getCategory = async (id: string) => {
        return $api.get<CategoryResponseType>(`/api/v1/catalog/category/${id}`)
    }

    @action setCategory = (data: CategoryResponseType) => {
        this.category = data;
    }

    @action getCourse = async (id: string) => {
        return  await $api.get<CategoryResponseType>(`/api/v1/catalog/course/${id}`)
    }

    @action setCourse = (data: CourseType) => {
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