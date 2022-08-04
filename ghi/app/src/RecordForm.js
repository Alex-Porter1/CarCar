import React from 'react';

class RecordForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            automobilevo: [],
            sales_people:[],
            customers:[],
            price:'',
          };
          this.handleFieldChange = this.handleFieldChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.automobilevo;
        delete data.sales_people;
        delete data.customers;

        console.log(data)
        const Url = "http://localhost:8090/api/records/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(Url, fetchConfig);
        if (response.ok) {
            
        // const newRecord = await response.json();
        const cleared = {
            vin: '',
            sales_person:'',
            customer:'',
            price:'',
          };
        this.setState(cleared);
        

        const loadingMessage = document.getElementById('success-message');
        loadingMessage.classList.remove("d-none");
    }


    }



    handleFieldChange(event) {
        const value = event.target.value;
        this.setState({[event.target.id]: value})
        // console.log(this.state)
    }


    async componentDidMount() {
        const autourl = 'http://localhost:8090/api/automobilevo/';
        const response = await fetch(autourl);
        if (response.ok) {
            
            const data = await response.json(); 
            this.setState({automobilevo: data.automobiles});
        }

        const saurl = 'http://localhost:8090/api/salespeople/';
        const saresponse = await fetch(saurl);
        if (saresponse.ok) {
            const data = await saresponse.json();
            this.setState({sales_people: data.sales_person});
        }

        const customerurl = 'http://localhost:8090/api/customers/';
        const customerresponse = await fetch(customerurl);
        if (customerresponse.ok) {
            const data = await customerresponse.json();
            this.setState({customers: data.customers});
                }
        // console.log(this.state)
    }



    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a sale record</h1>
                <form onSubmit={this.handleSubmit} id="create-record-form">

                    <div className="mb-3">
                    <select onChange={this.handleFieldChange} value={this.state.vin} required id="vin" name="vin" className="form-select">
                      <option value="">Choose a automobile</option>
                      {this.state.automobilevo.map(automobile => {
                            return (
                            <option key={automobile.import_vin} value={automobile.import_vin}>
                                {automobile.import_vin}
                            </option>
                            );
                        })}

                    </select>
                  </div>

                  <div className="mb-3">
                    <select onChange={this.handleFieldChange} value={this.state.sales_person} required id="sales_person" name="sales_person" className="form-select">
                      <option value="">Choose a sales person</option>
                      {this.state.sales_people.map(sales_person => {
                            return (
                            <option key={sales_person.employee_number} value={sales_person.employee_number}>
                                {sales_person.name}
                            </option>
                            );
                        })}
                    </select>
                  </div>

                  <div className="mb-3">
                    <select onChange={this.handleFieldChange} value={this.state.customer} required id="customer" name="customer" className="form-select">
                      <option value="">Choose a customer</option>
                      {this.state.customers.map(customer => {
                            return (
                            <option key={customer.phone_number} value={customer.phone_number}>
                                {customer.name}
                            </option>
                            );
                        })}
                    </select>
                  </div>

                  <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.price} placeholder="price" required type="number" name="price" id="price" className="form-control" />
                    <label htmlFor="price">Price</label>
                  </div>

                <button className="btn btn-primary btn-dark">Add</button>
                <p className="alert alert-success d-none mb-0" id="success-message" style={{marginTop:15}}>
                    New record is created!
                </p>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default RecordForm;
