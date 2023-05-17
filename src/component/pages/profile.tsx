import { useNavigate } from 'react-router-dom';
import { Form, } from 'semantic-ui-react';
import './profile.css';
import * as React from 'react'
import { faBell, faEnvelope, faLock, faLockOpen, faMobile, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, InputGroup, Input, Button, Row, Col } from "reactstrap";
import Sidebar from './sidebar';
import { callApi } from '../../utils/api';
import FileBase64 from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';

export default class Profile extends React.Component {


  state = {
    userId: "",
    images: null,
    userEmail: "",
    userName: "",
    userPassword: "",
    userMobilenumber: "",
    userImage: "",
    id: "",
    name: "",
    email: "",
    password: "",
    image: "",
    imageBase64: '',
    files: []
  };

  constructor(props: any) {
    super(props);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.getuserdetails = this.getuserdetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);
    this.handleChangeconfirmpassword = this.handleChangeconfirmpassword.bind(this);
    this.handleChangemobilenumber = this.handleChangemobilenumber.bind(this);

  }

  componentDidMount() {
    let useremail = sessionStorage.getItem("username") ?? "";
    this.setState({ userEmail: useremail });
    this.getuserdetails();
  }

  handleClick = () => {


    console.log("login___>>>", this.state);
    let req = {
      id: this.state.userId,
      name: this.state.userName,
      email: this.state.userEmail,
      password: this.state.userPassword,
      image: this.state.imageBase64,
      mobilenumber: this.state.userMobilenumber,
    }


    callApi("POST", "profileupdate.php", req)
      .then((res) => res.data)
      .then((response) => {
        console.log("response", response);
        if (response['success'] == true) {

        }
        if (response['statusCode'] === 200) {
          let res = response.responseJson;
          console.log("Updated Successfully");
          toast.success("Profile Update Successful!", {
          });
        }
        else {
          toast.success("Please Upload Image", {
            hideProgressBar: true, icon: false, autoClose: 1000, closeOnClick: false,
          });
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  getuserdetails() {
    const { userEmail } = this.state;
    let useremail = sessionStorage.getItem("useremail") ?? "";
    let req = {
      email: useremail,
    };
    callApi("POST", "dashboard.php", req)
      .then((res) => res.data)
      .then((response) => {
        if (response['statusCode'] == 200) {
          let res = response.responseJson.data[0];
          this.setState({ userId: res.id });
          this.setState({ userName: res.name });
          this.setState({ userEmail: res.email });
          this.setState({ userPassword: res.password });
          this.setState({ imageBase64: res.image });
          this.setState({ userMobilenumber: res.mobilenumber })
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  handleImageUpload(event: any) {
    const selectedImage = event.target.files[0];
    this.setState({ images: selectedImage });
  }
  handleChange(event: { target: { value: any; }; }) {
    this.setState({ userName: event.target.value });
  }
  handleChangeemail(event: any) {
    this.setState({ userEmail: event.target.value });
  }
  handleChangepassword(event: any) {
    this.setState({ userPassword: event.target.value });
  }
  handleChangeconfirmpassword(event: any) {
    this.setState({ userConfirmpassword: event.target.value });
  }
  handleChangemobilenumber(event: any) {
    this.setState({ userMobilenumber: event.target.value });
  }


  handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await this.convertBase64(file)
    this.setState({ imageBase64: base64 });
    console.log("base64-------->>>>", base64)
  }


  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  render() {
    const { images, userName,imageBase64 } = this.state;
    return (
      <>
        <main>
          <Sidebar />
          <ToastContainer className={"toastregister"}
              position="top-center"
              autoClose={1000}
              hideProgressBar={true}
              closeOnClick
              rtl={false}
              closeButton={false}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", width: "270px", height: "100px"
              }}
            />
          <div className="profilediv">

            <div className="profilecardone">
              <div className="divone">
              </div>
              <div className="row  onerow">
                <div className="col-md-8" style={{ textAlign: "left" }}>
                  <h2 className="editprofile">Edit Profile</h2>
                </div>


                <div className="col-md-2" >
                  <div className="avatar-cardone">
                    {imageBase64 ? (
                      <img src={imageBase64} alt="Uploaded image" style={{ width: "100%", height: "100%", borderRadius: "50%",marginBottom:"0px" }} />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div className="col-md-2">
                  <h2 className="editprofilebel">   <FontAwesomeIcon icon={faBell} style={{ color: "#f76f45" }} />  </h2>
                </div>
              </div>
            </div>

            <div className="profilecardone">
              <div className="divone">

              </div>
              <div className="row">
                <div className="col-md-4" >
                  <div className="">
                    {/* <h2>hii</h2> */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="avaterdiv">
                    {imageBase64 ? (
                      <img src={imageBase64} alt="" className="profileimg" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="profilecardtwo">
                    <label htmlFor="file-upload" className='fileupload'>
                      <FontAwesomeIcon icon={faPen} style={{ color: "white" }} className="penicon" />
                    </label>
                    <input id="file-upload" type="file" name="image" onChange={(e) => this.handleFileInputChange(e)} style={{ display: "none" }} />
                  </div>
                </div>
                <div className="col-md-4" >

                </div>
              </div></div>


            <div className="profilecard">
              <Form>
                <FormGroup >
                  <Form.Field>
                    <label className="profilelabel">
                      Full Name
                    </label>
                    <InputGroup className="profilegroup">
                      <div className="inputbox">
                        <FontAwesomeIcon icon={faUser} className="fontawesomeperson" />
                        <Input placeholder='Name' type="text" value={this.state.userName} onChange={this.handleChange} name="name" className="inputboxname" />
                      </div>
                    </InputGroup>
                  </Form.Field>
                </FormGroup>
                <FormGroup >
                  <Form.Field>
                    <label className="profilelabel">
                      Email
                    </label>
                    <InputGroup className="input-group">
                      <div className="inputbox">
                        <FontAwesomeIcon icon={faEnvelope} className="fontawesomeperson" />
                        <Input placeholder='Email' type="email" value={this.state.userEmail} onChange={this.handleChangeemail} className="inputboxname" name="email" />
                      </div>
                    </InputGroup>
                  </Form.Field>
                  {/* {errors.email && <p>Please check the Email</p>} */}
                </FormGroup>
                <FormGroup >
                  <Form.Field>
                    <label className="profilelabel">
                      Password
                    </label>
                    <InputGroup className="input-group">
                      <div className="inputbox">
                        <FontAwesomeIcon icon={faLockOpen} className="fontawesomeperson" />
                        <Input placeholder="Password" type="password" value={this.state.userPassword} onChange={this.handleChangepassword} name="password" className="inputboxname" />
                      </div>
                    </InputGroup>
                  </Form.Field>
                </FormGroup>
                <FormGroup >
                  <Form.Field>
                    <label className="profilelabel" >
                      Confirm Password
                    </label>
                    <InputGroup className="input-group">
                      <div className="inputbox">
                        <FontAwesomeIcon icon={faLock} className="fontawesomeperson" />

                        <Input placeholder=" Confirm Password" type="password" onChange={this.handleChangeconfirmpassword} name="confirmpassword" className="inputboxname" />
                      </div>
                    </InputGroup>
                  </Form.Field>
                </FormGroup>
                <FormGroup >
                  <Form.Field>
                    <label className="profilelabel" >
                      Mobile Number
                    </label>
                    <InputGroup className="input-group">
                      <div className="inputbox">
                        <FontAwesomeIcon icon={faMobile} className="fontawesomeperson" />

                        <Input placeholder=" Mobile Number" type="tel" value={this.state.userMobilenumber} onChange={this.handleChangemobilenumber} name="mobilenumber" className="inputboxname" />
                        {/* <Input placeholder=" Mobile Number" type="tel" name="mobilenumber" className="inputboxname" /> */}
                      </div>
                    </InputGroup>
                  </Form.Field>
                </FormGroup>
              </Form>

              <div className="row">
                {/* <div className="col-md-4">
              </div> */}
                <div className="col-md-4">
                  <Button className="sumbitbtnone" color="primary" type="submit"  >
                    Back
                  </Button>
                </div>
                <div className="col-md-4">
                  <Button className="sumbitbtn" color="primary" type="submit" onClick={this.handleClick} >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}