import React from 'react';
import { Link } from 'react-router-dom';

function ModelsColumn(props) {

    return (
        <div className="col">
          {props.list.map(data => {
            
            return (
               <div key={data.href} className="card mb-3 shadow">
                <img src={data.picture_url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h6 className="card-title">{data.manufacturer_id}</h6>
                </div>
              </div>
            );
          })}
        </div>
    
      );

}

class ModelsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modelColumns: [[], [], []],
      };
    }
  
    async componentDidMount() {
      const url = 'http://localhost:8100/api/models/';
  
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          const requests = [];
          for (let model of data.models) {
            // console.log(model)
            const detailUrl = `http://localhost:8100/api/models/${model.id}/`;
            requests.push(fetch(detailUrl));
          }
          const responses = await Promise.all(requests);
          const modelColumns = [[], [], []];
          let i = 0;
          for (const modelResponse of responses) {
            if (modelResponse.ok) {
              const details = await modelResponse.json();
              modelColumns[i].push(details);
              
              i = i + 1;
              if (i > 2) {
                i = 0;
              }
            } else {
              console.error(modelResponse);
            }
          }
          this.setState({modelColumns: modelColumns});
          
        }
        
      } catch (e) {
        console.error(e);
      }
    }
  
    render() {
      return (
        <>
          <div className="px-4 py-5 my-5 mt-0 text-center">
            <img className="bg-white rounded shadow d-block mx-auto mb-4" src="" alt="" width="600" />
            <h1 className="display-5 fw-bold">Vehicle Models</h1>
            <div className="col-lg-6 mx-auto">
            
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                {/* <Link to="/models/new" className="btn btn-primary btn-lg px-4 gap-3">Create a vehicle model</Link> */}
              </div>
            </div>
          </div>
          <div className="container">
           
            <div className="row">
              {this.state.modelColumns.map((modelList, index) => {
                return (
                    
                  <ModelsColumn key={index} list={modelList} />
                );
              })}
            </div>
          </div>
        </>
      );
    }
  }
  


export default ModelsList;

