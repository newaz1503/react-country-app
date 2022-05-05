/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Country from './components/Country';
import './assets/styles/Global.css';
import Styles from './assets/styles/Countries.module.css';
import Search from './components/Search';

function App() {
  //state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [search, setSearch] = useState("");

   //effect
   useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        let res = await fetch("https://restcountries.com/v3.1/all");
        let data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
        setError(null);
     }catch(error){
      setLoading(false);
      setError(error);
      }
    } 
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h2 className="title">Country App</h2>
      <Search search={search} setSearch={setSearch} setFilteredCountries={setFilteredCountries} countries={countries} />
      {loading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <div className={Styles.countries}>
          {
            filteredCountries && filteredCountries.map((country) => {
              return <Country country={country} key={Math.random()} id={Math.floor(Math.random())} filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
            })
          }
      </div>
    </div>
  );
}

export default App;
