import React from "react";

//hooks
import useApi from "helper/useApi.js";

// components

import CardTableCatalogs from "components/Cards/CardTableCatalogs.js";

// layout for page

import Admin from "layouts/Admin.js";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYmMyYjcxMy0zYWIxLTRkMjQtOGEzZC04YjYzYzY0N2E0MWUiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyMiIsImluc3RpdHVjaW9uaWQiOiJBOEZDOTI2NS0xODkyLTRDOEItQjQwRi1DOTBDQ0VFNyIsImluc3RpdHVjaW9uQ2xhdmUiOjQ3MjcsImRlbm9taW5hY2lvbl9zb2NpYWwiOiJDYWphIFBvcHVsYXIgQ3Jpc3RvIFJleSwgUy5DLiBkZSBBLlAuIGRlIFIuTC4gZGUgQy5WLiIsInNlY3RvcmlkIjoyMywic2VjdG9yIjoiU09DSUVEQURFUyBDT09QRVJBVElWQVMgREUgQUhPUlJPIFkgUFLDiVNUQU1PIiwic3lzdGVtIjoiUkVERUNPIiwiaWF0IjoxNzEyMTI0Njc1LCJleHAiOjE3MTI5ODg2NzV9.jrSzkA6Q71evRw7ehDMR0MExYHPFi0AJyxIO_9Wa2Bw';
export default function Medios() {
    const { data, loading, error } = useApi(
        'https://api.condusef.gob.mx/catalogos/medio-recepcion',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': TOKEN
            }
        }
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="flex flex-wrap mt-16">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardTableCatalogs color="dark" data={data.medio} title="Medios de recepción" headers={["Id", "Descripcion"]} />

                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardTableCatalogs color="light" data={data.medio} title="Medios de recepción" headers={["Id", "Descripcion"]} />

                </div>
            </div>
        </>
    );
}

Medios.layout = Admin;
