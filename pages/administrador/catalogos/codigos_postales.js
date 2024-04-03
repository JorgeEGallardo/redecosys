import React, { useEffect, useState } from "react";

//hooks
import useApi from "helper/useApi.js";

// components

import CardTableCatalogs from "components/Cards/CardTableCatalogs.js";

// layout for page

import Admin from "layouts/Admin.js";
export default function CodigoPostal({token}) {
    const [stateId, setStateId] = useState(1);
    
    const { data, loading, error, fetchData} = useApi();
    
    useEffect(()=>{
        fetchData(
            `https://api.condusef.gob.mx/sepomex/codigos-postales/?estado_id=${stateId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
        );
    }, [stateId])

    const { data: states, fetchData: fetchStates} = useApi();
    
    useEffect(()=>{
      fetchStates(
            'https://api.condusef.gob.mx/sepomex/estados',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
        );
    }, [])
    

    console.log(states.estados);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        <select className="block w-full mb-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={_ => setStateId(_.target.value)}>
        {states && Object.values(states.estados).map((value, index) => (
          <option value={value.claveEdo} key={index}> {value.estado} </option>
        ))}
        </select>
            <CardTableCatalogs color="dark" data={data.codigos_postales} title="Estados" headers={["Clave", "Estado", "Codigo postal"]} />
        </>
    );
}

CodigoPostal.layout = Admin;
