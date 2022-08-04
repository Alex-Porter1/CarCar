import React from 'react';

class AutomobileInventoryForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            color: '',
            year: '',
            vin: '',
            model: '',
            models: [],
            
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
        delete data.models
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
            model: '',
          };
          this.setState(cleared);
        }
    }
    
    handleModelIdChange(event) {
        const value = event.target.value;
        this.setState({model: value})
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

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();

          this.setState({models: data.models});

        }
    }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create New Automobile</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
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
                        <div className="mb-3">
                            <select onChange={this.handleModelIdChange} value={this.state.model} required name="model" id="model" className="form-select">
                            <option value="">Choose a model</option>
                            {this.state.models.map(model => {
                                return (
                                    <option key={model.id} value={model.id}>
                                    {model.name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <button className="btn btn-primary btn-dark">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutomobileInventoryForm;
