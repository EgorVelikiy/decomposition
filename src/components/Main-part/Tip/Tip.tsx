import './tip.css'

/** Компонент отображения подсказки запроса */

interface TipParams {
    tipInfo: string,
}

export default function Tip(props: TipParams) {
    const { tipInfo } = props
    return (
        <div className="tip-container">
            Найдётся всё. Например,
            <span className="tip-text"> {tipInfo}</span>
        </div>
    )
}