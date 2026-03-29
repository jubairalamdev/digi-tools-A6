import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main className='max-w-300 mx-auto'>
        <Banner />
      </main>
    </>
  )
}

export default App
