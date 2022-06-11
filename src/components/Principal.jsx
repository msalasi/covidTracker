import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';


const Principal = () => {
    const [countryInfo, setCountryInfo] = useState([])
    const [GlobalNewConfirmed, setGlobalNewConfirmed] = useState([])
    const [GlobalNewDeaths, setGlobalNewDeaths] = useState([])
    const [GlobalTotalDeaths, setTotalDeaths] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.covid19api.com/summary',
        };
        
        axios.request(options)
            .then(function (response) {
                let paises = response.data.Countries;
                let newConfirmed = response.data.Global.NewConfirmed;
                let newDeaths = response.data.Global.NewDeaths;
                let newTotalDeaths = response.data.Global.TotalDeaths;
                let global = response.data.Global;
                console.log('paises', paises);
                console.log('global', global);
                setCountryInfo(paises);
                setGlobalNewConfirmed(newConfirmed);
                setGlobalNewDeaths(newDeaths);
                setTotalDeaths(newTotalDeaths);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    


  return (
    
    <div className='container-virus-info'>
        {
            
            countryInfo.map( pais => (
                <table key={pais.ID}>
                    <tbody>
                        <tr>
                            <th>País:</th>
                            <th>Total confirmados:</th>
                            <th>Total muertos:</th>
                        </tr>
                        <tr>
                            <td>{pais.Country}</td>
                            <td>{pais.TotalConfirmed}</td>
                            <td>{pais.TotalDeaths}</td>
                        </tr>
                    </tbody>
                </table>
            ))
        }
        <h1>NewConfirmed {GlobalNewConfirmed}</h1>
        <h1>NewDeaths {GlobalNewDeaths}</h1>
        <h1>TotalDeaths {GlobalTotalDeaths}</h1>
    </div>
  )
}

export default Principal