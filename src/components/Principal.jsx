import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';


const Principal = () => {
    const [countryInfo, setCountryInfo] = useState([])
    const [GlobalNewConfirmed, setGlobalNewConfirmed] = useState([])
    const [TotalConmfirmed, setTotalConmfirmed] = useState([])
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
                let totalConfirmed = response.data.Global.NewDeaths;
                let newTotalDeaths = response.data.Global.TotalDeaths;
                let global = response.data.Global;
                console.log('paises', paises);
                console.log('global', global);
                setCountryInfo(paises);
                setGlobalNewConfirmed(newConfirmed);
                setTotalConmfirmed(totalConfirmed);
                setTotalDeaths(newTotalDeaths);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


  return (
    
    <div className='container-virus-info'>
        <h1>NewConfirmed {GlobalNewConfirmed}</h1>
        <h1>NewDeaths {TotalConmfirmed}</h1>
        <h1>TotalDeaths {GlobalTotalDeaths}</h1>
        {
            
            countryInfo.filter( pais  => pais.Country === 'Chile').map( pais => (
                <table key={pais.ID}>
                        <tbody>
                            <tr>
                                <th>País:</th>
                                <th>Total de casos:</th>
                                <th>Casos diarios:</th>
                                <th>Ultimos fallecidos:</th>
                            </tr>
                            <tr>
                                <td>{pais.Country}</td>
                                <td>{pais.TotalConfirmed}</td>
                                <td>{pais.NewConfirmed}</td>
                                <td>{pais.NewDeaths}</td>
                            </tr>
                        </tbody>
                </table>
            ))
        }
        
    </div>
  )
}

export default Principal