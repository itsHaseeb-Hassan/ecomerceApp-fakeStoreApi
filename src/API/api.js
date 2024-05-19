
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