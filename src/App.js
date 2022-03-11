import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Header from './Components/header';
import SearchTag from './Components/searchpost';
import Card from './Components/card';
import Pagination from './Components/Pagenation';

function App() {

  const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const[searchTerm, setSearchTerm]=useState("");
    const [searchResults, setSearchResults] = useState([]);
   

    useEffect(()=>{
        const loadPost = async () => {
  
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/");
  
            // After fetching data stored it in posts state.
            // posts=response.data
            setPosts(response.data);
            setSearchResults(response.data)
              // console.log(response.data)
            // Closed the loading page
            setLoading(false);
        }
  
        // Call the function
        loadPost();
    },[])



    

   

      useEffect(() => {
        const results = posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    

  return (
    <>
      
        <div className="container">
          <Header/>
          <SearchTag/>
             <form className='Serachform'>
                <input type="text"
                className='myinput'
                placeholder='Serch by title...'
                value={searchTerm}
                onChange={(event)=>{
                 setSearchTerm(event.target.value);
            
           }}
           />
      
        </form>
        
  
        
          {loading?(<h4>Loading...</h4>):
          <Pagination data={searchResults} 
           RenderComponent={Card}
           title="Posts"
           pageLimit={5}
           dataLimit={6}
           />
        }))
          </div>
           
      
    </>
   
  );
}

export default App;
