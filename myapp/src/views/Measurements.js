import React from 'react';
import convert from '../utils/convert'

class Area extends React.Component {
    state = {
        measurements: [
            { id: 1, type: 'Weight', value: ['kg', 'gm', 'lbs'] },
            { id: 2, type: 'Length', value: ['km', 'm', 'miles'] },
        ],
        selectedMeasurement: 'Weight',
        fromMeasurement: {
            unit: 'kg',
            value: ''
        },
        toMeasurement: {
            unit: 'lbs',
            value: ''
        },
        result: 0
    }

    componentDidMount() {

    }

    handleMeasurementSelect = (e) => {
        this.setState({ selectedMeasurement: e.target.value })
        const typeofMeasurement = this.state.measurements.find(el => el.type === e.target.value)
        let fromMeasurement = { ...this.state.fromMeasurement }
        let toMeasurement = { ...this.state.toMeasurement }
        fromMeasurement = {
            unit: typeofMeasurement.value[0],
            value: ''
        }
        toMeasurement = {
            unit: typeofMeasurement.value[1],
            value: ''
        }
        this.setState({ fromMeasurement: fromMeasurement, toMeasurement: toMeasurement, result: 0 })
    }

    handleFromUnitChange = (e) => {
        let fromMeasurement = { ...this.state.fromMeasurement }
        let toMeasurement = { ...this.state.toMeasurement }

        fromMeasurement.unit = e.target.value
        const result = convert(e.target.value, this.state.toMeasurement.unit, this.state.fromMeasurement.value)
        toMeasurement.value = result

        this.setState({ fromMeasurement: fromMeasurement, result: result })
    }

    handleToUnitChange = (e) => {
        let toMeasurement = { ...this.state.toMeasurement }

        toMeasurement.unit = e.target.value
        const result = convert(this.state.fromMeasurement.unit, e.target.value, this.state.fromMeasurement.value)
        toMeasurement.value = result

        this.setState({ toMeasurement: toMeasurement, result: result })
    }

    handleFromValueChange = (e) => {
        let measurement = { ...this.state.fromMeasurement }
        measurement.value = e.target.value
        this.setState({ fromMeasurement: measurement })
    }

    handleToValueChange = (e) => {
        let measurement = { ...this.state.toMeasurement }
        measurement.value = e.target.value
        this.setState({ toMeasurement: measurement })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleCalculate()
    }

    handleCalculate = () => {
        const fromUnit = this.state.fromMeasurement.unit
        const toUnit = this.state.toMeasurement.unit

        const toMeasurement = { ...this.state.toMeasurement }

        const fromValue = this.state.fromMeasurement.value

        const result = convert(fromUnit, toUnit, fromValue)
        toMeasurement.value = result
        console.log(toMeasurement)
        this.setState({ result: result, toMeasurement: toMeasurement })
    }

    render() {
        const options = this.state.measurements.map(el => {
            return <option key={el.id}> {el.type}</option>
        })

        const values = () => {
            let typeofMeasurement = []
            let measurementValues
            typeofMeasurement = this.state.measurements.find(el => el.type === this.state.selectedMeasurement)

            measurementValues = typeofMeasurement.value.map(el => {
                return <option key={el}> {el}</option>
            })
            return measurementValues

        }

        // const measurementValues = 

        return (
            <div className="app-content" >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label htmlFor="typeofMeasurement"> Select measurement</label>
                            <select className="form-control"
                                id="typeofMeasurement"
                                onChange={this.handleMeasurementSelect}
                                value={this.state.selectedMeasurement}>
                                {options}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row mt-4">
                        <div className="col-md-2">
                            <input className="form-control" type="number" placeholder="0"
                                onChange={this.handleFromValueChange} value={this.state.fromMeasurement.value}></input>
                        </div>

                        <div className="col-md-2">

                            <select className="form-control" onChange={this.handleFromUnitChange} value={this.state.fromMeasurement.unit}>
                                {values()}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-md-2">
                            <input className="form-control" type="number" placeholder="0"
                                readOnly value={this.state.toMeasurement.value}></input>
                        </div>

                        <div className="col-md-2">
                            <select className="form-control" onChange={this.handleToUnitChange} value={this.state.toMeasurement.unit}>
                                {values()}
                            </select>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Calculate</button>
                    </div>
                </form>

                <div className="mt-4">
                    {this.state.result ? <span>
                        <span className="display-3">{this.state.result}</span>
                        <span className="display-4 ">{this.state.toMeasurement.unit}</span>
                    </span> : null}
                </div>
            </div>
        )
    }
}
export default Area;