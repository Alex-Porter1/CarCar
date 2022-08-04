import React from 'react';

class SAForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_number:'',
          };
          this.handleFieldChange = this.handleFieldChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        const SAUrl = "http://localhost:8090/api/salespeople/";
       
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        
        
        const response = await fetch(SAUrl, fetchConfig);
        if (response.ok) {
        const newSA = await response.json();
        console.log(newSA);

        const cleared = {
            name: '',
            employee_number:'',
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
                <h1>Add a sales person</h1>
                <form onSubmit={this.handleSubmit} id="create-sa-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFieldChange} value={this.state.employee_number} placeholder="employee_number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                    <label htmlFor="name">Employee Number</label>
                  </div>
                  <button className="btn btn-primary btn-dark">Add</button>
                  <p className="alert alert-success d-none mb-0" id="success-message" style={{marginTop:15}}>
                    New sales person is created!
                </p>
                </form>
              </div>
            </div>
          </div>
        );
      }
}

export default SAForm;