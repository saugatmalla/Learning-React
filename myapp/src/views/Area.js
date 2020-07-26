import React from 'react';

class Area extends React.Component {
    state = {
        length: 0,
        breadth: 0,
        area: 0
    }

    handleLengthChange = (e) => {
        this.setState({ length: e.target.value })
    }

    handleBreadthChange = (e) => {
        this.setState({ breadth: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            area: this.state.length * this.state.breadth
        })
    }


    render() {

        return (
            <div className="app-content">
                <div className="container mt-5">
                    <h1>I Dare you to find the area of rectangle.</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="length"></label>
                            <input className="form-control" type="number" name="length" id="length" onChange={this.handleLengthChange} placeholder="Length" />

                        </div>
                        <div className="form-group">
                            <label for="breadth"></label>
                            <input className="form-control" type="number" name="breadth" id="breadth" onChange={this.handleBreadthChange} placeholder="Breadth" />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    {this.state.area ? (
                        <h2 className="mt-4">Area of rectangle is: {this.state.area}</h2>
                    ) : null}
                </div>
            </div>
        )
    }
}
export default Area;