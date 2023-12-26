import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/Topbar/Topbar'
import HomeBanner from './Components/HomeBanner/HomeBanner';
import Categories from './Components/Categories/Categories';
import Photography from './Components/Photography/Photography';
import Products from './Components/Products/Products';
import Featured from './Components/Featured/Featured';

function App() {
 

  return (
    <>
     <Topbar/>
     <HomeBanner/>
     <Categories/>
     <Photography/>
     <Products/>
     <Featured/>
    </>
  )
}

export default App
