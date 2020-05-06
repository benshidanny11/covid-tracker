import React, {useState,useEffect} from 'react';
import {fetchCountries} from '../../api';
import {NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

function CountryPicker({handleCountryChange}) {

    const [countries,setCountries]=useState([]);

    useEffect(()=>{
      
        const fetchCountriesAPI= async ()=>{

           const dailyDataApi=await fetchCountries();
           setCountries(dailyDataApi);
        }
        fetchCountriesAPI();
    },[setCountries])
     console.log(countries);
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Grobal</option>
                    {countries.map((country,index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
