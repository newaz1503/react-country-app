import React, { useEffect } from 'react';

const Search = ({search, setSearch, setFilteredCountries, countries}) => {
    //functions
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    useEffect(()=> {
        const inputValue = search.toLocaleLowerCase();
        const newCountry = countries.filter((country) => {
        const name = country.name.common.toLocaleLowerCase();
        return name.startsWith(inputValue);
    })
        setFilteredCountries(newCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    return (
        <div>
             <form className="form-box">
                <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
            </form>
        </div>
    );
};
export default Search;