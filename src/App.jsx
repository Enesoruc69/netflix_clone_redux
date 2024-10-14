import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return <Router>
    
        <div className="p-5 md:p-10 lg:p-14 xl:p-20">
        <Header/>
     <Routes>
      <Route element={<MainPage/>} path="/" />
      <Route element={<DetailPage/>} path="/movie/:id"/>

     </Routes>


        </div>
  </Router>;
}

export default App;
