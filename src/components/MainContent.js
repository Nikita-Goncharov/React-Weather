import React from "react"
import WeatherForm from "./WeatherForm"

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {city: '', langCode: '', weather: ''}
    this.requestToOpenWeather = this.requestToOpenWeather.bind(this)
    this.setNewCity = this.setNewCity.bind(this)
    this.setNewLangCode = this.setNewLangCode.bind(this)
  }

  requestToOpenWeather() {
    let city = this.state['city']
    let lang = this.state['langCode']
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
    ).then(
        response => response.json()
    ).then(data => {
      console.log(data)
      this.setState({weather: data['weather'][0]})
    })
  }

  setNewCity(event) {
    this.setState({city: event.target.value})
  }

  setNewLangCode(event) {
    this.setState({langCode: event.target.value})
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //       () => this.tick(), 1000
  //   )
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timerID)
  // }
  //
  // tick() {
  //   this.setState({date: new Date()})
  // }

  render() {
    return (
        <main className="main">
          <div className="container">
            <WeatherForm
                requestWeather={this.requestToOpenWeather}
                setCity={this.setNewCity}
                setLangCode={this.setNewLangCode}
            />
            <div className="show-weather">
              <h2>{this.state['weather']['main']}</h2>
              <p>{this.state['weather']['description']}</p>
              <img src={"https://openweathermap.org/img/wn/" + this.state['weather']['icon'] + "@2x.png"} alt=""/>
            </div>
          </div>
        </main>
    )
  }
}

export default MainContent