import './App.css';
import Card from './components/Card';

function App1() {
  return (
    <div>
      <h1>상품목록 페이지</h1>
      <hr/>
      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

function App2(){
  return(
    <div>
      <h2>이곳은 app2의 영역입니다.</h2>
    </div>
  )
}

export default App1;
