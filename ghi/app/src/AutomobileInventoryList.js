import React from "react"

class AutomobileInventoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autos: [],
      autos_copy:[],
      manufacturers:[],
      checked_manu:[],
      records:[],
      manu_len:0,
    }

    this.deleteAutomobile = this.deleteAutomobile.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  
  handleFieldChange(event){
    const value = event.target.value
    if(this.state.checked_manu.includes(value)){
      const manus = this.state.checked_manu.filter(e => e!==value)
      const result = this.state.manu_len-1
      this.setState({manu_len:result})
      if (result===0){
        this.setState({autos:this.state.autos_copy})
        this.setState({checked_manu:[]})
      }else{
        this.setState({checked_manu:manus})
        const manus1=[]
        for (const manu of manus){
          for (const auto of this.state.autos_copy){
            if (auto.model.manufacturer.name===manu){
              manus1.push(auto)
            }
          }
        }
        this.setState({autos:manus1})
      }
    }else{
      const result =this.state.manu_len+1
      this.setState({manu_len:result})
      this.state.checked_manu.push(value)
      const manus=[]
      for (const manu of this.state.checked_manu){
        for (const auto of this.state.autos_copy){
          if (auto.model.manufacturer.name ===manu){
            manus.push(auto)
           }
      }

    }
    this.setState({autos:manus})
}
  }




  async componentDidMount() {
    const response = await fetch('http://localhost:8100/api/automobiles/')
    if (response.ok) {
      const data = await response.json()
      this.setState({ autos: data.autos,autos_copy:data.autos })
    }
    const url_manu = "http://localhost:8100/api/manufacturers/";
    const response_m = await fetch(url_manu);
        if (response_m.ok) {
            const data = await response_m.json();
            this.setState({manufacturers: data.manufacturers});
        };
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

      <div style={{marginTop:50}}>
      <h1>Automobiles</h1>
      <div className="checkbox_manufacturerlist">
        {this.state.manufacturers.map(manufacturer => {
                  return (
                      <div key={manufacturer.id} className="checkbox1">
                          <input
                              id={ manufacturer.id }
                              value = {manufacturer.name}
                              type="checkbox"
                              title="show first category products"
                              name="name"
                              onChange={this.handleFieldChange}
                              className="form-check-input checkbox_check"
                              />
                              <label className="form-check-label" htmlFor="myInput">{manufacturer.name}</label>
                      </div>
                  );
              })}
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
      </div>

      
      </>
  );    
  }
}
  
export default AutomobileInventoryList;

