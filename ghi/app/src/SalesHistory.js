import React from 'react';

class SalesHistoryList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sales_people:[],
            sales_records:[],
          };
          this.handleFieldChange = this.handleFieldChange.bind(this);
          
    }

    handleFieldChange(event) {
        const value = event.target.value;
        this.setState({[event.target.id]: value})
    }
    
    async componentDidMount() {
        const saurl = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(saurl);
        if (response.ok) {
            const data = await response.json();
            this.setState({sales_people: data.sales_person});
        }

        const responsea = await fetch('http://localhost:8090/api/records/')
        if (responsea.ok) {
            const data = await responsea.json()
            this.setState({ sales_records: data.sales_records })
        }
        }

        render() {
            return (
                <>
                <div className="row" style={{marginTop:50}}>
                <div className="offset-3 col-6">
                  <div className="shadow p-4 mt-4">
                    <h1>Sales person history</h1>
                    <form onSubmit={this.handleSubmit} id="create-sa-form">
                      <div className="mb-3">
                        <select onChange={this.handleFieldChange} value={this.state.sales_person} required id="sales_person" name="sales_person" className="form-select">
                          <option value="">Choose a sales person</option>
                          {this.state.sales_people.map(sales_person => {
                                return (
                                <option key={sales_person.employee_number} value={sales_person.id}>
                                    {sales_person.name}
                                </option>
                                );
                            })}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            
            

              <table className='table table-striped' style={{marginTop:50}}>
                <thead>
                    <tr>
                    <th>Sales person</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Sale price</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.sales_records.map(sales_record => {
                    return (
                        <tr key={sales_record.id}>
                        <td>{ sales_record.sales_person.name }</td>
                        <td>{ sales_record.customer.phone_number }</td>
                        <td>{ sales_record.vin.import_vin}</td>
                        <td>{ sales_record.price}</td>
                        </tr>
                    );
                        })}
                </tbody>
                </table>
            
              </>
            );
          }   
        
}

export default SalesHistoryList;