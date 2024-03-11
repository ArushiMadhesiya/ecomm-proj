import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart } from './redux/action';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  const dispatch =useDispatch();
  const data={
    name:"iphone", 
    type:"mobile",
    price:1000
  }
  return (
    <div className="App">
      {/* <button onClick={()=> dispatch(addToCart(data)) }>add to cart</button> */}
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
