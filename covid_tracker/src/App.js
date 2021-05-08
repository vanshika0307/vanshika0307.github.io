import React from 'react';
import styles from './App.module.css';

import  {fetchData} from './api';
import {Cards, Chart, CountryPicker} from './components';
import covid from './images/covid.png';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const Data = await fetchData();

    this.setState({data: Data});
  }

  handleCountryChange =async (country) => {
    const Data = await fetchData(country);
    this.setState({data: Data, country:country});

  }

  render(){
    const { data, country } = this.state;
  return (
    <div className={styles.container}>
      <img src={covid} className={styles.covid} alt='Covid-19'/>
      <Cards data = {data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
  }
}

export default App;
