import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  
  const [products, setProducts] = useState([]);
  let num = 1;

  async function onLoad(){
    let response = await fetch("http://localhost:8000/products");
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody)
  }

  // 해당 페이지가 열릴때, 한번 실행이 됨. (초기화 메서드)
  // 어떤 값이 변경될떄 ? 다시 그림을 그릴꺼야?라는 뜻 빈배열(어떤 값이든) 
  // 첫번째 인수 -> 람다식 : 해당 함수가 최초 한번 실행이 됨.
  // 두번째 인수 -> 값이 바뀌면 첫번째 인수가 재실행
  useEffect(()=>{
    onLoad();
  }, [num]);

  return (
    <div>
      <h1>상품목록 페이지</h1>
      <hr/>
      <div>
        {products.map((product)=> <Card product = {product}/>)}
      </div>
    </div>
  );
}

export default App;
