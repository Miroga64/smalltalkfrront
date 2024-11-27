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
        sessionStorage.setItem('initData', tg.initData || "user=%7B%22id%22%3A326249972%2C%22first_name%22%3A%22%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%22%2C%22last_name%22%3A%22%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%22%2C%22username%22%3A%22Miroga64%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FNexvj1PLka7-lEC9-4Cq4JVpWCx4VYVT_nYUDlT_Gw0.svg%22%7D&chat_instance=1952518932209726432&chat_type=private&auth_date=1732352705&signature=mZPCs_zHeyFNTTz_6i8b2E6iSm_3oSvc225HEjpYyb5ThwL9qhazpfhNl6etIVBoEuhsNnwFqe8HcFwqCVKmBw&hash=0148bdac66a30af619b040ac6ddeb1c8e79a4071957f81360d648290e834531e")
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
                console.log('/category/:id:', params);
                const category = await getCategory();
                setCategory(category);
                return null
            }
        },
        {
            element: <CoursePage />,
            path: '/course/:id',
            loader: async () => {
                const category = await getCourse();
                setCourse(category);
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
