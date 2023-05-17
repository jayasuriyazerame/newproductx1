import './dashboard.css';
import logoone from '../assets/img/product x1-2.png';
import avaterone from '../assets/img/download.png';
import { FaSearch } from "react-icons/fa";
import { Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxOpen, faChartLine, faChartPie, faChartSimple, faChevronDown, faDollarSign, faGear, faMailBulk, faMoneyBillWave, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/api";
import { log } from 'console';


export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setuserName] = useState("");
     const [imageBase64,setuserImage] = useState("",)


    useEffect(() => {
        let useremail = sessionStorage.getItem("username") ?? "";
        setUserEmail(useremail);
        console.log("username",useremail);
        getuserdetails();
    }, []);

    function toggleOpenon() {
        setIsOpen(!isOpen);         
        console.log(0);
    }
    function getuserdetails() {
        console.log("username-------",userEmail);
        let useremail = sessionStorage.getItem("useremail") ?? "";
        
        
        let req = {

            email: useremail,

        }
        callApi("POST", "dashboard.php", req)
            .then(res => res.data)
            .then(response => {
                console.log("sidebar response",response.data);
                if (response['statusCode'] == 200) {
                    let userdetails = response.responseJson.data[0];
                    console.log("sakthii1234-----",userdetails.name);
                    let username = userdetails.name;
                    let userimage = userdetails.image;
                    setuserName(username);
                    setuserImage(userimage);

                }
                else {
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

return (
    <><div>

        <nav>
            <ul>

                <li>
                    <img style={{
                        width: "125px",
                        height: "105px"
                    }} src={logoone} />
                </li>
                <li>
                    <FormGroup>

                        <InputGroup >
                            <div style={{ textAlign: "end" }}>
                                <FaSearch style={{}} />
                                <Input type="text" placeholder="Search order history" style={{ marginTop: "-27px", marginLeft: "12px" }} />
                            </div>
                        </InputGroup>

                    </FormGroup>
                </li>
                <li>
                    <a href="/dashboard">
                        <span className="icon">   <FontAwesomeIcon icon={faChartLine} /></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">  <FontAwesomeIcon icon={faDollarSign} /></span>
                        <span className="title">Carrier Funds</span>
                    </a>
                </li>
                <li>
                    <a href="/shipping">
                        <span className="icon">   <FontAwesomeIcon icon={faMoneyBillWave} /></span>
                        <span className="title">Shipping</span>
                    </a>
                </li>
                <li>
                    <a href="/supplies">
                        <span className="icon">  <FontAwesomeIcon icon={faMailBulk} /></span>
                        <span className="title">Supplies</span>
                    </a>
                </li>
                <li>
                    <a href="/tracking">
                        <span className="icon"> <FontAwesomeIcon icon={faShippingFast} /></span>
                        <span className="title">Tracking</span>
                    </a>
                </li>
                <li>
                    <a href="/products">
                        <span className="icon"> <FontAwesomeIcon icon={faBoxOpen} /></span>
                        <span className="title">Products</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">  <FontAwesomeIcon icon={faChartSimple} /></span>
                        <span className="title">Marketing</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon">  <FontAwesomeIcon icon={faChartPie} /></span>
                        <span className="title">Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faGear} /></span>
                        <span className="title">Settings</span>
                    </a>
                </li>
                <footer>
                    <Row className="rowone" style={{ marginTop: "40px" }}>
                        <Col xs={4} md={4}>
                            <div className="avatar-card">
                          
                    {imageBase64 ? (
                      <img src={imageBase64} alt="Uploaded image" style={{ width: "100%", height: "100%", borderRadius: "50%",marginBottom:"0px"}} />
                    ) : (
                      <div></div>
                    )}
                 
                            </div>
                        </Col>
                        <Col xs={6} md={6}  >
                            <div className="profile-card" >
                                <div style={{ display: "flex" }} >
                                    <h5 onClick={toggleOpenon}>{userName}</h5>
                                    <div onClick={toggleOpenon}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                    <div style={{ paddingLeft: "15px" }}>
                                        <FontAwesomeIcon icon={faBell} />
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className="profile-card-content">
                                        <div><label> <a href="/profile"> Profile </a></label></div>
                                        <div><label><a href="/api-page">Integration</a></label></div>
                                        <div><label> <a href="/"> Logout</a></label></div>
                                    </div>
                                )}
                            </div>

                        </Col>
                        <Col xs={2} md={2}>

                        </Col>
                    </Row>
                </footer>
            </ul>
        </nav>
    </div>
    </>
)
}