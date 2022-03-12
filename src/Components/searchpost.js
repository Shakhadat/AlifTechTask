import React, {useState} from "react";

const SearchTag=({setTagFilter})=>{
    const tags=["html", "css", "json", "js", "c++", "sql"]
    const [eventClicked, setEventClicked] = useState("")

    const HandleSearch=(e)=>{
        e.preventDefault();
        console.log("clik", e.target.textContent);
        setEventClicked(e.target.textContent)
    }
    // setTagFilter(eventClicked);


    return(
        <>
        <div>
            <div className="tags">
               {tags.map((item)=>{
                   return(
                       <button onClick={(e)=>{
                           setTagFilter(e.target.textContent)
                       }}>
                        {item}
                       </button>
                   );
               })}
            </div>
        </div>

        </>
    );
}

export default SearchTag;