import React, { Component } from 'react';
import {Row,Col,Card,ProgressBar} from 'react-bootstrap';
import axios from 'axios';
import { FcDataRecovery,FcAcceptDatabase,FcBadDecision } from "react-icons/fc";
export default class WorldCard extends Component {
    state={
        result:{
            confirmed:'',recovered:'',deaths:'',date:''
        },
    }
    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api').then(res=> this.setState({result:{confirmed:res.data.confirmed.value,recovered:res.data.recovered.value,deaths:res.data.deaths.value,date:res.data.lastUpdate}})).catch(err=>console.log('error to get worlddata'));
    }
    render() {
        return (
        <div>
            <center><h2>WorldWide Results</h2></center>
            <center><p>Date: {this.state.result.date.slice(0,10)} Update Time:{this.state.result.date.slice(11,16)}</p></center>
                <Row >
                    <Col sm>
                    <Card  style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title><FcDataRecovery />{this.state.result.confirmed}</Card.Title>
                            <Card.Text>
                            Confirmed 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card  style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title style={{color:'green'}}><FcAcceptDatabase/>{this.state.result.recovered}</Card.Title>
                            <Card.Text>
                            Recovered
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card  style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title style={{color:'red'}}><FcBadDecision/>{this.state.result.deaths}</Card.Title>
                            <Card.Text>
                            Deaths
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <hr />
                <ProgressBar>
                                <ProgressBar striped variant="success" label={`${((this.state.result.recovered*100)/this.state.result.confirmed).toFixed(2)}%`} now={(parseInt(this.state.result.recovered)*100)/parseInt(this.state.result.confirmed)} key={1} />
                                
                                <ProgressBar striped variant="danger" label={`${((this.state.result.deaths*100)/this.state.result.confirmed).toFixed(2)}%`} now={(parseInt(this.state.result.deaths)*100)/parseInt(this.state.result.confirmed)} key={2} />
                            </ProgressBar>
        </div>
        );
    }
    }
