import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from '../services/Service';
const GetPlan = () => {

    const navigate = useNavigate();
    const [loading,setLoading]= useState(true);
    const [pflichts, setPflichts] = useState(null);
  
        useEffect(() => {
          const fetchData2 = async () => {
              setLoading(true);
              try {
                   const response2 = await Service.getPlan();
                   setPflichts(response2.data);
                   console.log(response2.data)
              } catch(error) {
                  console.log(error);
              }
              setLoading(false);
          };
          fetchData2();
       }, []);
      
      
          
         
      
  return (
    <div><div><div className="container mx-auto my-8">
<div className="flex shadow border-b">
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Modulname
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          CP
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Modulnummer
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Angeboten
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Wochenstunden
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Semester
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          
        </th>
      </tr>
    </thead>
    {!loading && ( 
    <tbody className="bg-white">
        {pflichts.map((pflicht) => ( 
      <tr key={pflicht.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht[0]}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht[1]}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht[2]}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht[3]}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht[4]}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm  text-gray-500">{pflicht[5]}</div>
        </td>
      </tr>
      
      ))}
      
    </tbody>
    )}
  </table>
</div>
</div></div></div>
  )
        }
  


export default GetPlan