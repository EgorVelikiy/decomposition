import './examples.css'

/** Компонент для отображения списка примеров запроса */

interface ExamplesParams {
    examplesData: string[]
}

export default function Examples(props: ExamplesParams) {
    const {examplesData} = props
    return (
        <ul className="exemples-list">
            {examplesData.map((example, index) => {
                return (
                    <li className="exemples-item" key={index}>
                        <a className="exemples-item-link" href="#">{example}</a>
                    </li>
                )
            })}
        </ul>
    )
}