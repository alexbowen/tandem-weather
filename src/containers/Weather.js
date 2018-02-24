import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from '../components/Select'
import { locations, formats } from '../data/selectBoxes'
import Grid from '../components/Grid'
import { getForecast, updateSelected } from '../actions/weather'
import api from '../data/api'

class WeatherContainer extends Component {
    render() {
        return (
            <div>
                <Select
                    label='Select a location'
                    onChange={this.props.handleControlChange}
                    name="location"
                    options={locations}
                />
                <Select
                    label='Select data source'
                    options={formats}
                    name="dataFormat"
                    onChange={this.props.handleControlChange}
                />
                <button className="btn btn-success" onClick={this.props.fetchData}>
                    Get 5 day forecast
                </button>
                {this.props.forecast ?
                <Grid
                    forecast={this.props.forecast.list}
                    location={this.props.forecast.city.name}
                    columns={api.interval} 
                />
                : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { forecast, dataFormat, location } = state.weather

    return {
        forecast,
        dataFormat,
        location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(getForecast())
        },
        handleControlChange: (selected) => {
            dispatch(updateSelected(selected))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer)