import CountryCard from "./CountryCard"
import { useEffect,useState } from "react"



export default function CountriesList({countryFilter}){
    const [countriesData, setCountriesData] = useState([])
    
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountriesData(data)
            // console.log(data)
        })
    },[])

    const filter = countriesData.filter((country)=>country.name.common.toLowerCase().includes(countryFilter))

    return (
        <> 
        {
            filter.map((country)=>{
                return <CountryCard
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    capital={country.capital?.[0]}
                    ></CountryCard>
                })
            }
        </>
    ) 
}