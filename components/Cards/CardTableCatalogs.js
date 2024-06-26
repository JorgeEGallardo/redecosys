import React from "react";
import PropTypes from "prop-types";

// components


export default function CardTableCatalogs({ color, data, title = "Tabla", headers=[] }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                { headers.map((value, index)=>(
                <th
                    key={index}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  {value}
                </th>
                ))}
              </tr>
            </thead>
            <tbody>
              
            {data && data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <td
                      key={index}
                      className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap"
                    >
                         <span
                    className={
                      "ml-3 font-bold "  +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                   
                   {value}
                  </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTableCatalogs.defaultProps = {
  color: "light",
};

CardTableCatalogs.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
