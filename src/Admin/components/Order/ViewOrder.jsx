import React,{useEffect} from 'react'
import { fetchData } from '../../../API/api';
import { getData } from '../../../Redux/Slice/CheckoutSlice';
import { useSelector,useDispatch } from 'react-redux';
const ViewOrder = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      const response= fetchData()
      getData(response)
    }, [dispatch]);

    const data=useSelector(state=>state.checkout)
  return (
    <div>
     <div className="overflow-x-auto ms-10 my-10">
     <h1 className='font-bold text-[20px] p-2'>View Order</h1>
      <table className="min-w-full  divide-gray-200">
        <thead className="bg-gray-50">
          <tr >
            <th scope="col" className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th scope="col" className=" px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Postal
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Summary
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Detail
            </th>
            <th scope="col" className="px-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {
                data.data?.map((item,index)=>{
                    return(
                        <tr className='text-center' key={index}>
                            <td>{item.id}</td>
                            <td>{item.First_Name}</td>
                            <td>{item.last_Name}</td>
                            <td>{item.address}</td>
                            <td>{item.country}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.postal}</td>
                            <td>{item.phone_number}</td>
                            <td><span>Total:{item.orderSummary.total}</span><br/><span>Order No:{item.orderSummary.orderNumber}</span><br/><span>Items:{item.orderSummary.items}</span> </td>
                            <td>{item.orderDetails.map((item,index)=>{
                                return(
                                    <div key={index}>
                                    <span><img src={item.src} className='w-10 h-10 mx-auto'/></span><br/>
                                    <span>{item.quantity}</span>
                                    </div >
                                )
                            })}</td>
                            <td><button className='w-[50px] rounded-md mt-4 text-white bg-[#F3A20D] py-2  ' >Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ViewOrder