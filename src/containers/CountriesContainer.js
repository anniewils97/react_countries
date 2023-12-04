import { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";


const CountriesContainer = () => {

    //declare my two state variables and their setters
    //initial state for both is an empty array
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    // useEffect hook to fetch data from the API only when the data is rendered
    //fetched data is stored in the countries state
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => setCountries(data))
          .catch(error => console.error('Error:', error));
      }, []);

      // Function to mark a country as visited, takes country as argument
      const handleVisit = (country) => {
        setVisitedCountries((prevVisitedCountries) => [...prevVisitedCountries, country]);
        setCountries((prevCountries => prevCountries.filter(prevCountry => prevCountry.name.common !== country.name.common)));
      };
    // rendering
    return ( 
        <>
        <h2>Country List</h2>
        {/* returns two instances of my list componenet,
        first one displaying list of countries by passing countries state 
        and handleVisit function as props*/}
        <CountriesList countries={countries} handleVisit={handleVisit} />
        <h2>Visited Countries</h2>
         {/* second instance displays visited countries and 
         I pass the visitedContries state*/}
        <CountriesList countries={visitedCountries} />
        </>
     );
}
 
export default CountriesContainer;