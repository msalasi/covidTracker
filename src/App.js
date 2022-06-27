import React from "react";
import useCountries from "./hooks/useCountries";
import UserRow from "./components/UserRow";
import "./components/Principal.css";
import tumba from '../src/assets/imgs/lapida-sepulcral.png';
import virus from '../src/assets/imgs/virus.png';
import craneo from '../src/assets/imgs/craneo.png';

function App() {
  const {
    countryInfo,
    GlobalNewConfirmed,
    TotalConmfirmed,
    GlobalTotalDeaths,
  } = useCountries();

  return (
    <>
      <div className="container-virus-info w-full h-screen mx-auto">
        <div className="backdrop-blur sm:backdrop-blur-none	md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none sm:mx-auto w-full lg:w-8/6 xl:w-3/4 2xl:w-6/12 h-screen items-center flex flex-col justify-center md:w-5/6">
          <h1 className="text-center text-2xl font-bold font-mono p-2 text-white rounded-lg bg-[#b03432] ">Contagios a nivel mundial</h1>
          <p className="text-white my-2">*Datos con un día de desfase*</p>
          <div className="w-full rounded-lg block sm:block md:flex lg:justify-evenly sm:gap-4 lg:w-5/6 xl:w-5/6 2xl:w-full ">
            <div className="block text-center bg-white mx-auto mb-2 p-4 rounded-lg w-3/5 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6 md:my-2">
              <img src={virus} alt='virus' className="mx-auto"></img>
              <h1 className="text-black font-sans text-base font-bold">Nuevos confirmados</h1>
              <p className="text-black font-sans text-base font-bold">{GlobalNewConfirmed}</p>
            </div>
            <div className="block text-center bg-white mx-auto my-2 p-4 rounded-lg w-3/5 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6 md:my-2">
              <img src={tumba} alt='tumba' className="mx-auto"></img>
              <h1 className="text-black font-sans text-base  font-bold">Nuevos muertos</h1>
              <p className="text-black font-sans text-base font-bold">{TotalConmfirmed}</p>
            </div>
            <div className="block text-center bg-white mx-auto mt-2 p-4 rounded-lg w-3/5 sm:w-1/3 md:w-2/5 lg:w-1/3 2xl:w-2/6 md:my-2">
              <img src={craneo} alt='craneo' className="mx-auto"></img>
              <h1 className="text-black font-sans text-base  font-bold">Total de muertos</h1>
              <p className="text-black font-sans text-base font-bold">{GlobalTotalDeaths}</p>
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold font-mono my-2 p-2 text-white rounded-lg bg-[#b03432]">Chile</h1>

          {countryInfo
              .filter((pais) => pais.Country === "Chile")
              .map((pais) => (
                <UserRow key={pais.ID} pais={pais} />
          ))}
        </div>
        

            
        
      </div>
    </>
  );
}

export default App;
