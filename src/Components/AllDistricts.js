import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import { BsFillAlarmFill } from "react-icons/bs";
export default class AllDistricts extends Component {
    state={
        result:[],
        date:'',
    }
    componentDidMount(){
        axios.get('https://corona-bd.herokuapp.com/district').then(res => this.setState({result:res.data.data,date:res.data.updated_on})).catch(err => console.log('error to get dictrictwise data'));
    }
  render() {
    return (
      <div>
          <center><h2><BsFillAlarmFill /></h2></center>
          <center><p>Update date: {this.state.date}</p></center>
           <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>District Id</th>
          <th>District</th>
          <th>Prev_count</th>
          <th>New Count</th>
          <th>New positive</th>
        </tr>
      </thead>
      <tbody>
        {this.state.result.map(district => 
            <tr>
            <td>{district.id}</td>
            <td>{district.name}</td>
            <td>{district.prev_count}</td>
            <td>{district.count}</td>
            <td>{district.count - district.prev_count}</td>
          </tr>    
        )}
        
      </tbody>
    </Table> </div>
    );
  }
}
