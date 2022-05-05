import React from 'react';
import Styles from '../assets/styles/Country.module.css';
const Country = ({country, filteredCountries, setFilteredCountries}) => {
    const { name, flags, capital, population, area } = country;
    const deleteCountry = (namee) => {
        const newCountries = filteredCountries.filter(item => item.name.common !== namee);
        setFilteredCountries(newCountries);
    } 
    return (
        <article>
            <div className={Styles.country}>
                <ul>
                    <li><img src={flags.png} alt={name.common} /></li>
                    <li>Name: <strong>{name.common}</strong></li>
                    <li>Capital: <strong>{capital}</strong></li>
                    <li>Area: <strong>{area}</strong></li>
                    <li>Population: <strong>{population}</strong></li>
                </ul>
            </div>
            <button type='button' className={Styles.btn} onClick={() => deleteCountry(name.common)}>Delete</button>
        </article>
    );
};
export default Country;