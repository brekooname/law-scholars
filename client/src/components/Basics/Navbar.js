import React from "react";
import {FaGithub , FaBars} from "react-icons/fa"
const navbar = ({ filterItem, menuList }) => {
  return (
    <>

     <div className=".navbar">
      <nav>
        <div className="logo">
          
        </div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn"><i>
        <FaBars/></i>
        </label>
        <ul>
          {menuList.map((curElem) => {
            return (

              <li className="active"
                onClick={() => filterItem(curElem)}>
                <a className="active" href="#">{curElem}</a>
              </li>
            );
          
          })}
          <li className="active" ><a className="active" href="/cont">Add Blog +</a></li>
        </ul>
      </nav>
      
      </div>
    
    </>
  );
};

export default navbar;