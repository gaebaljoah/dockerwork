import '../App.css';

function Card() {
    const items = ['Apple','Banana','Orange']
    return (
        <div>
            <ul>
                {items.map((item,index) => (
                    <li className='product-card'>{index+1}번쨰 상품 : {item}</li>
                ))}
            </ul>
        </div>
    );
}


export default Card;
