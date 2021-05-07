import React from 'react';
import styles from './App.module.css';

import  {fetchData} from './api';
import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

  state = {
    data: {},
  }


  async componentDidMount() {
    const Data = await fetchData();

    this.setState({data: Data});
  }

  render(){
    const { data } = this.state;
  return (
    <div className={styles.container}>
      <Cards data = {data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
  }
}

export default App;
