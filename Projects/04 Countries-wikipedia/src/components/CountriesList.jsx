import CountryCard from "./CountryCard"
import CountriesData from "../contriesData"
export default function CountriesList(){
    return (
        <> 
        {
            CountriesData.map((country)=>{
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