import React from 'react';

class ServiceAppointmentForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            vin: '',
            customer_name: '',
            scheduled_appointment: '',
            technician: '',
            technicians: [],
            reason: '',
            
        }

        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this)
        this.handleReasonChange = this.handleReasonChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians
        console.log(data);

        const serviceUrl = 'http://localhost:8080/api/services/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
          const newService = await response.json();
          console.log(newService);

          const cleared = {
            vin: '',
            customer_name: '',
            scheduled_appointment: '',
            technician: '',
            reason: '',
          };
          this.setState(cleared);
        }
    }
    
    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({technician: value})
    }

    handleCustomerNameChange(event) {
        const value = event.target.value;
        this.setState({customer_name: value})
    }

    handleDateChange(event) {
        const value = event.target.value;
        this.setState({scheduled_appointment: value})
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({reason: value})
    }


    async componentDidMount() {
        const url = 'http://localhost:8080/api/technicians/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();

          this.setState({technicians: data.technicians});

        }
    }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Service Appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleCustomerNameChange} value={this.state.customer_name} placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control"/>
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleDateChange} value={this.state.scheduled_appointment} placeholder="scheduled_appointment" required type="text" name="scheduled_appointment" id="scheduled_appointment" className="form-control"/>
                            <label htmlFor="scheduled_appointment">Date</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleTechnicianChange} value={this.state.technician} required name="technician" id="technician" className="form-select">
                            <option value="">Choose a technician</option>
                            {this.state.technicians.map(technician => {
                                return (
                                    <option key={technician.id} value={technician.id}>
                                    {technician.technician_name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control"/>
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceAppointmentForm;
