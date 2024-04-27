import '../App.css';

//props. 이런식으로 상위 컴포넌트에 작성되어 있는 값을 가져올 수 있음
//ex) props.product
function Card(props) {
    let product = props.product;
    return (
        <div className = 'product-card'>
            {product.id} : {product.name}, {product.price}원
        </div>
    );
}


export default Card;
