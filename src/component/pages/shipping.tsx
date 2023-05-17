import React, { Component } from 'react';
import Sidebar from './sidebar';
import './shipping.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
// import { Dropdown } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, DropdownButton } from 'react-bootstrap';
import { Input } from 'reactstrap';

class Shipping extends Component {
    render() {
        return (
            <>
                <main>
                    <Sidebar />
                    <div className="shippingcontent">
                        <div className='shippingcontainer' style={{ marginLeft: "200px" }}>
                            <div className='shippingflexcontent'>
                                <div className='row'>
                                    <div className='col-md-2' >
                                        <div style={{ display: "flex", marginLeft: "75px" }}>
                                            <button className='syncbutton'>   <FontAwesomeIcon icon={faSyncAlt} /> </button>
                                            <DropdownButton id="dropdown-basic-button" title="" className='dropdownbuttonone'>
                                                <Dropdown.Item href="#/action-1"><span className="sync-connect-store">
                                                    <i className="fa fa-plus-square-o se-icon  fa-lg  plusicon"></i>
                                                    <a data-pendo-id="/orders#sync-connect-store" href="/settings/stores/new">Add a Sales Channel</a>
                                                    <span>
                                                    </span></span></Dropdown.Item>

                                            </DropdownButton>
                                        </div>
                                    </div>
                                    <div className='col-md-1' >
                                        <Button variant="outline-secondary" className='shipmentbutton'>Create Shipment</Button>
                                    </div>
                                    <div className='col-md-1 ' >
                                        <Button variant="outline-secondary" className='shipmentbuttonone'>Groups as Batch</Button>
                                    </div>
                                    <div className='col-md-1'>
                                        <DropdownButton id="dropdown-basic-buttonone" title="Pick&Pack" className=''>
                                            <Dropdown.Item href="#/action-1">Print Pick List</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Print Pick List And Create Shipment</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Print Pick List And Group as Batch</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">  Print Pick List - All Orders</Dropdown.Item>
                                            <Dropdown.Item href="#/action-5"> Print Packing Slips </Dropdown.Item>
                                            <Dropdown.Item href="#/action-6">Print Packing Slips - All Orders </Dropdown.Item>
                                            <Dropdown.Item href="#/action-7"> Export Pick List CSV - All Orders </Dropdown.Item>


                                        </DropdownButton>
                                    </div>
                                    <div className='col-md-1 ' >
                                        <Button variant="outline-secondary" className='shipmentbuttontwo'>Buy Labels</Button>
                                    </div>
                                    <div className='col-md-1'>
                                        <DropdownButton id="dropdown-basic-buttontwo" title="More" className=''>
                                            <Dropdown.Item href="#/action-1">Arrange Columns</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"> Split Order</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Split Order Items</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">Combine Orders</Dropdown.Item>
                                            <Dropdown.Item href="#/action-5">Mark as Shipped </Dropdown.Item>
                                            <Dropdown.Item href="#/action-6">Remove Order</Dropdown.Item>
                                            <Dropdown.Item href="#/action-7"> Edit Weight </Dropdown.Item>
                                            <Dropdown.Item href="#/action-8"> Add Order Tags </Dropdown.Item>
                                            <Dropdown.Item href="#/action-9"> Add Contact Tags </Dropdown.Item>
                                            <Dropdown.Item href="#/action-10">  Categorize</Dropdown.Item>
                                        </DropdownButton>
                                    </div>


                                    <div className='col-md-4'>
                                        <DropdownButton id="dropdown-basic-buttonthree" title="All Orders" className=''>
                                            <Dropdown.Item href="#/action-1">All Orders</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div style={{
                                            display: "flex",
                                            marginTop: "40px"
                                        }}>

                                            <Input type="text" placeholder="Search order history" className='searchonebox' />
                                            <button className='syncbutton'>   <FontAwesomeIcon icon={faSearch} /> </button>
                                            <DropdownButton id="dropdown-basic-button" title="" className='dropdownbuttonone'>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                    <div className='col-md-7' style={{
                                        display: "flex",
                                        justifyContent: "flex-start"
                                    }}>
                                        <div className='divdropdown'>
                                            <div>
                                                <div className='filterspan'>Filters:</div>
                                            </div>
                                            <div className='filtersdropdown'>
                                                <div>
                                                    <a>  <DropdownButton id="dropdown-basic-buttonthreestore" title="Store" className=''>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton></a>
                                                </div>
                                                <div>
                                                    <DropdownButton id="dropdown-basic-buttonthreesku" title="SKU" className=''>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div>
                                                    <DropdownButton id="dropdown-basic-buttonfour" title="Destination" className=''>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div>
                                                    <DropdownButton id="dropdown-basic-buttonthreeqty" title="QTY" className=''>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                                <div>
                                                    <DropdownButton id="dropdown-basic-buttonfive" title="Date Range" className=''>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div col-md-2>
                                        <div className="se-input-controls">
                                            <div className="se-select__wrapper">
                                                <div className="se-select__input-wrapper se-select__input-wrapper--disabled" data-pendo-id="/orders#filter-views-list">
                                                    <span className="se-select__input-value se-select__prompt">Saved Filters</span>
                                                    <i className="fa fa-chevron-down se-select__dropdown-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-12'>


                                        <div className="orders-content" data-target="orders-content">

                                            <table className='firsttable'>
                                                <thead className='tableheadtable'>
                                                    <tr>
                                                        <th className=''>
                                                            <input type="checkbox" />
                                                        </th>
                                                        <th>  <a href="#" className="">Store</a></th>
                                                        <th className="">
                                                            <a href="#" className="">Order Number</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className="">Date</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className="">$Shipping</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className="">QTY</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className="">Item Name</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className=""> SKU</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className=""> Weight</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className=""> Recipient</a>
                                                        </th>
                                                        <th className="">
                                                            <a href="#" className=""> Req.Service</a>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">SoloMotoParts</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td></td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                                <tbody className='tablebodyone'>
                                                    <tr className="">
                                                        <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                                                        </td>
                                                        <td><a href="/inventory/products/43295551">Manual Orders</a> </td>
                                                        <td>112-547586-876</td>
                                                        <td>Apr 28</td>
                                                        <td>$0.00</td>
                                                        <td>1</td>
                                                        <td>Item</td>
                                                        <td></td>
                                                        <td>1 Oz</td>
                                                        <td>alidad</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>












                            </div>
                        </div>

                    </div>
                </main>
            </>
        )
    }
}
export default Shipping;