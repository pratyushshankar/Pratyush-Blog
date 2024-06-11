import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import "./App.css";


export default function App() {
   
  const {fetchBlogPosts}= useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

   return(
     <div className="my=[100px]">
       <Header/>
       <Blogs/>
       <Pagination/>
     </div>
   );

}
