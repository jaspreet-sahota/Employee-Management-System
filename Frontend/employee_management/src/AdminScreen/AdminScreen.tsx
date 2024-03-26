import React, { FunctionComponent, useState } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./AdminScreen.css";

const AdminScreen: FunctionComponent = () => {
  const location = useLocation();
  const { state } = location;


  return (
    <main>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a className="d-flex align-items-center mb-3 mb-0 me-md-auto text-dark text-decoration-none" href="/">
            <span className="fs-4">COE892-Employee-Management-Project</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-nav-item">
              <a className="nav-link" href="/">Logout</a>
            </li>
          </ul>
        </header>
      </div>
      <div className="container-fluid text-center">
          <div className="row">
            <div className="card col-3">
              <img className="card-img-top" 
                    data-src="holder.js/100px180/?text=Image cap" 
                    alt="Image cap [100%x180]" 
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e72f21fcd%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e72f21fcd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41489028930664%22%20y%3D%2296.24000034332275%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" 
                    data-holder-rendered="true"/>
              <div className="card-body">
                <h5 className="card-title">{state.username}</h5>
                <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
            <div className="col border rounded mx-1">
              <div className="table-row row border rounded m-1 overflow-y-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Employee #</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Add Shifts</th>
                      <th scope="col">Remove Shifts</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>123456789</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark.otto@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  <tr>
                    <td>11112222</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob.thornton@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  <tr>
                    <td>33334444</td>
                    <td>Colin</td>
                    <td>Page</td>
                    <td>colin.page@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  <tr>
                    <td>33334444</td>
                    <td>Colin</td>
                    <td>Page</td>
                    <td>colin.page@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  <tr>
                    <td>33334444</td>
                    <td>Colin</td>
                    <td>Page</td>
                    <td>colin.page@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  <tr>
                    <td>33334444</td>
                    <td>Colin</td>
                    <td>Page</td>
                    <td>colin.page@gmail.com</td>
                    <td>
                      <a href="/">Add Shifts</a>
                    </td>
                    <td>
                      <a href="/">Remove Shifts</a>
                    </td>
                  </tr>
                  </tbody>
                </table>


              </div>
              <div className="row border rounded mx-1">
                <h1>HELLO WORLD</h1>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default AdminScreen;
