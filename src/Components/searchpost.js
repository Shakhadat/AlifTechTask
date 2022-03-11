import React from "react";

const SearchTag=()=>{
    const tags=["html", "css", "json", "js", "c++", "sql"]
   
    return(
        <>
        <div>
            <div className="tags">
               {tags.map((item)=>{
                   return(
                       <button>
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