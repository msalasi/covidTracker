import React from "react";
import useCountries from "./hooks/useCountries";
import UserRow from "./components/UserRow";
import "./components/Principal.css";

function App() {
  const {
    countryInfo,
    GlobalNewConfirmed,
    TotalConmfirmed,
    GlobalTotalDeaths,
  } = useCountries();

  return (
    <>
      <div className="container-virus-info rounded-md bg-blue-900 block w-3/4 mx-auto mt-48 mb-auto h-96">
        <div className="container-global-info py-12 justify-around flex">
          <div className="container-global-parts block text-center">
            <h1 className="text-white">NewConfirmed</h1>
            <p className="text-white">{GlobalNewConfirmed}</p>
          </div>
          <div className="container-global-parts block text-center">
            <h1 className="text-white">NewDeaths</h1>
            <p className="text-white">{TotalConmfirmed}</p>
          </div>
          <div className="container-global-parts block text-center">
            <h1 className="text-white">TotalDeaths</h1>
            <p className="text-white">{GlobalTotalDeaths}</p>
          </div>
        </div>
      
        {countryInfo
          .filter((pais) => pais.Country === "Chile")
          .map((pais) => (
            <UserRow key={pais.ID} pais={pais} />
          ))}
      </div>
    </>
  );
}

export default App;
