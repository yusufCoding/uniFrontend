import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../services/Service";
import Praktikum from "./Praktikum";


const Einführung = (props) => {
  const { childData } = props;
  const navigate = useNavigate();
  const [test,setTest] = useState(null);

  const [newlist, setNewlist] = useState(null);
  const [wahlpflicht, setWahlpflicht] = useState({
    eingabe : ""
  });



  const sendWahlpflicht = (e) => {
    e.preventDefault();
    Service.sendWahlpflicht(wahlpflicht)
      .then((response) => {
        console.log(response.data);
        navigate("/next2")
      })
      .catch((error) => {
        console.log(error);
      });
      
     
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setWahlpflicht({ ...wahlpflicht, [e.target.name]: value });
  };


  console.log(childData);
  console.log(childData.data[0])

  
  var ary = (childData.data[0]);
  var ary1 = (childData.data[1]);
  var ary2 = (childData.data[2]);
  var ary3 = (childData.data[3]);
  var ary4 = (childData.data[4]);
  var ary5 = (childData.data[5]);
  var ary6 = (childData.data[6]);
  var ary7 = (childData.data[7]);
  var ary8 = (childData.data[8]);
  var ary9 = (childData.data[9]);
  var ary11 = (childData.data[11]);
  var ary10 = (childData.data[10]);
  var ary12 = (childData.data[12]);
  var ary13 = (childData.data[13]);
  var ary14 = (childData.data[14]);
  var ary15 = (childData.data[15]);
  var ary16 = (childData.data[16]);
  var ary17 = (childData.data[17]);
  var ary18 = (childData.data[18]);
  var ary19 = (childData.data[19]);
  var ary20 = (childData.data[20]);
  var ary21 = (childData.data[21]);
  var ary22 = (childData.data[22]);
  var ary23 = (childData.data[23]);
  var ary24 = (childData.data[24]);
  var ary25 = (childData.data[25]);
  var ary26 = (childData.data[26]);
  var ary27 = (childData.data[27]);
  var ary28 = (childData.data[28]);
  var ary29 = (childData.data[29]);
  var ary30 = (childData.data[30]);
  var ary31 = (childData.data[31]);
  var ary32 = (childData.data[32]);
  var ary33 = (childData.data[33]);

  
  if (ary5 === undefined) {
    ary5 = ""; }
  if (ary6 === undefined) {
    ary6 = "";}
  if (ary7 === undefined) {
    ary7 = "";
  }if (ary8 === undefined) {
    ary8 = "";
  }if (ary9 === undefined) {
    ary9 = "";
  }if (ary10 === undefined) {
    ary10 = "";
  }if (ary11 === undefined) {
    ary11 = "";
  }if (ary12 === undefined) {
    ary12 = "";
  }if (ary13 === undefined) {
    ary13 = "";
  }if (ary14 === undefined) {
    ary14 = "";
  }if (ary15 === undefined) {
    ary15 = "";
  }if (ary16 === undefined) {
    ary16 = "";
  }if (ary17 === undefined) {
    ary17 = "";
  }if (ary18=== undefined) {
    ary18 = "";
  }if (ary19 === undefined) {
    ary19 = "";
  }if (ary20 === undefined) {
    ary20 = "";
  }if (ary21 === undefined) {
    ary21 = "";
  }if (ary22 === undefined) {
    ary22 = "";
  }if (ary23 === undefined) {
    ary23 = "";
  }if (ary24 === undefined) {
    ary24 = "";
  }if (ary25 === undefined) {
    ary25= "";
  }if (ary26 === undefined) {
    ary26= "";
  }if (ary27 === undefined) {
    ary27 = "";
  }if (ary28 === undefined) {
    ary28 = "";
  }if (ary29 === undefined) {
    ary29 = "";
  }if (ary30=== undefined) {
    ary30 = "";
  }if (ary31 === undefined) {
    ary31 = "";
  }if (ary32 === undefined) {
    ary32 = "";
  }if (ary33 === undefined) {
    ary33 = "";
  }
  console.log(ary[0])


  return <div> <div className="container mx-auto my-8">
  <div className="h-12">

  </div>
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
     
      <tbody className="bg-white">
           
        <tr >
          <td className="text-left px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{ary[0]}</div>
            
            <div className="text-sm text-gray-500">{ary1[0]}</div>
            <div className="text-sm text-gray-500">{ary2[0]}</div>
            <div className="text-sm text-gray-500">{ary3[0]}</div>
            <div className="text-sm text-gray-500">{ary4[0]}</div>
            <div className="text-sm text-gray-500">{ary5[0]}</div>
            <div className="text-sm text-gray-500">{ary6[0]}</div>
            <div className="text-sm text-gray-500">{ary7[0]}</div>
            <div className="text-sm text-gray-500">{ary8[0]}</div>
            <div className="text-sm text-gray-500">{ary9[0]}</div>
            <div className="text-sm text-gray-500">{ary10[0]}</div>
            <div className="text-sm text-gray-500">{ary11[0]}</div>
            <div className="text-sm text-gray-500">{ary12[0]}</div>
          </td>

          <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{ary[1]}</div>
            <div className="text-sm text-gray-500">{ary1[1]}</div>
            <div className="text-sm text-gray-500">{ary2[1]}</div>
            <div className="text-sm text-gray-500">{ary3[1]}</div>
            <div className="text-sm text-gray-500">{ary4[1]}</div>
            <div className="text-sm text-gray-500">{ary5[1]}</div>
            <div className="text-sm text-gray-500">{ary6[1]}</div>
            <div className="text-sm text-gray-500">{ary7[1]}</div>
            <div className="text-sm text-gray-500">{ary8[1]}</div>
            <div className="text-sm text-gray-500">{ary9[1]}</div>
            <div className="text-sm text-gray-500">{ary10[1]}</div>
            <div className="text-sm text-gray-500">{ary11[1]}</div>
            <div className="text-sm text-gray-500">{ary12[1]}</div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{ary[2]}</div>
            <div className="text-sm text-gray-500">{ary1[2]}</div>
            <div className="text-sm text-gray-500">{ary2[2]}</div>
            <div className="text-sm text-gray-500">{ary3[2]}</div>
            <div className="text-sm text-gray-500">{ary4[2]}</div>
            <div className="text-sm text-gray-500">{ary5[2]}</div>
            <div className="text-sm text-gray-500">{ary6[2]}</div>
            <div className="text-sm text-gray-500">{ary7[2]}</div>
            <div className="text-sm text-gray-500">{ary8[2]}</div>
            <div className="text-sm text-gray-500">{ary9[2]}</div>
            <div className="text-sm text-gray-500">{ary10[2]}</div>
            <div className="text-sm text-gray-500">{ary11[2]}</div>
            <div className="text-sm text-gray-500">{ary12[2]}</div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{ary[3]}</div>
            <div className="text-sm text-gray-500">{ary1[3]}</div>
            <div className="text-sm text-gray-500">{ary2[3]}</div>
            <div className="text-sm text-gray-500">{ary3[3]}</div>
            <div className="text-sm text-gray-500">{ary4[3]}</div>
            <div className="text-sm text-gray-500">{ary5[3]}</div>
            <div className="text-sm text-gray-500">{ary6[3]}</div>
            <div className="text-sm text-gray-500">{ary7[3]}</div>
            <div className="text-sm text-gray-500">{ary8[3]}</div>
            <div className="text-sm text-gray-500">{ary9[3]}</div>
            <div className="text-sm text-gray-500">{ary10[3]}</div>
            <div className="text-sm text-gray-500">{ary11[3]}</div>
            <div className="text-sm text-gray-500">{ary12[3]}</div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{ary[4]}</div>
            <div className="text-sm text-gray-500">{ary1[4]}</div>
            <div className="text-sm text-gray-500">{ary2[4]}</div>
            <div className="text-sm text-gray-500">{ary3[4]}</div>
            <div className="text-sm text-gray-500">{ary4[4]}</div>
            <div className="text-sm text-gray-500">{ary5[4]}</div>
            <div className="text-sm text-gray-500">{ary6[4]}</div>
            <div className="text-sm text-gray-500">{ary7[4]}</div>
            <div className="text-sm text-gray-500">{ary8[4]}</div>
            <div className="text-sm text-gray-500">{ary9[4]}</div>
            <div className="text-sm text-gray-500">{ary10[4]}</div>
            <div className="text-sm text-gray-500">{ary11[4]}</div>
            <div className="text-sm text-gray-500">{ary12[4]}</div>
          </td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{ary[5]}</div>
            <div className="text-sm text-gray-500">{ary1[5]}</div>
            <div className="text-sm text-gray-500">{ary2[5]}</div>
            <div className="text-sm text-gray-500">{ary3[5]}</div>
            <div className="text-sm text-gray-500">{ary4[5]}</div>
            <div className="text-sm text-gray-500">{ary5[5]}</div>
            <div className="text-sm text-gray-500">{ary6[5]}</div>
            <div className="text-sm text-gray-500">{ary7[5]}</div>
            <div className="text-sm text-gray-500">{ary8[5]}</div>
            <div className="text-sm text-gray-500">{ary9[5]}</div>
            <div className="text-sm text-gray-500">{ary10[5]}</div>
            <div className="text-sm text-gray-500">{ary11[5]}</div>
            <div className="text-sm text-gray-500">{ary12[5]}</div>
          </td>

          
        </tr>
        <div className="items-center justify-center h-30 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Wählen Sie 30 CP bei Modulen aus.
          </label>
          <input
            value={wahlpflicht.eingabe}
            type={"text"}
            name="eingabe"
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
            <a onClick={sendWahlpflicht} className="text-indigo-600 hover:text-indigo-800 px-4">Weiter</a>
           
          </td>
      </tbody>
      
    </table>
  </div>
</div></div>;
};

export default Einführung;
