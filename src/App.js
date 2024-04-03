import Navbar from "./componenet/Navbar";
import Carusal from "./componenet/Carusal";
import ProductList from "./componenet/ProductList";
import About from "./componenet/About";
import {Routes,Route} from "react-router-dom"
import ProductDetail from "./componenet/ProductDetail";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Carusal/>
            <ProductList/>
          </>
        }>
        </Route>
        <Route path="/about" element={
          <>
            <About/>
          </>
        }>
        </Route>
        <Route path="/Product/:ProductId" element={<ProductDetail/>}>

        </Route>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
