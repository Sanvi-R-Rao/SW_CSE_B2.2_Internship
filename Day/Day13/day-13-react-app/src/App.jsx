import {Welcome} from "./components/P1";
import {ProductCard} from "./components/P2";
import './App.css';
import ButtonDemo from "./components/P3";
import Counter from "./components/StateExample1.jsx";
function App() {
  return (
    <>
    <Welcome name="Sanvi"/>
    <Counter/>
    <ButtonDemo />
    <ProductCard
    // name="Sony WH-CH720N Active Noise Cancellation Wireless Bluetooth Over Ear Headphones"
    price={15999}
    image="https://m.media-amazon.com/images/I/610DB8Cwm7L._SY450_.jpg"/>
    </>
  )
}

export default App
