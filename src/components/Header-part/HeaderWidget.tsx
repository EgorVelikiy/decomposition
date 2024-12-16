import {newsListItem} from '../data/newsListData'
import {BannerProps} from '../data/banner'
import { relInfoProps } from '../data/relInfo'
import RelevantInfo from './RelevantInfo/RelevantInfo'
import CurrencyInfo from './Currency/CurrencyInfo'
import NewsList from './NewsList/NewsList'
import formatDate from './getCurrentTime'
import Banner from './Banner/Banner'
import currInfo from '../data/currencyInfo'
import './HeaderWidget.css'

interface HeaderWidgetParams {
    relInfo: relInfoProps[],
    newsListData: newsListItem[],
    bannerProps: BannerProps
}

/** Контейнер для HEAD, который содержит:
  * Актуальную информацию - RelevantInfo,
  * Список последних новостей - NewsList,
  * Информацию о курсах валют - CurrencyInfo,
  * Рекламный баннер - Banner
*/

export default function HeaderWidget(props: HeaderWidgetParams) {
    const {relInfo, newsListData, bannerProps} = props
    return (
        <div className="header-container">
            <div>
                <div className='relevant-info-container'>
                    <RelevantInfo data={relInfo}/>
                    <span className='curr-date'>
                        {formatDate()}
                    </span>
                </div>
                <div className='news-list-container'>
                    <NewsList data={newsListData}/>
                </div>
                <div className='currency-container'>
                    <CurrencyInfo data={currInfo}/>
                </div>
            </div>
            <div className='banner-container'>
                <Banner data={bannerProps}/>
            </div>
        </div>
    )
}