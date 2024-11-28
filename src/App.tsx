import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames'
import { observer } from 'mobx-react';

import style from './App.module.css'

import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import CoursePage from './pages/CoursePage';
import DetailCoursePage from './pages/DetailCoursePage';
import MyCoursePage from './pages/MyCoursePage';
import LessonPage from './pages/LessonPage';

import { getTg } from './utils/getTg';
import { useBottonContent } from './hooks/useBottomContent';
import { useAppStore } from './hooks/useAppStore';
import BottomContent from './components/BottomContent';
import ProfilePage from './pages/ProfilePage';
import ReturnedResponse from './helpers/returnedResponse';
import DetailCourseNormalize from './normalizers/detailCourseNormalize';


function App() {
    const {
        getAvailableCategories,
        setAvailableCategories,
        getMyCourses,
        setMyCourses,
        getCategory,
        setCategory,
        getCourse,
        setCourse,
        getDetailCourse,
        setDetailCourse,
        getMyCourse,
        setMyCourse,
        getLesson,
        setLesson,
    } = useAppStore();
    const {isOpen} = useBottonContent();

    useEffect(() => {
        const {tg} = getTg();
        tg.BackButton.show();
        tg.disableVerticalSwipes()
        sessionStorage.setItem('initData', tg.initData || "query_id=AAH0LXITAAAAAPQtchMU6Zjq&user=%7B%22id%22%3A326249972%2C%22first_name%22%3A%22%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%22%2C%22last_name%22%3A%22%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%22%2C%22username%22%3A%22Miroga64%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FNexvj1PLka7-lEC9-4Cq4JVpWCx4VYVT_nYUDlT_Gw0.svg%22%7D&auth_date=1732825719&signature=bPH_8Av0t63ke6Ni7OPFtNE76C5z_FZAseCSHry9UtXktmCXBfdQDSfTSZugNn2wfPLd-tqSZ-UiG13RbzkQCQ&hash=440876d53b7d7519e3da808b940efbaf2d193615ec3061706d4001d6dc882897")
        console.log('tg: 1', tg.initDataUnsafe)
        console.log('tg: 2', tg.initData)
    }, [])
    const router = createBrowserRouter([
        {
            // it renders this element
            element: <MainPage />,
        
            // when the URL matches this segment
            path: "/",

            loader: async () => {
                const [categories, mycourses] = await Promise.all([getAvailableCategories(), getMyCourses()])
                setAvailableCategories(ReturnedResponse(categories))
                setMyCourses(ReturnedResponse(mycourses))
                return null;
            },
        
            //   // with this data loaded before rendering
            //   action: async (data) => {
            //     const val = await getAvailableCategories();
            //     console.log('val:', val)
            //     return setAvailableCategories(val) 
            //   }
        },
        {
            element: <CategoryPage />,
            path: '/category/:id',
            loader: async ({params}) => {
                const {id} = params;
                console.log('/category/:id:', params);
                if(id) {
                    const category = await getCategory(id);
                    setCategory(ReturnedResponse(category));
                }
                return null
            }
        },
        {
            element: <CoursePage />,
            path: '/course/:id',
            loader: async ({params}) => {
                const {id} = params;
                if(id) {
                    const category = ReturnedResponse(await getCourse(id));
                    setCourse(DetailCourseNormalize(category));
                }
                return null
            }
        },
        {
            element: <DetailCoursePage />,
            path: '/course/detail/:id',
            loader: async () => {
                const category = await getDetailCourse();
                setDetailCourse(category);
                return null
            }
        },
        {
            element: <MyCoursePage />,
            path: '/mycourse/:id',
            loader: async () => {
                const mycourse = await getMyCourse();
                setMyCourse(mycourse);
                return null
            }
        },
        {
            element: <LessonPage />,
            path: '/lesson/:id',
            loader: async () => {
                const mycourse = await getLesson();
                setLesson(mycourse);
                return null
            }
        },
        {
            element: <ProfilePage />,
            path: '/profile/',
        }
      ],
    );
    
    return (
        <main id="main" className={cn(style.dark, style.main, {[style.bottomPadding]: isOpen})}>
            <RouterProvider router={router} />
            <BottomContent />
        </main>
    );
}

export default observer(App);
