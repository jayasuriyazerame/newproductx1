import { Link } from "react-router-dom";
import React, { Component } from "react";
import './forget-password';
import { useNavigate } from 'react-router-dom';
import './registration.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Button, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logoone from '../assets/img/product x1-2.png';
import mainlogo from '../assets/img/abm-login-image-2.png';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from "react-hook-form";
import { Form, } from 'semantic-ui-react';
import { callApi } from "../../utils/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };
  onchange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    let emailError = "";
    let passwordError = "";
    let nameError = "";
    if (!this.state.email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      emailError = "Invalid email format";
    }
    if (!this.state.password) {
      passwordError = "Password is required";
    }
    if (!this.state.name) {
      nameError = "name is required";
    }
    if (emailError || passwordError || nameError) {
      this.setState({ emailError, passwordError, nameError });
      return;
    }
    console.log("login___>>>", this.state);
    let req = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    callApi("POST", "register.php", req)
      .then(res => res.data)
      .then(response => {
        console.log("response",response);
        if (response['success'] == true) {
          
          toast.success("Registration successful!", {
          });

          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
        else {
          // alert("Enter Email and Password to Proceed");
          toast.success("Enter Email and Password to Proceed", {
            hideProgressBar: true, icon: false, autoClose: 1000, closeOnClick: false,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <main>
 <div className="main">
  <div className="container">
            <Row style={{ height: "500px" }}>
              <Col xs={6} md={6} style={{ background: " #fff " }}>
                <div className="p-4 pl-6 pr-6 ">
                  <CardBody className="">
                    <div className="text-left text-muted mb-3" style={{ marginLeft: "0%", paddingTop: "0px", paddingBottom: "0px" }}>
                      <img
                        alt="Logo"
                        className="image"
                        width='80'
                        src={logoone}
                      />
                    </div>
                    <Form >

                      <FormGroup className="mb-3">
                        <Form.Field>
                          <label className="label" style={{ marginTop: "-25px" }}>
                            Your Name
                          </label>
                          <InputGroup className="input-group">
                            <div>
                              <FontAwesomeIcon icon={faUser} className="fontawesome" />
                              <Input placeholder='Name' type="text" name="name" className="inputclass" onChange={this.onchange} onFocus={() => this.setState({ nameError: "" })} />
                            </div>
                          </InputGroup>
                          <div className="text-danger">{this.state.nameError}</div>
                        </Form.Field>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Form.Field>
                          <label className="label">
                            Your Email
                          </label>
                          <InputGroup className="input-group">
                            <div>
                              <FontAwesomeIcon icon={faEnvelope} className="fontawesome" />
                              <Input placeholder='Email' type="email" name="email" className="inputclass" onChange={this.onchange} onFocus={() => this.setState({ emailError: "" })} />
                            </div>
                          </InputGroup>
                          <div className="text-danger">{this.state.emailError}</div>
                        </Form.Field>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Form.Field>
                          <label className="label" >
                            Password
                          </label>
                          <InputGroup className="input-group">
                            <div>
                              <FontAwesomeIcon icon={faLockOpen} className="fontawesome" />
                              <Input placeholder="Password" type="password" name="password" className="inputclass" onChange={this.onchange} onFocus={() => this.setState({ passwordError: "" })} />
                            </div>
                          </InputGroup>
                          <div className="text-danger">{this.state.passwordError}</div>
                        </Form.Field>
                      </FormGroup>

                      <div className=" custom-control-alternative custom-checkbox">
                        <Button className=" cta cta-fullwidth " color="primary" type="submit" onClick={this.handleClick}>
                          Create your account
                        </Button>
                      </div>
                    </Form>
                    <p className="mt-3 mb-0 text-center" style={{ marginRight: "30%" }}> Already have an account? <a className="text-cta" href="/"> Login Here </a></p>
                  </CardBody>
                </div>
              </Col>
              <Col lg="6" md="6" className="text-center bg-blue p-4">
                <img alt="Logo"
                  className="img-fluid"
                  width='400px' src={logoone} style={{ marginTop: "-50px" }} />
                <h1 style={{ marginTop: "0%" }}> Product X1</h1>
                <p>Access the lowest USPS rates in the industry and seriously discounted UPS rates, easy shipping automation, and award-winning support!</p>
              </Col>
            </Row>
            <ToastContainer className={"toastregister"}
              position="top-center"
              autoClose={1000}
              hideProgressBar={true}
              // newestOnTop={false}
              closeOnClick
              rtl={false}
              closeButton={false}
              // pauseOnFocusLoss
              // draggable
              // pauseOnHover
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", width: "270px", height: "100px"
              }}
            />

          </div>
        </div>
      </main>
    )

  }
}

// consumerkryError: "",
// consumersecretError: "",
// // accesstokenError: "",
// tokensecretError: "",
// storeidError: "",
// producturlsuffixError: "",
// categoryurlsuffixError: "",
// categorypathproducturlError: "",
// excludeemaildomainsError: "",