import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

import { Route, Routes } from "react-router-dom";


const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Blog = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
    {/* //    <Routes>
    //     <Route path="/Contact" element={<Contact/>}/>
    //    </Routes> */}
      <Navbar filterItem={filterItem} menuList={menuList} setMenuList={setMenuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Blog;