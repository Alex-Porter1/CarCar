import React from "react"
import { Link } from 'react-router-dom'
class AutomobileInventoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {autos: []}

    this.deleteAutomobile = this.deleteAutomobile.bind(this);
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8100/api/automobiles/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ autos: data.autos })
    }
  }  

  async deleteAutomobile(automobile) {
    const deleteUrl = `http://localhost:8100/api/automobiles/${automobile.vin}`
    const fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.autos.indexOf(automobile)
    const updated_autos = [...this.state.autos]
    updated_autos.splice(idx, 1)
    this.setState({ autos: updated_autos })
  }

  render () {
    return (
      <>
      <h1>Automobiles</h1>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
              <Link to="/automobiles/new" className="btn btn-primary btn-lg px-3 gap-3">Add an Automobile</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Image</th>
            <th>Color</th>
            <th>Year</th>
            <th>Vin</th> 
          </tr>
        </thead>
        <tbody>
          {this.state.autos.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{ automobile.model.manufacturer.name }</td>
                <td>{ automobile.model.name}</td>
                <td><img src={automobile.model.picture_url} width="100" height="50" alt={automobile.name} /></td>
                <td>{ automobile.color }</td>
                <td>{ automobile.year }</td>
                <td>{ automobile.vin }</td>
                <td><button className="btn btn-outline-dark" onClick={() => this.deleteAutomobile(automobile)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );    
  }
}
  
export default AutomobileInventoryList;

