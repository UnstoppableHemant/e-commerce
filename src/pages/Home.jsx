import React, { useEffect, useState } from 'react';
import Instance from '../utils/hooks/apiPath';
import Button from '../components/buttons';
// var apiData=[];
// //const [apiData, setApiData] = useState([]);
// Instance.get("/products").then((response)=>{
//   console.log(response.data);
//   apiData=response.data;
//   //setApiData(response.data);
// });

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(()=>{
    Instance.get("/products").then((response)=>{
      console.log(response.data);
      //apiData=response.data;
      setApiData(response.data);
    });
  },[])
  return (
    <>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg"/>
    </div>
    <div className='grid grid-cols-4'>
      {apiData.map((data)=>{
        return(
          <div className='m-2 border border-'>
            <div className='h-[200px] flex items-center justify-center' ><img className='w-40 h-40' src={data.image}/></div>
            <div className=' ms-2'><h2 className='text-md'>{data.title}</h2>
            <h2 className='text-xl font-semibold'>$ {data.price}</h2>
            {/* <p>{data.description}</p> */}
            </div>
            <div className='m-2'>
              <Button btnName="Add to Cart" btnStyle="p-2 bg-[#febd69] rounded-md w-full"/>
            </div>
            <div className='m-2'>
              <Button btnName="Buy Now" btnStyle="p-2 bg-[#febd69] rounded-md w-full"/>
            </div>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default Home