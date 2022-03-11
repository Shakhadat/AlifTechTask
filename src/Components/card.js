// import React from "react"
import React, { useState } from 'react';
import head from './avatar.jfif';



const Card=(props)=>{

    const tags=["html", "css", "json", "js", "c++", "sql"];

    console.log(tags[parseInt((Math.random()*6))])

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = (e) => { e.preventDefault(); setIsReadMore(!isReadMore)};

    const {id, title, body}=props.data;

    
    

return(
    <div className="col-md-4" key={id}>
        <div className="card">
            <img src={head} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">

                      {isReadMore ? body.slice(0, 50): body }
     {/* condition that will render 'read more' only if the text.length is greated than 150 chars */}
                        {body.length > 50 &&
                        <span className='btn btn-danger more' onClick={toggleReadMore}>
                      {isReadMore ? '...read more' : ' ...show less'}
                        </span>
                        }    
                    
                </p>
           <div className="tags2">
               <button className='btntag'>{tags[parseInt((Math.random()*6))]}</button>
               </div>
            
        </div>
    </div>
    </div>);
    
}



export default Card;