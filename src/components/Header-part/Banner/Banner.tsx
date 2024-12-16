import { BannerProps } from "../../data/banner"
import './banner.css'

/** Компонент для отображения рекламного баннера */

interface BannerParams {
    data: BannerProps
}

export default function Banner(props: BannerParams) {
    const {data} = props
    return (
        <div className="banner">
            <img className="banner-image" src={data.image} alt=""/>
            <a href={data.href} className="banner-href">
                <h3 className="banner-title">{data.title}</h3>
            </a>
            
            <span className="banner-text">Смотрите на Яндекс и запоминайте</span>
        </div>
    )
}