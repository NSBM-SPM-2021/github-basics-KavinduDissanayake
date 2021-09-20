import {useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export const ProductList = () => {

    //GET DATA FROM BAK END 
    useEffect(() => {
        getProducts();
    },[]);

    const [products,setProduct] = useState([]);

    const getProducts = async () => {
        const response = await axios.get('https://product-management-system-my.herokuapp.com/products');
        console.log(response.data);

        setProduct(response.data);
    }


    //delete product funcation call
    const deleteProduct = async (id) =>{

        await axios.delete(`https://product-management-system-my.herokuapp.com/products/${id}`);

        getProducts();
    }

    return (
        <div>

            <Link to="/add" className="btn btn-success m-3 pb-2">Add New</Link>
            <table className = "table table-responsive table-striped table-bordered">

                <thead>
                    <tr>
                        <th> No </th>
                        <th> Title </th>
                        <th> Price </th>
                        <th> Action </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product, index) =>(
                                <tr key = {product.id}>
                                    <td>{index +1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                     <td>
                                     <button onClick={()=> deleteProduct(product.id)} className ="btn btn-danger m-1">Delete</button>
                                     </td>
                                 </tr>

                    ))}
                   
                </tbody>

            </table>
        </div>
    )
}
