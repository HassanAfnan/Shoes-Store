import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeReviewCard from './card';

const shoes = {
    "1":{
        name:"Dlatons Boot",
        price:10,
        img:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    },
    "2":{
        name:"New Boot",
        price:20,
        img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    },
    "3":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    },
    "4":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    },
    "5":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    },
    "6":{
        name:"Classy Boot",
        price:40,
        img:"https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes",
        more:"These shoes are very good and you should try it they are very good and comfortable to wear."
    }
};

export const ProductDetails = () => {
    const {ProductID} = useParams();
    const product = shoes[ProductID];
    const {name, price, description, img, more} = product;
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <RecipeReviewCard name={name} price={price} desc={description} img={img} more={more}/>
        </div>
    )
}
