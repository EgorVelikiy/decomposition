import { newsListItem } from "../../../data/newsListData"
import './NewsListItem.css'

/** Компонент для отрисовки элемента списка новостей */

interface NewsListItemParams {
    item: newsListItem,
}

export default function NewsListItem(props: NewsListItemParams) {
    const {item} = props
    return (
        <li className="item-container">
            <img className="item-icon" src={item.icon} alt=""/>
            <a className="item" href={item.href}>
                <p className="item-title">{item.title}</p>
            </a>
        </li>
    )
}