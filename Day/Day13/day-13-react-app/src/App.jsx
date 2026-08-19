import {Welcome} from "./components/P1";
import {ProductCard} from "./components/P2";
import './App.css';
function App() {
  return (
    <>
    <Welcome name="Sanvi"/>
    <ProductCard
    name="Sony WH-CH720N Active Noise Cancellation Wireless Bluetooth Over Ear Headphones"
    price={15999}
    image="https://m.media-amazon.com/images/I/610DB8Cwm7L._SY450_.jpg"/>
    </>
  )
}

export default App
