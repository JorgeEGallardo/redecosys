import React from "react";

// components

import CardTableCatalogs from "components/Cards/CardTableCatalogs.js";

// layout for page

import Admin from "layouts/Admin.js";
import Medios from "./medios";
import Niveles from "./niveles";
import Estados from "./estados";
import CodigoPostal from "./codigos_postales";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzYmMyYjcxMy0zYWIxLTRkMjQtOGEzZC04YjYzYzY0N2E0MWUiLCJ1c2VybmFtZSI6ImFkbWluQ1BDUjIyMiIsImluc3RpdHVjaW9uaWQiOiJBOEZDOTI2NS0xODkyLTRDOEItQjQwRi1DOTBDQ0VFNyIsImluc3RpdHVjaW9uQ2xhdmUiOjQ3MjcsImRlbm9taW5hY2lvbl9zb2NpYWwiOiJDYWphIFBvcHVsYXIgQ3Jpc3RvIFJleSwgUy5DLiBkZSBBLlAuIGRlIFIuTC4gZGUgQy5WLiIsInNlY3RvcmlkIjoyMywic2VjdG9yIjoiU09DSUVEQURFUyBDT09QRVJBVElWQVMgREUgQUhPUlJPIFkgUFLDiVNUQU1PIiwic3lzdGVtIjoiUkVERUNPIiwiaWF0IjoxNzEyMTI0Njc1LCJleHAiOjE3MTI5ODg2NzV9.jrSzkA6Q71evRw7ehDMR0MExYHPFi0AJyxIO_9Wa2Bw';
export default function Catalogos() {

    return (
        <>
            <div className="flex flex-wrap mt-16">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <Niveles token = {TOKEN}></Niveles>
                    <Medios token={TOKEN}></Medios>
                    <CodigoPostal token={TOKEN}></CodigoPostal>      
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <Estados token={TOKEN}></Estados>
                </div>
            </div>
        </>
    );
}

Catalogos.layout = Admin;
