import { CurrInfoItem } from "../../../data/currencyInfo"
import './CurrencyItem.css'

/** Элемент списка валют */

interface CurrencyItemParams {
    item: CurrInfoItem
}

export default function CurrencyItem(props: CurrencyItemParams) {
    const {item} = props
    return (
        <li className="currency-item">
            <span className="currency">
                {item.currency}
            </span>
            <span className="currency value">
                {item.value}
            </span>
            <span className="currency change">
                {item.change}
            </span>
        </li>
    )
}