import SearchForm from './SearchForm/SearchForm'
import Examples from './Examples/Examples'
import Tip from './Tip/Tip'
import './SearchWidget.css'

/** Компонент для отображения MAIN, состояший из:
 * Примеры запросов - Examples,
 * Форма для ввода запроса - SearchFrom, 
 * Подсказки запроса - Tip
*/

interface SearchWidgetParams {
    examples: string[], 
    formImage: string,
    tipInfo: string
}

export default function SearchWidget(props : SearchWidgetParams) {
    const {examples, formImage, tipInfo} = props
    return (
        <div className='search-container'>
            <Examples examplesData={examples}/>

            <SearchForm image={formImage}/>

            <Tip tipInfo={tipInfo}/>
        </div>
    )
}