import React from "react";
import styles from "../App.module.css";
import Cards from "./Cards/Cards";
import CountryPicker from "./CountryPicker/CountryPicker";
import Charts from "./Charts/Charts";
import { connect } from "react-redux";
import { fetchData, fetchCountries,fetchDailyData, fetchSpesData, resetStore } from "../redux/actions";

class Home extends React.Component {
  state = {
    specificCountryInformation: {},
    globalInformation: {},
    dailyData:[],
    country: undefined,
    countries: []
  };
  handleCountryChange = async (country) => {
    console.log(country)
   // this.setState({country});
    this.props.history.push(`/${country}`);
    window.location.reload(true);
  };
  async componentDidMount() {
    const { match: { params: { country } } } = this.props;
    console.log('Hrorororor')
    this.setState({ country });
    if(country){
      this.props.fetchSpesData(country)
    }else{
      this.props.fetchData();
    }
    this.props.fetchCountries();
    this.props.fetchDailyData();
  
  }

  componentWillReceiveProps({globalInformation, specificCountryInformation,dailyData, countries}){
    this.setState({
      globalInformation,
      specificCountryInformation,
      countries,
      dailyData
    })
  }

  render() {
    const {dailyData, countries, country, specificCountryInformation, globalInformation } = this.state;
    const data = country ? specificCountryInformation : globalInformation;
    return (
      <div className={styles.App}>
        <Cards data={data} />
         {
           countries.length > 0 && (<CountryPicker country={country} countries={countries} handleCountryChange={this.handleCountryChange} />)
         }
         <Charts data={data} dailyData={dailyData} country={this.state.country} />
      </div>
    );
  }
}

const mapStateToProps = ({ corona_info }) => ({
  globalInformation: corona_info.g_info,
  specificCountryInformation: corona_info.s_info,
  countries: corona_info.countries,
  dailyData:corona_info.daily_data
});

export default connect(mapStateToProps, { fetchSpesData, resetStore, fetchDailyData, fetchData, fetchCountries })(Home);
