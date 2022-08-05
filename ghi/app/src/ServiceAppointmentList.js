import React from "react"

class ServiceAppointmentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {appointments: []}
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
  }
  



  async deleteAppointment(appointment) {
    const deleteUrl = `http://localhost:8080/api/services/${appointment.id}`
    let fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.appointments.indexOf(appointment)
    const updated_appointments = [...this.state.appointments]
    updated_appointments.splice(idx, 1)
    this.setState({ appointments: updated_appointments })
  }

  async updateAppointment(appointment) {
    const updateUrl = `http://localhost:8080/api/services/${appointment.id}/`
    const fetchConfig = {
      method: "put",
      body: JSON.stringify({"finished":"True"}),
      headers: {
      'Content-Type': 'application/json',
      },
    }

    await fetch(updateUrl, fetchConfig)

    const idx = this.state.appointments.indexOf(appointment)
    const updated_appointments = [...this.state.appointments]
    updated_appointments.splice(idx, 1)
    this.setState({ appointments: updated_appointments })
  }


  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/services/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ appointments: data.appointments.filter(function(appointment){
        return appointment.finished === false;
      })})
    }
  }  

  render () {
    return (
      <>
      <h1>Service Appointments</h1>
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
                <td><button className="btn btn-primary btn-dark" onClick={() => this.deleteAppointment(appointment)}>Cancel</button></td>
                <td><button className="btn btn-outline-dark" onClick={() => this.updateAppointment(appointment)}>Finished</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      </>
  );    
  }
}
  
export default ServiceAppointmentList;