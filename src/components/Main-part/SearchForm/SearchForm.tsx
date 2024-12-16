import './SearchForm.css'

/** Компонент формы ввода запроса */

interface SearchFormParams {
    image: string
}

export default function SearchForm(props: SearchFormParams) {
    const { image } = props
    return (
        <form className="main-form">
            <img className="yandex-img" src={image} alt=""/>
            <input className="search-input" type='text' required/>
            <button className="search-submit" type="submit">Найти</button>
        </form>
    )
}