import React from 'react';

class Area extends React.Component {
    state = {
        measurements: [
            { id: 1, type: 'Weight', value: ['kg', 'gm', 'lbs'] },
            { id: 2, type: 'Length', value: ['km', 'm'] },
        ],
        selectedMeasurement: 'Weight',
        fromMeasurement: {
            unit: 'kg',
            value: ''
        },
        toMeasurement: {
            unit: 'gm',
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
        let measurement = { ...this.state.fromMeasurement }
        measurement.unit = e.target.value
        this.setState({ fromMeasurement: measurement })
    }

    handleToUnitChange = (e) => {
        let measurement = { ...this.state.toMeasurement }
        measurement.unit = e.target.value
        this.setState({ toMeasurement: measurement })
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

    handleCalculate = (e) => {
        e.preventDefault()
        const fromUnit = this.state.fromMeasurement.unit
        const toUnit = this.state.toMeasurement.unit

        const toMeasurement = { ...this.state.toMeasurement }

        const fromValue = this.state.fromMeasurement.value
        // const toValue = toMeasurement.value
        let result = 0
        if (fromUnit === 'kg' && toUnit === 'gm') {
            result = fromValue * 1000
        } else if (fromUnit === 'gm' && toUnit === 'kg') {
            result = fromValue / 1000
        } else if (fromUnit === 'kg' && toUnit === 'lbs') {
            result = fromValue * 2.20462262185
        } else if (fromUnit === 'lbs' && toUnit === 'kg') {
            result = fromValue / 2.20462262185
        } else if (fromUnit === 'gm' && toUnit === 'lbs') {
            result = fromValue * 0.00220462262185
        } else if (fromUnit === 'lbs' && toUnit === 'gm') {
            result = fromValue / 0.00220462262185
        } else if (fromUnit === 'km' && toUnit === 'm') {
            result = fromValue * 1000
        } else if (fromUnit === 'm' && toUnit === 'km') {
            result = fromValue / 1000
        }

        if (result % 1 !== 0) {
            result = result.toFixed(3)
        }
        toMeasurement.value = result
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
                <form onSubmit={this.handleCalculate}>
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
                            <input className="form-control" type="number" placeholder="From"
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
                            <input className="form-control" type="number" placeholder="To"
                                readOnly value={this.state.toMeasurement.value}></input>
                        </div>

                        <div className="col-md-2">
                            <select className="form-control" onChange={this.handleToUnitChange} value={this.state.toMeasurement.unit}>
                                {values()}
                            </select>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.handleCalculate}>Calculate</button>
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