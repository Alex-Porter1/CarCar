import React from 'react';

class AutomobileInventoryForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            color: '',
            year: '',
            vin: '',
            model_id: '',
            
        }

        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleModelIdChange = this.handleModelIdChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
          const newAutomobile = await response.json();
          console.log(newAutomobile);

          const cleared = {
            color: '',
            year: '',
            vin: '',
            model_id: '',
          };
          this.setState(cleared);
        }
    }
    
    handleModelIdChange(event) {
        const value = event.target.value;
        this.setState({model_id: value})
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year: value})
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }    

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new Automobile!</h1>
                        <form onSubmit={this.handleSubmit} id="create-shoe-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleYearChange} value={this.state.picture_url} placeholder="Year" required type="text" name="year" id="year" className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleModelIdChange} value={this.state.model_id} placeholder="Model Id" required type="text" name="model_id" id="model_id" className="form-control"/>
                            <label htmlFor="model_id">Model Id</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutomobileInventoryForm;
