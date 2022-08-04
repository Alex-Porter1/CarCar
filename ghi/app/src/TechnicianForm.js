import React from 'react';

class TechnicianForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            technician_name: '',
            employee_number: '',  
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
          const newTechnician = await response.json();
          console.log(newTechnician);

          const cleared = {
            technician_name: '',
            employee_number: '',
          };
          this.setState(cleared);
        }
    }
    
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({technician_name: value})
    }

    handleNumberChange(event) {
        const value = event.target.value;
        this.setState({employee_number: value})
    }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add Technician</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.technician_name} placeholder="technician_name" required type="text" name="technician_name" id="technician_name" className="form-control"/>
                            <label htmlFor="technician_name">Technician Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNumberChange} value={this.state.employee_number} placeholder="employee_number" required type="number" name="employee_number" id="employee_number" className="form-control"/>
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnicianForm;
