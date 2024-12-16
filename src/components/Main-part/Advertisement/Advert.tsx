import './advert.css'

interface AdvertParams {
    clssName: string,
    image: string,
}

export default function Advert(props: AdvertParams) {
    const { clssName, image } = props
    return (
        <div className="advert-container">
            <img className= {'advert-img ' + clssName} src={image} alt=""/>
        </div>
    )
}