import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../services/Service";
const Praktikum = () => {
  const navigate = useNavigate();
  const [loading,setLoading]= useState(true);
  const [pflichts, setPflichts] = useState(null);

  const [eingabee, setEingabee] = useState({
    eingabeEinführung : ""
  })

  useEffect(() => {
    const fetchData2 = async () => {
        setLoading(true);
        try {
             const response2 = await Service.getListeFrei();
             setPflichts(response2.data);
             console.log(response2.data)
        } catch(error) {
            console.log(error);
        }
        setLoading(false);
    };
    fetchData2();
 }, []);

 const handleChange = (e) => {
  const value = e.target.value;
  setEingabee({ ...eingabee, [e.target.name]: value });
};

const sendEinführung = (e) => {
  e.preventDefault();
  console.log(eingabee);
  Service.sendEinführung(eingabee)
    .then((response) => {
      console.log(response.data);
      navigate("/next3")
    })
    .catch((error) => {
      console.log(error);
    });
    
   
};

  


  return (
    <div><div className="container mx-auto my-8">
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
          Auswahl
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
          <div className="text-sm text-gray-500">{pflicht[5]}</div>
        </td>
      </tr>
      
      ))}
       <div className="items-center justify-center h-30 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Wählen Sie bitte 2 Module aus.
          </label>
          <input
             value={eingabee.eingabeEinführung}
            type={"text"}
            name="eingabeEinführung"
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
            <a onClick={sendEinführung} className="text-indigo-600 hover:text-indigo-800 px-4">Weiter</a>
           
          </td>
    </tbody>
    )}
  </table>
</div>
</div></div>
  )
}

export default Praktikum