import React, { Component } from "react";
import { Button, Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './forget-password.css';
import logo from '../assets/img/roundview-logo.png'
import { Form, } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoone from '../assets/img/product x1-2.png';
import { callApi } from "../../utils/api";
import { ToastContainer, toast } from 'react-toastify';
export default class Forgetpassword extends Component {

    state = {
        email:"",
        newemail: "",
        emailError: "",
    };
  onchange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClick = () => {
        // let emailError = "";
        let emailError = "";
   if (!this.state.email) {
            emailError = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            emailError = "Invalid email format";
        }
        if (emailError) {
            this.setState({ emailError });
            return;
        }

   console.log("forget___>>>", this.state);
        let req = {
          email: this.state.email,
        }
        callApi("POST", "forgotpassword.php", req)
          .then(res => res.data)
          .then(response => {
            if (response['success'] == true) {
              toast.success("Mail Send Successful!", {
              });
    
              setTimeout(() => {
                window.location.href = "/new-password";
              }, 1000);
            }  else {
                // alert("Enter Email and Password to Proceed");
                toast.success("Email are not matched!", {hideProgressBar: true,icon:false,autoClose:1000,closeOnClick:false,
                });
              }
          })
          .catch(err => {
            console.log(err);
          });


    }
    render() {
        return (

            
            <div className="maincontent">
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
            left: "50%",
            transform: "translate(-50%, -50%)",width:"270px", height: "100px"}}
/>

                <Row>
                    <Col lg="3" md="3" >

                    </Col>
                    <Col lg="6" md="6">
                        <Card className="border-0">

                            <CardBody className="">
                                <div className="text-left text-muted mb-4">
                                    <img
                                        alt="Logo"
                                        className="image"
                                        width='80'
                                        src={logoone}
                                    />
                                    <h2 className='mb-0'>Forgot your Password? Well, let's fix that!
                                    </h2>
                                    <p className=''>Enter your email address to recover your password
                                    </p>

                                </div>
                                <Form>
                                    <FormGroup className="mb-3">
                                        <Form.Field>
                                            <InputGroup className="input-groupone" >
                                                <div>
                                                    <FontAwesomeIcon icon={faEnvelope} className="fontawesomeone" />
                                                    <Input placeholder='Emailadress' type="email" name="email" className="inputclasstwo" onChange={this.onchange} onFocus={() => this.setState({ emailError: "" })} />
                                                </div>
                                            </InputGroup>
                                            <div className="text-danger">{this.state.emailError}</div>
                                        </Form.Field>

                                    </FormGroup>
                                    <div className="text-left">
                                        <Button className="cta" color="primary" type="submit" onClick={this.handleClick}>
                                            Request password link
                                        </Button>
                                    </div>
                                    <p className="mt-3 mb-0 text-left"> Want to login into your account? <Link to='/' className='text-cta p-l-0'>Login Here</Link></p>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>


        )
    }
}