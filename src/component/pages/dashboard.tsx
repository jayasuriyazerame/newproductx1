import './dashboard.css';
import logoone from '../assets/img/product x1-2.png';
import avaterone from '../assets/img/download.png';
import { FaSearch } from "react-icons/fa";
import { Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBoxOpen, faChartLine, faChartPie, faChartSimple, faChevronDown, faDollarSign, faGear, faMoneyBillWave, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from './sidebar';



export default function Dashboard(Props: any) {

    return (
        <>
        <main>
        <Sidebar />

            <Row>
                <Col xs={3} md={3} >
                    <div>
                        <div className="maincontant " style={{
                            marginLeft: "300px",
                            paddingTop: "2%"
                        }}>
                            <h2 className="headingcolor">Quick Links</h2>
                            <hr ></hr>
                            <p className="tablecolour">View New orders</p>
                            <p className="tablecolour"> Review Shipped Orders</p>
                            <p className="tablecolour">Add Another Store</p>
                            <p className="tablecolour">Update Account Details</p>
                            <p className="tablecolour">Add Custom Packages</p>
                            <p className="tablecolour">Order Free USPS Supplies</p>
                            <p className="tablecolour">Latest News & Features</p>
                        </div>
                    </div>

                </Col>

                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "300px", paddingTop: "2%" }}>
                            <h2 className="headingnumber">1</h2>
                            <p> New orders today</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "230px", paddingTop: "2%" }}>
                            <h2 className="headingnumber">Oh</h2>
                            <p> since last order</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "161px", paddingTop: "2%" }}>
                            <h2 className="headingnumber">30158</h2>
                            <p> Unshipped order</p>
                        </div>
                    </div>
                </Col>
                <Col xs={2} md={2} >
                    <div>
                        <div className="maincontantone " style={{ marginLeft: "95px", paddingTop: "2%" }}>
                            <h2 className="headingnumber">0</h2>
                            <p> Order ready to ship</p>
                        </div>
                    </div>
                </Col>


            </Row>
            <Row>
                <Col xs={3} md={3} >
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "-60%", width: "72%", padding: "2%",
                             borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2 className="headingcolor">Download Orders</h2>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <th>Total</th>
                                        <th>1</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td>JustGasTanks.com</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Manual orders</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>classic orders</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Solomota parts</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "56%", marginTop: "-60%", width: "72%", padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2 className="headingcolor">ShippedOrders</h2>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>1</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>JustGasTanks.com</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Manual orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>classic orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Solomota parts</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "25%", marginTop: "-60%", width: "72%",  padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h2 className="headingcolor">Unshipped Orders</h2>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>1</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>JustGasTanks.com</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Manual orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>classic orders</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Solomota parts</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "10%", width: "100%",  padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            {/* <p style={{ float: "right"}}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p> */}
                            <h3  className="headingcolor" style={{ textAlign: "left" }}>Download Orders</h3>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>$12.65</th>
                                </tr>
                                <tr>
                                    <td>Balance</td>
                                    <td>$12.65</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "10%", width: "74%", padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 className="headingcolor" style={{ textAlign: "left" }}>Postage Costs</h3>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th>$0.00</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "200px", marginTop: "10%", width: "74%",  padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>

                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 className="headingcolor" style={{ textAlign: "left" }}>OrderDownload</h3>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <td>!None</td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col xs={3} md={3} >
                    <div>
                        <div style={{
                            marginLeft: "90px", marginTop: "10%", width: "74%",  padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>

                            <p style={{ float: "right" }}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p>
                            <h3 className="headingcolor" style={{ textAlign: "left" }}>Store update</h3>
                            <hr></hr>

                            <table className="my-table">
                                <tbody>
                                    <tr>
                                        <td>!None</td></tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </Col>
            </Row>


            <Row>
                <Col xs={4} md={4} >
                    <div>
                        <div style={{
                            marginLeft: "300px", marginTop: "10%", width: "100%",  padding: "2%",
                            paddingTop: "2%",  borderRadius: "4px",border:" 1px solid #e3e3e3",
                            boxShadow: "inset 0 1px 1px rgba(0,0,0,0.05)",
                        }}>
                            {/* <p style={{ float: "right"}}>Today|<span className="t-span">yesterday</span>|<span className="t-span">mtd</span></p> */}
                            <h3  className="headingcolor" style={{ textAlign: "left" }}>Download Orders</h3>
                            <hr></hr>
                            <table className="my-table">
                            <tbody>
                                <tr>
                                    <th>Most Recent</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td> Stamps.com</td>
                                    <td>	04/19</td>
                                    <td>$250.65</td>
                                </tr>
                                <tr>
                                    <td> Stamps.com</td>
                                    <td>	04/07</td>
                                    <td>$12.65</td>
                                </tr>
                                <tr>
                                    <td> Stamps.com</td>
                                    <td>	04/03</td>
                                    <td>$124.65</td>
                                </tr>
                                <tr>
                                    <td> Stamps.com</td>
                                    <td>	03/30</td>
                                    <td>$45.65</td>
                                </tr>
                                <tr>
                                    <td> Stamps.com</td>
                                    <td>	03/28</td>
                                    <td>$132.79</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col xs={8} md={8} >

                <div className="dashboardpanel" ><div className="well">
  <h4 className='h3h3'>Latest News &amp; Features</h4>
      <div className="news-item">
        <h5 className='h5h5'><a target="_blank">(Apr 20) How to Meet Customer Expectations in 2023</a></h5>
 <p>
          With more and more merchants joining the ecommerce space, your small business needs to stand out. And, the best place to start is by reviewing your current shipping process and […]
The post How to Meet Customer Expectations in 2023 appeared first on ShippingEasy.
   </p>
      </div>
      <div className="news-item">
        <h5 className='h5h5'><a target="_blank">(Apr 07) How to Ship Military Mail</a></h5>
        <p>
          Whether it be gifts from loved ones or direct purchases, Military Mail can lift the spirits of military personnel. USPS Military Mail provides those stationed overseas with an affordable carrier […]
The post How to Ship Military Mail appeared first on ShippingEasy.
        </p>
      </div>
      <div className="news-item">
        <h5 className='h5h5' ><a target="_blank">(Mar 17) The ShippingEasy SpeakEasy March Recap&nbsp;</a></h5>
        <p>          Are you ready to become a shipping pro? In the first session of our webinar series, The ShippingEasy SpeakEasy, we’ll take you through shipping specialty items, including perishable foods, baked […]
The post The ShippingEasy SpeakEasy March Recap&nbsp; appeared first on ShippingEasy.</p>
        
      </div>
  <div className="news-item">
    <h5 className='h5h5'><a target="_blank">See more...</a></h5>
  </div>
</div>
</div>
                    </Col>
                </Row>
</main>
        </>

    )
}
