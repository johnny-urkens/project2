import React, { Component } from 'react';

import WeatherApi from '../Weather/weather_api';

import WeatherItem from './weather_item';

class WeatherList extends Component {
    constructor(props) {
        super();

        this.state = {
            items: [ ],
            city: "Geel"
        };
    }
    componentDidMount() {
        let api = new WeatherApi();

        var promise = api.getWeather(this.state.city);

        promise.then(function(result){
                this.setState({ items: result.data.list });
            }.bind(this),
            function (error){
                console.log('Something went wrong with the weather api.')
            }
        );
    }
  
    render() {
        var paddingStyle = {
            padding: 20
        };

        const output = this.state.items.map ( (item, i) => {
            return (
                <div key={i} className="columns large-2 medium-4">
                    <WeatherItem item={item} city={this.state.city} temp = {item.main.temp}
                    date={item.dt_txt} weather={item.weather[0].description}/>
                </div>
            )

        });

        return (
            <section style={paddingStyle}>
                <div className="row">
                    {output}
                </div>
            </section>
        );
    }
}

export default WeatherList;
