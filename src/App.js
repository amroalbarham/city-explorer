import React from 'react';
import Informationform from './components/formsinf';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardsinfo from './components/cardsinfo';
import WeatherCard from './components/weather';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: '',
      display: false,
      show: false,
      weatherArr: [],
      rend: false,
    }
  }
  setData = (data1, showing) => {
    this.setState({
      data2: data1,
      display: showing,
      show: true,
    })
  }

  setWeatherArr = (weatherData, showing) => {
    this.setState({
      weatherArr: weatherData,
      rend: showing,
    })
  }


  render() {
    return (
      <div>
        <Informationform setData={this.setData} setWeather={this.setWeatherArr} />
        {this.state.show &&
          <Cardsinfo data2={this.state.data2} display={this.state.display} />
        }
        {this.state.show === true &&
          <WeatherCard display={this.state.rend} weatherData={this.state.weatherArr} />}



      </div>
    )
  }
}

export default App;




