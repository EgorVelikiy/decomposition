import { relInfoProps } from "../../data/relInfo"
import './RelevantInfo.css'

/** Актуальная информация на сегодняшнюю дату  */

interface RelevantInfoParams {
    data: relInfoProps[]
}

export default function RelevantInfo(props: RelevantInfoParams) {
    const {data} = props
    return (
        <ul className="rel-info-list">
            {data.map((item, index) => {
                return (
                    <li key={index}>
                        <a className="rel-info-item" href={item.href}>
                            <span className="curr-time">{item.title}</span>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}