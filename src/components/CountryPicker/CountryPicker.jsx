import React from 'react';
import {NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

function CountryPicker({countries,country, handleCountryChange}) {
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue={country || 'Grobal'} onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Grobal</option>
                    {countries.map((country,index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
