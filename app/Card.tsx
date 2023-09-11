import './Card.css'

type CardProps = {
    img: string,
    title: string,
    subtitle: string,
}
function Card({ img, title, subtitle } : CardProps) {
    return (
        <div className="card-bg flex flex-col w-80 h-60 overflow-clip mr-4 rounded-lg">
            <img src={img} className="h-3/5 object-cover" />
            <div className="w-full h-full p-4">
                <p><b>{ title }</b></p>
                <p className="text-xs">{ subtitle }</p>
            </div>
        </div>
    );
}

export default Card;