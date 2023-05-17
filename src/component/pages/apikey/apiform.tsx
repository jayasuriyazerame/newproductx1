import React, { Component } from 'react';
import Sidebar from '../sidebar';
import '../products.css';
import { Button } from 'reactstrap';
import { callApi } from "../../../utils/api";
import { ToastContainer, toast } from 'react-toastify';

export default class Apiform extends React.Component {
  state = {
    website_name:"",
    website_url:"",
    websitenameError:"",
    urlError:"",
  };

  onchange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickone = () => {

    let websitenameError = "";
    let urlError = "";

    if (!this.state.website_name) {
      websitenameError = "Name is required";
    }
    if (!this.state.website_url) {
      urlError = "Url is required";
    }
    if (websitenameError || urlError) {
      this.setState({ websitenameError, urlError });
      return;
    }
    console.log("login___>>>", this.state);
    let req = {
      website_name: this.state.website_name,
      website_url: this.state.website_url,
    }
    callApi("POST", "apipage.php", req)
      .then(res => res.data)
      .then(response => {
        console.log("response", response);
        if (response['success'] == true) {
          console.log("hello");
          toast.success("Updated successful!", {
          });

          setTimeout(() => {
         
            window.location.href = "/api-integration"; 
          }, 1000);
        }
        else {

        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {

    return (
      <>
        <main>
        <ToastContainer className={"toastregister"}
  position="top-center"
  autoClose={1000}
  hideProgressBar={true}
  newestOnTop={false}
  closeButton={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  style={{ position: "fixed",
            top: "50%",
            left: "57%",
            transform: "translate(-50%, -50%)",width:"270px", height: "100px"}}
/>

          <Sidebar />
          <div className="profilediv">

            <div className="profilecardone">
              <div className="divone"></div>
              <div className="row  onerow">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                  <h2 className="editprofile">API Integration Details</h2>
                </div>

              </div>
              <div className='divone'>
              </div>
              <div className='center'>
              <div className='row'>
                <div className='col-md-4'> </div>
                <div className='col-md-6'>
                <div className=''>
                <div className='form-wrapone'>
                <div className="profilecarddiv">
                  <form className="ui form">

                    <div className="mb-34">
                      <div className="field">
                        <label className="profilelabel">Website Name:</label>
                        <div className="profilegroup input-group">
                          <div className="inputboxone">
                            <input type="text" name="website_name" id="websitename" required className="inputboxnametwo form-control" onChange={this.onchange} onFocus={() => this.setState({ websitenameError: "" })}  />
                            <div className="text-danger">{this.state.websitenameError}</div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="mb-34">
                      <div className="field">
                        <label className="profilelabel">Website URL:</label>
                        <div className="profilegroup input-group">
                          <div className="inputboxone">
                            <input type="text" name="website_url" id="websiteurl" required className="inputboxnametwo form-control" onChange={this.onchange}  onFocus={() => this.setState({urlError: "" })} />
                            <div className="text-danger">{this.state.urlError}</div>
                          </div>
                        
                        </div>
                      </div>
                    </div>               
                    <Button className="sumbitbtntwo" color="primary" onClick={this.handleClickone} >Next</Button>
                  </form>
                </div>
              </div>
              </div>
                </div>
                <div className='col-md-2'></div>
              </div>
</div>
            </div>
          </div>
        </main>
      </>
    )
  }
}