import React, { Component } from "react";
import { Button, Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";

import { Form, } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoone from '../assets/img/product x1-2.png';
import './new-password.css' ;
export default class Newpassword extends Component {
    state = {
        password: "",
        passwordError: "",
        confirmpasswordError: "",
        confirmpassword:"",
      };


      onchange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleClick = () => {
        // let emailError = "";
        let passwordError = "";
    let confirmpasswordError="";
      
    
        if (!this.state.password) {
          passwordError = "Password is required";
        }
    

          if(!this.state.confirmpassword){
            confirmpasswordError="confirm password is required";
        }
          if (passwordError || confirmpasswordError ) {
            this.setState({  passwordError, confirmpasswordError });
            return;
          }


    }


    render() {
        return (
            <div className="passwordcontent">
               
                        <Card className="passwordcard">

                            <CardBody className="">
                                <div className="">
                                    <img
                                        alt="Logo"
                                        className="image"
                        width='80'
                                        src={logoone}
                                    />
                                    <h2 className='heading1'>Create your Password? Well, let's fix that!
                                    </h2>
                                    <p className='parapassword'>Enter your Password and  Confirm password
                                    </p>

                                </div>
                                <Form>
                                    <FormGroup className="">
                                        <Form.Field>
                                            <InputGroup className="input-groupone" >
                                                <div>
                                                   
                                                <FontAwesomeIcon icon={faLockOpen} className="fontawesomeone" />
                              <Input placeholder="Password" type="password" name="password"className="inputclasstwo"  onChange={this.onchange} onFocus={() => this.setState({ passwordError: "" })}/>
                                                </div>
                                            </InputGroup>
                                            <div className="text-danger">{this.state.passwordError}</div>
                                        </Form.Field>

                                    </FormGroup>
                                    <FormGroup className="">
                                        <Form.Field>
                                            <InputGroup className="input-groupone" >
                                                <div>
                                                   
                                                <FontAwesomeIcon icon={faLock} className="fontawesomeone" />
                              <Input placeholder="Confirm Password" type="password" name="confirmpassword" className="inputclasstwo"   onChange={this.onchange} onFocus={() => this.setState({ confirmpasswordError: "" })}/>
                                                </div>
                                            </InputGroup>
                                            <div className="text-danger">{this.state.confirmpasswordError}</div>
                                        </Form.Field>

                                    </FormGroup>
                                    <div className="text-left">
                                        <Button className="cta" color="primary" type="submit" onClick={this.handleClick}>
                                            Update Your Password
                                        </Button>
                                    </div>
                                    {/* <p className="mt-3 mb-0 text-left"> Want to login into your account? <Link to='/' className='text-cta p-l-0'>Login Here</Link></p> */}
                                </Form>

                            </CardBody>
                        </Card>
               
            </div>


        )
    }
}