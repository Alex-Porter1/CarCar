import React from "react"
class ServiceHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: [],
            vin: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);


    }
    
    async handleSubmit(event) {
        event.preventDefault();

        const VinURL = `http://localhost:8080/api/history/${this.state.vin}/`
        const fetchConfig = {
        method: 'GET'
        }
        const response = await fetch(VinURL, fetchConfig)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            this.setState({appointments: data.appointments});
            const cleared = {
                vin: '',
            }
            this.setState(cleared)
        } else {
            console.log("invalid request");
        }

    }
  
    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value});
    }
    
    

    render () {
        return (
        <>
        <h1>Service History</h1>
        <form className="input-group" onSubmit={this.handleSubmit}>
        <div className="form-floating mb-3">
                <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" type="text" id="vin" name="vin"  className="form-control"  />
                <label htmlFor="vinsearch">Enter Vin Here</label>
                <button type="submit" className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Search</button>
        </div>
        </form>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Vin</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Time</th>
                <th>VIP</th>
                <th>Technician</th>
                <th>Reason</th> 
            </tr>
            </thead>
            <tbody>
            {this.state.appointments.map(appointment => {
                let date = appointment.scheduled_appointment.slice(0, 10)
                let time = appointment.scheduled_appointment.slice(11, 16)
                return (
                <tr key={appointment.id}>
                    <td>{ appointment.vin }</td>
                    <td>{ appointment.customer_name }</td>
                    <td>{ date }</td>
                    <td>{ time }</td>
                    <td>{ appointment.VIP ? "Yes" : "No" }</td>
                    <td>{ appointment.technician.technician_name }</td>
                    <td>{ appointment.reason }</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </>
    );    
    }
}
  
export default ServiceHistory;