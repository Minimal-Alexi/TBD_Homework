import Hero from "./Hero";
import NavBar from "../common-components/NavBar";
import TrendingDiscover from "./TrendingDiscovery";
import ProductCard from "../common-components/ProductCard"
import ViewAllButton from "../common-components/ViewAll";
import Footer from "../common-components/Footers";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//import './style.css';

const Main = () => (
    <div>
      <NavBar />
      <Hero/>
      <TrendingDiscover/>
      <ProductCard/>
      <ViewAllButton/>
      <Footer/>
    </div>
  );

export default Main