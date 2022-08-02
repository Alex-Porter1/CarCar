import React from "react"
import { Link } from 'react-router-dom'
class ManufacturerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {manufacturers: []}

    this.deleteManufacturer = this.deleteManufacturer.bind(this);
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8100/api/manufacturers/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ manufacturers: data.manufacturers })
    }
  }  

  async deleteManufacturer(manufacturer) {
    const deleteUrl = `http://localhost:8100/api/manufacturers/${manufacturer.id}`
    const fetchConfig = {
      method: "delete"
    }
    await fetch(deleteUrl, fetchConfig)

    const idx = this.state.manufacturers.indexOf(manufacturer)
    const updated_manufacturers = [...this.state.manufacturers]
    updated_manufacturers.splice(idx, 1)
    this.setState({ manufacturers: updated_manufacturers })
  }

  render () {
    return (
      <>
      <h1>Manufacturers</h1>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
              <Link to="/manufacturers/new" className="btn btn-primary btn-lg px-3 gap-3">Add a Manufacturer</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{ manufacturer.name }</td>
                <td><button className="btn btn-outline-dark" onClick={() => this.deleteManufacturer(manufacturer)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );    
  }
}
  
export default ManufacturerList;
