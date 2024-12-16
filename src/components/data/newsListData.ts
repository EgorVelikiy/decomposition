export interface newsListItem {
    icon: string,
    title: string,
    href: string,
}

const newsListData: newsListItem[] = [
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Water_tribal.svg/45px-Water_tribal.svg.png',
        title: 'Путин упростил получение автомобильных номеров',
        href: '#'
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Water_tribal.svg/45px-Water_tribal.svg.png',
        title: 'В команде Зеленского раскрыли план реформ на Украине',
        href: '#'
    },
    {
        icon: 'https://logos-download.com/wp-content/uploads/2021/01/Rossiyskaya_Gazeta_Logo-1742x2048.png',
        title: "«Турпомощь» прокоментировала гибель десятков россиян в Анталье",
        href: '#'
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Water_tribal.svg/45px-Water_tribal.svg.png',
        title: 'Суд закрыл дело Демпартии США против России',
        href: '#'
    },
    {
        icon: 'https://trashbox.ru/apk_icons/1882524_192.png', 
        title: 'На Укроине призвали создать ракеты для удара по Москве',
        href: '#'
    },
]

export default newsListData