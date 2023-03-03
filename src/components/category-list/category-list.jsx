import React from "react";
import CategoryItem from "../category-items/category-items";

const CategoryList = ({categories})=>{
    return(
 <div className='categories-container'>
      {categories.map((category) => { //el map es para hacer un arreglo
        return (
          <CategoryItem title={category.title} key={category.id} img={category.img} /> //va en singular xq el arreglo va uno x uno y category es un objeto dentro del array y el return si esta en la misma linea no lleva parentesis
        ) //la key es una props de react para llamar al id
      })}

    </div>
    )
}


export default CategoryList