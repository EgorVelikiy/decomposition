import FooterItem from './FooterItem/FooterItem'
import VisitedListData from '../data/visitedlist'
import TVProgrammData from '../data/TvProgpamm'
import BroadcastData from '../data/broadcast'
import './FooterWidget.css'



export default function FooterWidget() {
    return (
        <div className="footer-container">
            <div className='footer-column'>
                <FooterItem title='Погода'>
                    <div className='footer-item weather-container'>
                        <img className='weather-icon' src='https://sun9-46.userapi.com/impg/6q0-cE0BrGGCexe57TIV_X347j-3SmulEBRIsQ/mbTNtflo654.jpg?size=512x512&quality=96&sign=64469fc58b3a9fb48cdeb04881c4bcc3&type=album' alt=''/>
                        <h3>{'+17'}&deg;</h3>
                        <div className='weather-detail'>
                            <span>Утром {'+17'},</span>
                            <span>днём {'+20'}</span>
                        </div>
                    </div>
                </FooterItem>

                <FooterItem title='Посещаемое'>
                    <div className='footer-item visited'>
                        <ul className='visited-list'>
                            {VisitedListData.map(({title, more}, index) => {
                                return (
                                    <li className='visited-list-item' key={index}>
                                        <span className='visited-item-title'>{title}</span>
                                        <span className='visited-item-more'> - {more}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </FooterItem>
            </div>
            <div className='footer-column'>
                <FooterItem title='Карта Германии'>
                    <div className='footer-item germany-map'>
                        <span>Расписания</span>
                    </div>
                </FooterItem>

                <FooterItem title='Телепрограмма'>
                    <div className='footer-item germany-map'>
                        <ul className='tv-programm-list'>
                            {TVProgrammData.map(({time, programm, channel}, index) => {
                                return (
                                    <li className='tv-list-item' key={index}>
                                        <span className='tv-item time'>{time}</span>
                                        <span className='tv-item programm'>{programm}</span>
                                        <span className='tv-item channel'>{channel}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </FooterItem>
            </div>
            <div className='footer-column'>
                <FooterItem title='Эфир'>
                    <div className='footer-item broadcast'>
                        <ul className='broadcast-list'>
                            {BroadcastData.map(({name, channel}, index) => {
                                return (
                                    <li className='broadcast-item' key={index}>
                                        <img className='broadcast-content icon' src='https://i.pinimg.com/736x/05/45/d3/0545d396204a8fcb3120b388a5d0782f.jpg'/>
                                        <span className='broadcast-content name'>{name}</span>
                                        <span className='broadcast-content channel'>{channel}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </FooterItem>
            </div>
        </div>
    )
}