import HeaderWidget from './components/Header-part/HeaderWidget'
import SearchWidget from './components/Main-part/SearchWidget'
import Advert from './components/Main-part/Advertisement/Advert'
import bannerData from './components/data/banner'
import newsListData from './components/data/newsListData'
import examplesData from './components/data/newsData'
import relInfo from './components/data/relInfo'
import FooterWidget from './components/Footer/FooterWidget'
import './App.css'

/** Основной макет страницы, состоящий из трёх частей: 
  * header, main, footer
  * Далее -> (HEAD, MAIN, FOOT)
*/
function App() {

  return (
    <>
      <header className='header'>
        <HeaderWidget 
          relInfo={relInfo}
          newsListData={newsListData}
          bannerProps={bannerData}
        />
      </header>
      <main className='main-block'>
        <div className='container-main'>
          <SearchWidget 
            examples={examplesData}
            formImage='https://pravo.hse.ru/pubs/share/direct/902835917.png'
            tipInfo='фаза луны сегодня'
          />
          <Advert 
            clssName='new-year-add'
            image='https://sun9-17.userapi.com/c858236/v858236629/1046f2/w7q3JEYlavg.jpg'
          />
        </div>
      </main>
      <footer className='footer'>
        <FooterWidget />
      </footer>
    </>
  )
}

export default App
