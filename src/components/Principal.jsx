import React from "react";
import useCountries from "../hooks/useCountries";
import UserRow from "./UserRow";

const Principal = () => {

    const {countryInfo, GlobalNewConfirmed, TotalConmfirmed, GlobalTotalDeaths} = useCountries();

    return (
        <div className="container-virus-info">
            <h1>NewConfirmed {GlobalNewConfirmed}</h1>
            <h1>NewDeaths {TotalConmfirmed}</h1>
            <h1>TotalDeaths {GlobalTotalDeaths}</h1>
            {
                countryInfo.filter((pais) => pais.Country === "Chile")
                .map((pais) => (
                    <UserRow 
                        key={pais.ID} 
                        pais={pais}
                    />
                ))
            }
        </div>
    );
};

export default Principal;
