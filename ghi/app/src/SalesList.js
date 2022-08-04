import React from "react"
// import { Link } from 'react-router-dom'


class SalesRecordList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sales_records: []}
    
        // this.deleterecord = this.deleterecord.bind(this);
      }


    async componentDidMount() {
        const response = await fetch('http://localhost:8090/api/records/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ sales_records: data.sales_records })
        }
      }  

    // async deleterecord(record) {
    //     const deleteUrl = `http://localhost:8090/api/record/${record.id}`
    //     const fetchConfig = {
    //       method: "delete"
    //     }
    //     await fetch(deleteUrl, fetchConfig)
    
    //     const idx = this.state.sales_records.indexOf(sales_record)
    //     const updated_records = [...this.state.sales_records]
    //     updated_records.splice(idx, 1)
    //     this.setState({ sales_records: updated_records })
    //   }
    
    render () {
        return(
            <>
            <div className="container" style={{marginTop:50}}>
            <h1>List all sales</h1>
            <table className='table table-striped' >
       <thead>
         <tr>
           <th>Sales person</th>
           <th>Employee Number</th>
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
               <td>{ sales_record.sales_person.employee_number }</td>
               <td>{ sales_record.customer.phone_number }</td>
               <td>{ sales_record.vin.import_vin}</td>
               <td>{ sales_record.price}</td>
             </tr>
           );
             })}
       </tbody>
     </table>
     </div>
                        
     </>
            


        )
    }
}


   
   
export default SalesRecordList;