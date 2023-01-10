// import Card from "./components/card/Card";
import NewsApi from "./components/card/NewsApi";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home";



function App() {
  return (
   <>

    {/* <Card/> */}
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/news" element={<NewsApi/>}  />

      </Routes>
    </BrowserRouter>
    
  
  
   </>
  );
}

export default App;
