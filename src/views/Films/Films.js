import React,{Component} from 'react';
import {Table, Button} from 'reactstrap';

export default class Films extends Component {

  render() {
    return (
      <div className="container">
        <br/>
        <Table striped bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Release Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>A New Hope</td>
              <td>George Lucas</td>
              <td>Gary Kurtz, Rick McCallum</td>
              <td>1977-05-25</td>
              <td><Button color="danger">Action</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
