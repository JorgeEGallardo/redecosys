import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Niveles() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full  mb-12 px-4">

        </div>
        <div className="w-full  min-h-full mt-2mb-12 px-4">

          <CardTable  />
         
        </div>
      </div>
    </>
  );
}

Niveles.layout = Admin;
