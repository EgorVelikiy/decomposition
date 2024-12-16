import { newsListItem } from "../../data/newsListData"
import NewsListItem from "./NewsListItem/NewsListItem"
import './NewsList.css'

/** Контейнер для отображения последних новостей */

interface NewsListParams {
    data: newsListItem[]
}

export default function NewsList(props: NewsListParams) {
    const {data} = props
    return (
        <ul className="news-list">
            {data.map((item) => {
                return (
                    <NewsListItem item={item}/>
                )
            })}
        </ul>
    )
}