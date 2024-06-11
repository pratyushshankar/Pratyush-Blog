
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

 // step 1
  export const AppContext =createContext();

  export  default  function AppContextProvider({children}) {
   const [posts,setPosts] =useState([]);
   const [loading,setLoading] =useState(false);
   const [page,setPage] =useState(1);
   const [totalPages,setTotalPages] =useState(null);

     //  Fetch Blog Data


     async  function fetchBlogPosts(page = 1) {
         setLoading(true)
         let url =`${baseUrl}?page=${page }`;
      
       

         try{
            const result =await fetch(url);
            const data =await result.json();
            if(!data.posts || data.posts.length===0)
              throw new Error ("Something Went Wrong");
            console.log("Api Response",data);
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)

         }

         catch (error){

            console.log("error in fetching data ")
            setPage(1);
            setPosts([]);
            setTotalPages(null);

         }

         setLoading(false);

     }
       // Handle When Next and Previous button are cliked
      function handlePageChange (page) {
          setPage(page);
          fetchBlogPosts(page);
      }

     const value ={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
     }
      
     // step2

     return <AppContext.Provider value={value}>
        {children}
     </AppContext.Provider>
  }