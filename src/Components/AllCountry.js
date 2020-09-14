import React, { Component } from 'react';
import { Button,ProgressBar } from 'react-bootstrap';
import axios from 'axios';

export default class AllCountry extends Component {
    state={
        countries:[],
        countryname:'',
        countryResult:{
            confirmed:'',recovered:'',deaths:'',date:''
        },
    }
    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api/countries').then(res => this.setState({countries:res.data.countries})).catch(err=> console.log("cannot get countries data"));
    }
    countryclick = name =>{
        this.setState({countryname:name});
    }
    getCountryResult= e =>{
        axios.get(`https://covid19.mathdro.id/api/countries/${this.state.countryname}/`).then(res => this.setState({countryResult:{confirmed:res.data.confirmed.value,recovered:res.data.recovered.value,deaths:res.data.deaths.value,date:res.data.lastUpdate}}))
    }
  render() {
    return (
      <React.Fragment>
          
            <div id="loading" className="cntnr d-none flex-column align-items-center justify-content-center border ml-5 mr-5 p-0 mt-5 shadow">
                <span className="spinner-border text-primary"></span>
                <span className="mt-3">Getting data...</span>
            </div>
            <div id="content" className="cntnr ml-5 mr-5 p-0 mt-5 shadow border border-top-0 border-left-0">
                <div className="row m-0">
                    <div className="col-4 p-0">
                            <div className="border border-bottom-0 p-3 d-flex justify-content-between align-items-center">
                                <h5 className="m-0">Countries</h5>
                                <span id="countries_count" className="badge badge-primary">
                                </span>
                            </div>
                            <div className="pt-0 pr-3 pl-3 pb-3 border boder-bottom-0 border-top-0">
                                <input autocomplete="off" id="search" type="text" placeholder="Search" onChange={(e) => this.setState({countryname:e.target.value})} value={this.state.countryname} className="form-control shadow-sm" />
                                <Button onClick={this.getCountryResult}>Get Result</Button>
                            </div>
                            <div className="border border-top-0 border-bottom-0 bdy">
                                <ul className="list-group" id="countries_list">
                                    {this.state.countries.map(country =>
                                        <li className="list-group-item rounded-0 border-top-0 border-left-0 border-right-0 list-group-item-action" onClick={()=>this.countryclick(country.name)} >{country.name}</li>    
                                    )}
                                </ul>
                            </div>
                    </div>
                    <div className="col-8 p-0 fadex">
                        <div className="border border-left-0 border-right-0 p-3">
                            <h5 className="m-0 data">Date: <i id="current_country" className="text-secondary">{this.state.countryResult.date.slice(0,10)}</i></h5>
                        </div>
                        <div className="bdy p-3">
                            
                            <p className="float-right"><span id="date"></span></p>
                            
                            <h4>Confirmed </h4>
                            
                            <b>Total:</b> <span id="total_confirmed">{this.state.countryResult.confirmed}</span>
                            
                            <hr />
                            
                            <h4>Deaths ☠</h4>
                            
                            <b>Total:</b> <span id="total_deaths" style={{color:'red'}}>{this.state.countryResult.deaths}</span>
                            
                            <hr />
                            
                            <h4>Recovered </h4>
                            
                            <b>Total:</b> <span id="total_recovered" style={{color:'green'}}>{this.state.countryResult.recovered}</span>
                            
                            <hr />
                            
                            <hr />
                            <ProgressBar>
                                <ProgressBar striped variant="success" label={`${((this.state.countryResult.recovered*100)/this.state.countryResult.confirmed).toFixed(2)}%`} now={(parseInt(this.state.countryResult.recovered)*100)/parseInt(this.state.countryResult.confirmed)} key={1} />
                                
                                <ProgressBar striped variant="danger" label={`${((this.state.countryResult.deaths*100)/this.state.countryResult.confirmed).toFixed(2)}%`} now={(parseInt(this.state.countryResult.deaths)*100)/parseInt(this.state.countryResult.confirmed)} key={2} />
                            </ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
      </React.Fragment>
    );
  }
}
