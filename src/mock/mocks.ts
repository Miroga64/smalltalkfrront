import { Statuses } from "../components/MyCourseCard"
import { TagsTypes } from "../components/Tag"

export enum MocksEnum {
    MainBanner = 'MainBanner',
    AvailableCategories = 'AvailableCategories',
    MyCourses = 'MyCourses',
    Category = 'Category',
    Course = 'Course',
    DetailCourse = 'DetailCourse',
    MyCourse = 'MyCourse',
    Lesson = 'Lesson'
}

const mocks = {
    [MocksEnum.MainBanner]: {
        src: '/images/MainBannerBg.png',
    },
    [MocksEnum.AvailableCategories]: [
        {
            id: 0,
            name: 'Акустическая гитара',
            count: 8,
            image: '/images/Card1.png'
        },
        {
            id: 1,
            name: 'Фортепиано',
            count: 14,
            image: '/images/Card2.png'
        },
        {
            id: 2,
            name: 'Барабаны и ударные',
            count: 19,
            image: '/images/Card3.png'
        },
        {
            id: 3,
            name: 'Бас-гитара',
            count: 4,
            image: '/images/Card4.png'
        },
        {
            id: 4,
            name: 'Акустическая гитара',
            count: 8,
            image: '/images/Card1.png'
        },
        {
            id: 5,
            name: 'Фортепиано',
            count: 14,
            image: '/images/Card2.png'
        },
        {
            id: 6,
            name: 'Барабаны и ударные',
            count: 19,
            image: '/images/Card3.png'
        },
        {
            id: 7,
            name: 'Бас-гитара',
            count: 4,
            image: '/images/Card4.png'
        },
    ],
    [MocksEnum.MyCourses]: {
        inprocess: [
            {
                id: 0,
                title: 'Гитарный Гуру: От Основ до Виртуозного Исполнения',
                currentProgress: 16,
                fullCount: 16,
                status: Statuses.COMPLETED,
                tagStatus: TagsTypes.COMPLETED,
            },
            {
                id: 1,
                title: 'Студийная Магия: Основы Звукозаписи и Микширования',
                currentProgress: 2,
                fullCount: 16,
                status: Statuses.INPROGRESS,
                tagStatus: TagsTypes.INPROGRESS,
            },
            {
                id: 2,
                title: 'Гитарный Гуру: От Основ до Виртуозного Исполнения',
                currentProgress: 2,
                fullCount: 16,
                status: Statuses.INPROGRESS,
                tagStatus: TagsTypes.INPROGRESS,
            },
            {
                id: 3,
                title: 'Студийная Магия: Основы Звукозаписи и Микширования',
                currentProgress: 0,
                fullCount: 16,
                status: Statuses.NEW,
                tagStatus: TagsTypes.NEW,
            },
            {
                id: 4,
                title: 'Гитарный Гуру: От Основ до Виртуозного Исполнения',
                currentProgress: 2,
                fullCount: 16,
                status: Statuses.INPROGRESS,
                tagStatus: TagsTypes.INPROGRESS,
            },
        ],
        completed: [
            {
                id: 0,
                title: 'Начальные техники перебора: простые мелодии',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 1,
                title: 'Базовые аккорды и строение аккордов',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 2,
                title: 'Начальные техники перебора: простые мелодии',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 3,
                title: 'Базовые аккорды и строение аккордов',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 4,
                title: 'Начальные техники перебора: простые мелодии',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 5,
                title: 'Базовые аккорды и строение аккордов',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 6,
                title: 'Начальные техники перебора: простые мелодии',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
            {
                id: 7,
                title: 'Базовые аккорды и строение аккордов',
                chips: [
                    {
                        title: '16 уроков'
                    },
                    {
                        title: 'завершен 12.04.24'
                    },
                ]
            },
        ]
    },
    [MocksEnum.Category]: {
        banner: {
            title: 'Акустическая гитара',
            count: 32,
            src: '/images/CategoryPreview.png'
        },
        categories: [
            {
                title: 'Основы игры',
                id: 0,
                items: [
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 0,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 1,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 2,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 3,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 4,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 5,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 6,
                    },
                ]
            },
            {
                title: 'Основы игры',
                id: 1,
                items: [
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 0,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 1,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 2,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 3,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 4,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 5,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 6,
                    },
                ]
            },
            {
                title: 'Основы игры',
                id: 2,
                items: [
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 0,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 1,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 2,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 3,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 4,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 5,
                    },
                    {
                        price: 1200,
                        description: 'Базовые аккорды и строение аккордов',
                        mark: 4.7,
                        image: '/images/CoursePreview.png',
                        id: 6,
                    },
                ]
            },
        ]
    },
    [MocksEnum.Course]: {
        id: 0,
        isBuyed: true,
        title: 'Основы Аккордов',
        src: '/images/Course.png',
        description: 'Курс “Базовые аккорды и строение аккордов” предназначен для начинающих гитаристов, желающих освоить основные элементы игры на акустической гитаре. В рамках этого курса вы узнаете, что такое аккорды и как они строятся, получите базовые теоретические знания о музыкальных интервалах и гармонии. Мы рассмотрим основные открытые аккорды и их аппликатуры, а также научимся переходить между ними. Вы научитесь правильно ставить пальцы на грифе, чтобы добиться чистого звучания аккордов. Курс включает практические упражнения и пошаговые инструкции, которые помогут вам закрепить полученные знания и начать играть простые песни уже после первых занятий. В конце курса вы будете уверенно использовать базовые аккорды и строить гармонии для своих первых музыкальных композиций.',
        reviewsCount: 347,
        rating: 4.5,
        price: 1290,
        items: [
            {
                title: 'Открытые аккорды: C, G, D, E, A',
                path: 'lesson',
                id: 0,
                isDisabled: false,
            },
            {
                title: 'Аппликатуры аккордов: правильное положение пальцев',
                path: 'lesson',
                id: 1,
                isDisabled: false,
            },
            {
                title: 'Открытые аккорды: C, G, D, E, A',
                path: 'lesson',
                id: 2,
                isDisabled: true,
            },
            {
                title: 'Аппликатуры аккордов: правильное положение пальцев',
                path: 'lesson',
                id: 3,
                isDisabled: true,
            },
            {
                title: 'Открытые аккорды: C, G, D, E, A',
                path: 'lesson',
                id: 4,
                isDisabled: true,
            },
        ],
    },
    [MocksEnum.DetailCourse]: {
        title: 'Базовые аккорды и строение аккордов',
        modules: [
            {
                subtitle: 'Модуль 1',
                id: 0,
                title: 'Основы Аккордов',
                items: [
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 0,
                        isDisabled: false,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 1,
                        isDisabled: false,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 2,
                        isDisabled: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 3,
                        isDisabled: true,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 4,
                        isDisabled: true,
                    },
                ],
            },
            {
                subtitle: 'Модуль 2',
                id: 1,
                title: 'Строение и Применение Аккордов',
                items: [
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 0,
                        isDisabled: false,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 1,
                        isDisabled: false,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 2,
                        isDisabled: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 3,
                        isDisabled: true,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 4,
                        isDisabled: true,
                    },
                ],
            },
        ]
    },
    [MocksEnum.MyCourse]: {
        id: 0,
        title: 'Гитарный Гуру: От Основ до Виртуозного Исполнения',
        currentProgress: 3,
        fullCount: 16,
        status: Statuses.COMPLETED,
        tagStatus: TagsTypes.COMPLETED,
        modules: [
            {
                subtitle: 'Модуль 1',
                id: 0,
                title: 'Основы Аккордов',
                tagStatus: TagsTypes.COMPLETED,
                items: [
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 0,
                        isDisabled: false,
                        complete: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 1,
                        isDisabled: false,
                        complete: true,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 2,
                        isDisabled: false,
                        complete: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 3,
                        isDisabled: false,
                        complete: true,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 4,
                        isDisabled: false,
                        complete: true,
                    },
                ],
            },
            {
                subtitle: 'Модуль 2',
                id: 1,
                title: 'Строение и Применение Аккордов',
                tagStatus: TagsTypes.INPROGRESS,
                items: [
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 0,
                        isDisabled: false,
                        complete: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 1,
                        isDisabled: false,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 2,
                        isDisabled: true,
                    },
                    {
                        title: 'Аппликатуры аккордов: правильное положение пальцев',
                        path: 'lesson',
                        id: 3,
                        isDisabled: true,
                    },
                    {
                        title: 'Открытые аккорды: C, G, D, E, A',
                        path: 'lesson',
                        id: 4,
                        isDisabled: true,
                    },
                ],
            },
        ],
        recomendations: [
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 0,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 1,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 2,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 3,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 4,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 5,
            },
            {
                price: 1200,
                description: 'Базовые аккорды и строение аккордов',
                mark: 4.7,
                image: '/images/CoursePreview.png',
                id: 6,
            },
        ]

    },
    [MocksEnum.Lesson]: {
        title: 'Вибрато и бенды',
        description: 'В этом уроке мы разберем основные аппликатуры аккордов и правильное положение пальцев на грифе. Вы научитесь, как правильно ставить пальцы, чтобы аккорды звучали чисто и удобно переходили один в другой. Эти знания помогут избежать напряжения в руке и сделать игру на инструменте более комфортной и плавной.',
        deadline: new Date(),
        recomendations: [
            {
                title: 'ГИТАРА',
                description: 'Основной инструмент',
                image: '/images/CoursePreview.png',
                id: 0,
            },
            {
                title: 'ПОДСТАВКА',
                description: 'Для гитары',
                image: '/images/CoursePreview.png',
                id: 1,
            },
            {
                title: 'ГИТАРА',
                description: 'Основной инструмент',
                image: '/images/CoursePreview.png',
                id: 2,
            },
            {
                title: 'ПОДСТАВКА',
                description: 'Для гитары',
                image: '/images/CoursePreview.png',
                id: 3,
            },
            {
                title: 'ГИТАРА',
                description: 'Основной инструмент',
                image: '/images/CoursePreview.png',
                id: 4,
            },
            {
                title: 'ПОДСТАВКА',
                description: 'Для гитары',
                image: '/images/CoursePreview.png',
                id: 5,
            },
        ]
    }
}

export default mocks