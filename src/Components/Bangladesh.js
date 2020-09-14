import React, { Component } from 'react';
import {Row,Col,Card,ProgressBar} from 'react-bootstrap';
import { FcDataRecovery,FcAcceptDatabase,FcBadDecision } from "react-icons/fc";
import { BiTestTube } from "react-icons/bi";
import { AiFillCalculator } from "react-icons/ai";
import { BsFillAlarmFill,BsFillHeartFill,BsFillPersonPlusFill,BsFillPersonDashFill } from "react-icons/bs";
import axios from 'axios';
export default class Bangladesh extends Component {
    state ={
        result:{
            totaldeath: '',death24:'',totalpositive:'',positive24:'',totalrecovered:'',recovered24:'',totaltest:'',test24:'',date:''
    }
    }
    componentDidMount(){
        axios.get('https://corona-bd.herokuapp.com/stats').then(res=> this.setState({result:{totaldeath:res.data.death.total,death24:res.data.death.last24,totalpositive:res.data.positive.total,positive24:res.data.positive.last24,totalrecovered:res.data.recovered.total,recovered24:res.data.recovered.last24,totaltest:res.data.test.total,test24:res.data.test.last24,date:res.data.updated_on}})).catch(err=>console.log('error to get worlddata'));
    }
  render() {
      
    return (
        <div> 
            <center><h1>Bangladesh</h1></center>
            <center><p>Update at: {this.state.result.date} </p></center>
            <br />
            <Row>
                <Col sm={4}>
                <h2><AiFillCalculator />Total</h2>
                    <Row>
                        
                        <Card  style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title><BiTestTube /> {this.state.result.totaltest}</Card.Title>
                            <Card.Text>
                            Tests
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Row>
                    <Row>
                        
                        <Card  style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title style={{color:'orange'}}><FcDataRecovery /> {this.state.result.totalpositive}</Card.Title>
                            <Card.Text>
                            Confirmed 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Row>
                    <Row>
                        <Card  style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title style={{color:'green'}}><FcAcceptDatabase/> {this.state.result.totalrecovered}</Card.Title>
                            <Card.Text>
                            ReCovered 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Row>
                    <Row>
                        <Card  style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title style={{color:'red'}}><FcBadDecision/> {this.state.result.totaldeath}</Card.Title>
                            <Card.Text>
                            Deaths 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Row>
                </Col>
                <Col sm={8}>
                    <center><h2><BsFillAlarmFill /> Last 24 Hours</h2></center>
                    <Row>
                        
                        <Col >
                        <Card  style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title><BiTestTube /> {this.state.result.test24}</Card.Title>
                            <Card.Text>
                            New Tests
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                    <br />

                    
                <Row>
                <Col sm>
                    <Card  style={{ width: '18rem',height:150 }}>
                    
                        <Card.Body>
                            <Card.Title style={{color:'orange'}}><BsFillPersonPlusFill /> {this.state.result.positive24}</Card.Title>
                            <Card.Text>
                            New Positive
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card  style={{ width: '18rem',height:150  }}>
                    
                        <Card.Body>
                            <Card.Title style={{color:'green'}}><BsFillHeartFill /> {this.state.result.recovered24}</Card.Title>
                            <Card.Text>
                            Newly ReCovered 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card  style={{ width: '18rem',height:150  }}>
                    
                        <Card.Body>
                            <Card.Title style={{color:'red'}}><BsFillPersonDashFill /> {this.state.result.death24}</Card.Title>
                            <Card.Text>
                            Deaths 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <br />
                <div>
                    <h5>In 24 hrs</h5>
                    <ProgressBar>
                        <ProgressBar striped variant="success" label={`${((this.state.result.recovered24*100)/this.state.result.test24).toFixed(2)}%`}  now={(this.state.result.recovered24*100)/this.state.result.test24} key={1} />
                        <ProgressBar variant="warning" label={`${((this.state.result.positive24*100)/this.state.result.test24).toFixed(2)}%`} now={(this.state.result.positive24*100)/this.state.result.test24} key={2} />
                        <ProgressBar striped variant="danger" label={`${((this.state.result.death24*100)/this.state.result.test24).toFixed(2)}%`} now={(this.state.result.death24*100)/this.state.result.test24} key={3} />
                    </ProgressBar>
                    <p style={{color:'red'}}>Death: {((this.state.result.death24*100)/this.state.result.test24).toFixed(2)}%</p>
                    
                    
                    
                    < hr />
                    <h5>Untill Now</h5>
                    <ProgressBar>
                        <ProgressBar striped variant="success" label={`${((this.state.result.totalrecovered*100)/this.state.result.totaltest).toFixed(2)}%`}  now={(this.state.result.totalrecovered*100)/this.state.result.totaltest} key={1} />
                        <ProgressBar variant="warning" label={`${((this.state.result.totalpositive*100)/this.state.result.totaltest).toFixed(2)}%`} now={(this.state.result.totalpositive*100)/this.state.result.totaltest} key={2} />
                        <ProgressBar striped variant="danger" label={`${((this.state.result.totaldeath*100)/this.state.result.totaltest).toFixed(2)}%`} now={(this.state.result.totaldeath*100)/this.state.result.totaltest} key={3} />
                    </ProgressBar>
                    <p style={{color:'red'}}>Death: {((this.state.result.totaldeath*100)/this.state.result.totaltest).toFixed(2)}%</p>
                </div>
                </Col>
            </Row>
        </div>
    );
  }
}
