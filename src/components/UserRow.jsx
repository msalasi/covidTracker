import React from "react";

function UserRow({ pais }) {
  return (
    <div className="container-table py-12 justify-around flex">
      <div className="block text-center">
        <h1 className="text-white">Total de casos:</h1>
        <p className="text-white">{pais.TotalConfirmed}</p>
      </div>
      <div className="block text-center">
        <h1 className="text-white">Casos diarios:</h1>
        <p className="text-white">{pais.NewConfirmed}</p>
      </div>
      <div className="block text-center">
        <h1 className="text-white">Ultimos fallecidos:</h1>
        <p className="text-white">{pais.NewDeaths}</p>
      </div>
    </div>
  );
}

export default UserRow;
