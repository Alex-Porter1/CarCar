import React from 'react';
import { Link } from 'react-router-dom';

function ModelsColumn(props) {
    const handleDeleteClick = async modelurl =>{
        const url ="http://localhost:8100"+modelurl
        const fetchConfig ={
            method:'delete'
        }

    const response  = await fetch(url,fetchConfig);
    if(response.ok){
        window.location.reload()

    }
}

    return (
        <div className="col">
          {props.list.map(data => {
            return (
               <div key={data.name} className="card mb-3 shadow">
                <img src={data.picture_url} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data.manufacturer}</h5>
                </div>
                <div className="card-footer">
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
            console.log(model)
            const detailUrl = `http://localhost:8100/api/models/${model.id}`;
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
          <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
            <img className="bg-white rounded shadow d-block mx-auto mb-4" src="" alt="" width="600" />
            <h1 className="display-5 fw-bold">Vehicle Models</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
              On he bouche le ma durant ferree. Ici affection fusillade signalant inassouvi situation ces. 
              Ca au capitaine soufflent repousser. 
              Agreerait sonnaient cartouche ii la messieurs annoncait te. Je sons cite prit ah xv. 
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/new" className="btn btn-primary btn-lg px-4 gap-3">Create a vehicle model</Link>
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Vehicle Models Here</h2>
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
