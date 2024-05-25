
import axios from 'axios';

const apiUrl = 'http://localhost:3001/orderDetail'; 
const productUrl='https://fakestoreapi.com/products'


export const fetchProduct = async () => {
    try {
        const response = await axios.get(productUrl); 
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
 };


 export const postProduct=async (postProduct)=>{
    try{
        const response=await axios.post(productUrl, postProduct);
        return response.data;
    }
    catch(error){
        console.log("Error posting data in product",error);
        throw error;
    }
 }
export const fetchData = async () => {
   try {
       const response = await axios.get(apiUrl); 
       return response.data;
   } catch (error) {
       console.error('Error fetching data:', error);
       throw error;
   }
};
export const postData = async (postData) => {
    try {
        const response = await axios.post(apiUrl, postData); 
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
 };
 export const deleteData = async (id) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  };