import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import React from 'react';


function CountryDropdown(){
    return (
        <>
        <Button className='countryDrop '>
                                <div className='info d-flex flex-column'>
                                    <span className="label">Your Location</span>
                                    <span className="name">India</span>
                                    <span></span>
                                </div>
                                <span className="ml-auto"><FaAngleDown/></span>
        </Button>
        </>
    )
}

export default CountryDropdown;