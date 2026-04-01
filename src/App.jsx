import { useState } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Facts from './assets/Components/Facts/Facts'
import Navbar from './assets/Components/Navbar/Navbar'
import Tools from './assets/Components/Tools/Tools'
import Steps from './assets/Components/Steps/Steps'
import Pricings from './assets/Components/Pricings/Pricings'

function App() {

    const [cart, setCart] = useState([]);


  const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const buyBtn = document.getElementById(`buyBtn-${product.id}`);
        buyBtn.setAttribute("disabled", "")
        buyBtn.classList.replace("active-btn", "inactive-btn");
        buyBtn.innerText = "Purchased";
        // toast.success("Model Subscribed Successfully!")
    }

    const removeProduct = (product) => {
        const updatedList = cart.filter(p => p !== product);
        setCart(updatedList);
    }

    const checkout = () => {
        setCart([]);
    }

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Facts />
      <Tools addProduct={addProduct} removeProduct={removeProduct} checkout={checkout} cart={cart}/>
      <Steps />
      <Pricings />
    </>
  )
}

export default App
