import React from 'react';

class CustomerForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone_number:'',
            address:'',
          };
          this.handleFieldChange = this.handleFieldChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        const Url = "http://localhost:8090/api/customers/";
       
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        
        
        const response = await fetch(Url, fetchConfig);
        if (response.ok) {
        const newCustomer = await response.json();
        console.log(newCustomer);

        const cleared = {
            name: '',
            phone_number:'',
            address:'',
          };
        this.setState(cleared);
        const loadingMessage = document.getElementById('success-message');
        loadingMessage.classList.remove("d-none");
    }
}

handleFieldChange(event) {
    const value = event.target.value;
    this.setState({[event.target.id]: value})
}
    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a potential customer</h1>
                <form onSubmit={this.handleSubmit} id="create-sa-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.phone_number} placeholder="phone_number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                    <label htmlFor="name">Phone Number</label>
                  </div>
                   <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                    <label htmlFor="address">Address</label>
                  </div>
                  <button className="btn btn-primary btn-dark">Add</button>
                  <p className="alert alert-success d-none mb-0" id="success-message" style={{marginTop:15}}>
                    New customer is created!
                </p>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default CustomerForm;