import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi.js';
import Menucard from './Card';



const Resturant = () => {
 const [menuData, setmenuData]= useState(Menu);

 const filterItem=(category)=>{

  const updateList=Menu.filter((curElem)=>{
    return curElem.category
  })
 };

  return (
  <>
    <nav className='navbar'>
<div className='btn-group'>
  <button className='btn-group__item' onClick={()=>filterItem("breakfast")}> Breakfast</button>
  <button className='btn-group__item'> Lunch</button>
  <button className='btn-group__item'> Evening</button>
  <button className='btn-group__item'> All</button>
</div>

    </nav>
     <Menucard k={menuData}/>
  </>
  
    );

}

export default Resturant