import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import {fetchData} from './api';


class  App extends React.Component {
  state={
    data:{
        
    },
  country:''
}
   handleCountryChange=async(country)=>{
    const fethedData =await fetchData(country);
    this.setState(
      {data:fethedData,country:country}
    )
   }
   async componentDidMount(){
     const fethedData =await fetchData();
    
     this.setState({
      data:fethedData
     })
   
   }
   render(){
     const data=this.state.data;
    
    return (
      <div className={styles.App}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={this.state.country}/>
      </div>
    );
   }
}

export default App;
