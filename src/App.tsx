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
        console.log('tg:', tg.initData)
    }, [])
    const router = createBrowserRouter([
        {
            // it renders this element
            element: <MainPage />,
        
            // when the URL matches this segment
            path: "/",

            loader: async () => {
                const [categories, mycourses] = await Promise.all([getAvailableCategories(), getMyCourses()])
                setAvailableCategories(categories)
                setMyCourses(mycourses)
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
