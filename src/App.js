import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart } from './redux/action';
import Header from './components/Header';
import Main from './components/Main';
import Cart from '../src/components/Cart'
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
