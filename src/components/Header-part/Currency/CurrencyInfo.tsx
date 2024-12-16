import { CurrInfoItem } from "../../data/currencyInfo"
import CurrencyItem from "./CurrencyItem/CurrencyItem"
import './CurrencyInfo.css'

/** Контейнер для хранения списка о курсах валют */

interface CurrencyInfoParams {
    data: CurrInfoItem[]
}

export default function CurrencyInfo(props: CurrencyInfoParams) {
    const {data} = props
    return (
        <div className="currency-container">
            <ul className="currency-list">
                {data.map((curr) => {
                return (
                 <CurrencyItem item={curr}/>   
                )
            })}
            </ul>
            <span className="">
                ...
            </span>
            
        </div>
    )
}