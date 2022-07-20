import React, { useState } from "react";
import loginImg from "../assets/universitaet.jpg";
import { FormSelect, FormLabel } from "react-bootstrap";
import Service from "../services/Service";

const EAS = () => {
   const [data, setData] = useState();
  const [eas, setEas] = useState({
    erw: "",
    anzsem: "",
    starts: "",
  });

  const sendEAS = (e) => {
    e.preventDefault();
    Service.sendEAS(eas)
      .then((response) => {
        console.log(response.data);
        setData(response.data)
        console.log(data);
        console.log(setData);
        console.log(e)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEas({ ...eas, [e.target.name]: value });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="items-center justify-center h-30 w-full my-4">
          <FormSelect
            name="starts"
            className="h-10 w-96 border mt-2 px-2 py-2"
            value={eas.starts}
            onChange={(e) => handleChange(e)}
            id="type"
          >
            <option selected disabled value="">
              Wählen Sie Ihren Startsemester aus.
            </option>
            <option value="2">Wintersemester</option>
            <option value="1">Sommersemester</option>
          </FormSelect>
        </div>

        <div className="items-center justify-center h-30 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Studienlänge
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type={"text"}
            name="anzsem"
            value={eas.anzsem}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-30 w-full my-4">
          <FormSelect
            onChange={(e) => handleChange(e)}
            name="erw"
            value={eas.erw}
            className="h-10 w-96 border mt-2 px-2 py-2"
            id="type"
          >
            <option selected disabled value="">
              Wählen Sie eine Vertiefungsrichtung aus.
            </option>
            <option value="VS">Visual Computing</option>
            <option value="CISS">
              Complex and Intelligent Software Systems
            </option>
            <option value="ES">Embedded Systems</option>
            <option value="MED">Medizinische Informatik</option>
          </FormSelect>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 pt-4">
          <button onClick={sendEAS} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default EAS;
