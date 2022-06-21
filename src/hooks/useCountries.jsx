import axios from "axios";
import { useEffect, useState } from 'react';

function useCountrys() {
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
                setCountryInfo(paises);
                setGlobalNewConfirmed(newConfirmed);
                setTotalConmfirmed(totalConfirmed);
                setTotalDeaths(newTotalDeaths);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    return{
        countryInfo,
        GlobalNewConfirmed,
        TotalConmfirmed,
        GlobalTotalDeaths
    }
}

export default useCountrys