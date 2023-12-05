
//functional component that takes two props
const CountriesList = ({countries, handleVisit}) => {

    //rendering
    return ( 
        <>
        {/* <h2>Country List</h2> */}
        {/* iterate over each country in my countries array
        for each country, renders a <li> item with the country's name*/}
      <ul className="country-list">
        {countries.map((country) => (
          <li className="country-item">
            <span className="country-name">{country.name.common}</span>
            {/* for each country, a button is also rendered
            when button is clicked, triggers handleVisit function with relevant country
            as an argument */}
            {handleVisit && (
                // the && makes it so that button is rendered only if the handleVisit prop is truthy,
                // meaning it's passed to the component. When a country is moved to the 
                // "Visited Countries," you can stop passing the handleVisit prop 
                // to the CountriesList component, and the button won't be rendered.
              <button className="visit-button" onClick={() => handleVisit(country)}>
                Visited
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

 
export default CountriesList;