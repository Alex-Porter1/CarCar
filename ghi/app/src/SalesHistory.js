import React from 'react';


class SalesHistoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_records: [],
            sales_people: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }


    async handleFieldChange(event) {
        const value = event.target.value;
        // const personId = value[value.length-1]
        // console.log(personId)
        const url = `http://localhost:8090/api/personalsalerecord/${value}/`;
        const response = await fetch(url);
        
        if (response.ok) {
            const data_records = await response.json();
            this.setState({data_records: data_records.records});
        };
    };

    
    async componentDidMount() {
        const url_people = "http://localhost:8090/api/salespeople/";
        const response_people = await fetch(url_people);
        if (response_people.ok) {
            const data_people = await response_people.json();
            this.setState({sales_people: data_people.sales_person});
        };

        const url_records = "http://localhost:8090/api/records/";
        const response_records = await fetch(url_records);
        if (response_people.ok) {
            const data_records = await response_records.json();
            console.log(data_records)
            this.setState({data_records: data_records.sales_records});
        }
    }


    render() {
        return (
            <div>
                <h2 className="mt-5"><b>Sales History</b></h2>
                <select value={this.state.sales_person} onChange={this.handleFieldChange} required id="sales_person" name="sales_person" className="form-select mt-3">
                    <option value="">Choose a salesperson</option>
                    {this.state.sales_people.map(sales_person => {
                        return (
                            <option key={sales_person.id} value={sales_person.id}>
                                {sales_person.name}
                            </option>
                        );
                    })}
                </select>

                <div>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>Sales Person</th> 
                                <th>Customer</th>
                                <th>VIN</th>
                                <th>Sale price</th>
                            </tr>
                        </thead>
                        <tbody id="sales_person_details">
                            {this.state.data_records.map (data => {
                                return(
                                    <tr key={data.sales_person.id}>
                                        <td>{data.sales_person.name}</td>
                                        <td>{data.customer.name}</td>
                                        <td>{data.vin.import_vin}</td>
                                        <td>{data.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default SalesHistoryList;