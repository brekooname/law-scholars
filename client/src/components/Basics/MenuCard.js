import React, { useState, useEffect } from "react";
import useCollapse from 'react-collapse';

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });


  
  return (
    
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
            
              <div className="card-container" key={id}>
                <div className="card ">

                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h6 className="card-title"> {name} </h6>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read" >Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <button className="glow-on-hover" onClick={() => setMyNum(myNum + 1)} >

                    Like <span>{myNum}</span>
                  </button >
                  <span className="card-tag  subtle">Learn More</span>

                </div>
              </div>
            </>
          );
        })}
        
      </section>
    </>
  );
};

export default MenuCard;