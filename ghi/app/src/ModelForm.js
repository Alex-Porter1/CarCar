import React from 'react';

class ModelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      picture_url: "",
      manufacturers: []
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturers;
    console.log(data);

    const Url = 'http://localhost:8100/api/models/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(Url, fetchConfig);
    console.log(response)
    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel);

      const cleared = {
        name: "",
        picture_url: "",
        manufacturer: ""
      };
      this.setState(cleared);

      const formTag = document.getElementById('create-model-form');
      const loadingMessage = document.getElementById('success-message');
      loadingMessage.classList.remove("d-none");
    }
  }

  handleFieldChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value })
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  render() {
    return (

      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>New Model</h1>
            <form onSubmit={this.handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleFieldChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleFieldChange} value={this.state.picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="picture_url">Picture url</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleFieldChange} value={this.state.manufacturer_id} required id="manufacturer_id" name="manufacturer_id" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}

                </select>
              </div>
              <button className="btn btn-primary btn-dark">Add</button>
              <p className="alert alert-success d-none mb-0" id="success-message" style={{ marginTop: 15 }}>
                New model is created!
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default ModelForm