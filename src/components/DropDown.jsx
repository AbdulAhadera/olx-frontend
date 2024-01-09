import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

const DropDown = ({ countries }) => {

    const [selectedCountry, setSelectedCountry] = useState();

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div className='dropdown'>
            <BsSearch className='search-icon'/>
            <select
                className='dropdown-fix'
                id="countryDropdown"
                value={selectedCountry}
                onChange={handleChange}
            >
                <option value="" disabled>

                </option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default DropDown