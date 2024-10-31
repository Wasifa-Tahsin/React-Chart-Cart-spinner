import './App.css'
import Linechart from './components/LineChart/Linechart'
// import DaisyNav from './components/Daisy nav/DaisyNav'
import Navbar from './components/NavBar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
     

      <PriceOptions></PriceOptions>
      
      <Linechart ></Linechart>

      <Phones></Phones>
 



     
    </>
  )
}

export default App
