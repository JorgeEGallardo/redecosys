import React, { useEffect } from "react";

//hooks
import useApi from "helper/useApi.js";

// components

import CardTableCatalogs from "components/Cards/CardTableCatalogs.js";

// layout for page

import Admin from "layouts/Admin.js";
export default function Estados({token}) {
  const { data, loading, error, fetchData} = useApi();
    
  useEffect(()=>{
      fetchData(
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <CardTableCatalogs color="dark" data={data.estados} title="Estados" headers={["Clave", "Estado"]} />
        </>
    );
}

Estados.layout = Admin;
