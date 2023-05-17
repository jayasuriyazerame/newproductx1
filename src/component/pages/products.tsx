import React, { Component } from 'react';
import Sidebar from './sidebar';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { Dropdown } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';

class Products extends Component {
  render() {
    return (
      <>
        <main>
          <Sidebar />



          <div className="productscontent">
            <div className="wrapper">
              <div className='routemodule'>
                <div>
                  <section style={{ width: "100%" }}>
                    <div className="row-fluid">
                      <div className="span12">
                        <ul className="breadcrumbone">
                          <li style={{ textAlign: "left" }}><a href="/inventory/">Product</a><span className="divider">/</span><span className="active">Product Catalog</span></li>
                        </ul>
                      </div>
                    </div>  </section>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="input-append new-input-append">
                  <input
                    type="text"
                    className="keywordsearch"
                    placeholder="Keyword Search"
                    name="filter[keyword]"
                    value=""
                  // fdprocessedid="iox0y"
                  />
                </div>
              </div>
              <div className="col-md-6">

                <ul className="batchactions" style={{ display: "flex", gap: "20px" }}>
                  <li className='liclass'>
                    <div className="btn-group">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle ">
                          Add Products
                        </Dropdown.Toggle>
   <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Import from stores</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Upload from .CSV</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Add Product</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    </div>
                  </li>
                  <li className='liclass'>
                    <div >
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Export Products
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Active Products</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">All Products (Active/Inactive)</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Only Filtered Products</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    </div>
                  </li>
                  <li className='liclass'>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div></li></ul>
              </div>
              <div className="col-md-3"></div>
            </div>



            <div className='row'>
              <div className='col-md-2'>
                <a className="reset-filters">Reset Filters</a>

                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Product Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="All" control={<Radio />} label="All" />
                            <FormControlLabel value="Product" control={<Radio />} label="Product" />
                            <FormControlLabel value="Bundle" control={<Radio />} label="Bundle" />
                            <FormControlLabel value="Varient" control={<Radio />} label="Varient Group" />
                          </RadioGroup>
                        </FormControl>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Weight</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="All" control={<Radio />} label="All" />
                            <FormControlLabel value="<13" control={<Radio />} label="< 13 oz" />
                            <FormControlLabel value="Bundle" control={<Radio />} label="13 oz 3lb" />
                            <FormControlLabel value="Varient" control={<Radio />} label="< 3 lb" />
                          </RadioGroup>
                        </FormControl>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Active</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel value="Active" control={<Radio />} label="Active" />
                          <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />

                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Tags</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <input
                          type="text"
                          className="keywordsearchone"
                          placeholder="Enter Tags"
                          name="filter[keyword]"
                          value=""
                        // fdprocessedid="iox0y"
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group">
                          <label htmlFor="product_category_id_0" className="categorylabel"><input name="filter[product_category_id][]" id="product_category_id_0" type="checkbox" value="0" />Uncategorized</label>
                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <select className="span123" name="page[size]"><option value="100">100 results per page</option><option value="200">200 results per page</option><option value="500">500 results per page</option></select>
              </div>

              <div className='col-md-10  secondcolumn'  >
                <ul className="quick-links">
                  <li>
                    <a id="arrange-columns-btn" href="#arrange-columns-modal">
                      <i className="fa fa-columns"></i>Arrange Columns
                    </a>
                  </li>
                </ul>

                <table className='firsttable'>
                  <thead className='firsthead'>
                    <tr>
                      <th className='firstth'>
                        <input type="checkbox" />
                      </th>
                      <th>Image</th>
                      <th className="">
                        <a href="#" className="firstheader">SKU</a>
                      </th>
                      <th className="">
                        <a href="#" className="firstheader">Name</a>
                      </th>
                      <th className="">
                        <a href="#" className="firstheader">Category</a>
                      </th>
                      <th className="">
                        <a href="#" className="firstheader">Weight</a>
                      </th>
                      <th className="">
                        <a href="#" className="firstheader">Warehouse Bin</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='tablebodyone'>
                    <tr className="">
                      <td><input type="checkbox" name="checked_products[]" value="43295551" style={{ display: "inline-block", verticalAlign: "baseline" }} />
                      </td>
                      <td>
                      </td>
                      <td>
                        <a href="/inventory/products/43295551">482-9008X</a>
                      </td>
                      <td>
                        <a href="/inventory/products/43295551">Alpinestars Supertech S-M10 Solid Helmet[8300419-1441-X,X-Large,Anthracite/Grey/Orange]</a>
                      </td>
                      <td>
                      </td>
                      <td>10 lb</td>
                      <td></td>
                    </tr>
                  </tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295561" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295561">DC7-BL-XL</a></td><td><a href="/inventory/products/43295561">DAYTONA Cruiser 3/4 Open Face Motorcycle Helmet Metal Flake DOT 22 COLORS XS-XXL[XL,Blue Metal Flake]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295571" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295571">7092244</a></td><td><a href="/inventory/products/43295571">BELL RS-2 Street Race Motorcycle Helmet Empire Tactical 3 Colors[L,Tactical Gloss Red/Black/Titanium]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295581" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295581">O50010WAS24</a></td><td><a href="/inventory/products/43295581">ORIGINE Jet O531 3/4 Motorcycle Helmet Flat Green White Army Star SZ S-XL[L]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296141" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/141/original/41AOEZPCTUL.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296141">324-2015</a></td><td><a href="/inventory/products/43296141">LS2 Helmets Unisex-Adult Flip-Up-Helmet-Style Metro Helmet</a></td><td></td><td>4 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295591" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295591">C11-0038</a></td><td><a href="/inventory/products/43295591">SCORPION Exo-C110 1/2 Half Motorcycle Helmet Drop Down Visor Gloss Black XS-3XL[3X-Large]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296091" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/091/original/41YqxgyYO9L.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296091">7084451</a></td><td><a href="/inventory/products/43296091">Bell Riot Flip-Up Motorcycle Helmet (Solid Matte Black, Small)</a></td><td></td><td>2 lb 9.6 oz</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296111" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/111/original/518W3b4%252ByJL.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296111">7084453</a></td><td><a href="/inventory/products/43296111">Bell Riot Flip-Up Motorcycle Helmet (Solid Matte Black, Large)</a></td><td></td><td>4 lb 14.08 oz</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296121" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/121/original/51h669pu7zL.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296121">7095655</a></td><td><a href="/inventory/products/43296121">Bell Rogue Half Size Motorcycle Helmet (Airtrix Matte Black/Red/Titanium, Medium)</a></td><td></td><td>3 lb 4.8 oz</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295561" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295561">DC7-BL-XL</a></td><td><a href="/inventory/products/43295561">DAYTONA Cruiser 3/4 Open Face Motorcycle Helmet Metal Flake DOT 22 COLORS XS-XXL[XL,Blue Metal Flake]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296141" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/141/original/41AOEZPCTUL.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296141">324-2015</a></td><td><a href="/inventory/products/43296141">LS2 Helmets Unisex-Adult Flip-Up-Helmet-Style Metro Helmet</a></td><td></td><td>4 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295571" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295571">7092244</a></td><td><a href="/inventory/products/43295571">BELL RS-2 Street Race Motorcycle Helmet Empire Tactical 3 Colors[L,Tactical Gloss Red/Black/Titanium]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295581" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td></td><td><a href="/inventory/products/43295581">O50010WAS24</a></td><td><a href="/inventory/products/43295581">ORIGINE Jet O531 3/4 Motorcycle Helmet Flat Green White Army Star SZ S-XL[L]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
                  <tbody className='tablebodyone'><tr className=""><td><input type="checkbox" name="checked_products[]" value="43296141" style={{ display: "inline-block", verticalAlign: "baseline" }} /></td><td><a href="https://se-files-production.s3.amazonaws.com//products/images/043/296/141/original/41AOEZPCTUL.jpg" target="_blank" rel="noopener noreferrer"><i className="fa fa-image"></i></a></td><td><a href="/inventory/products/43296141">324-2015</a></td><td><a href="/inventory/products/43296141">LS2 Helmets Unisex-Adult Flip-Up-Helmet-Style Metro Helmet</a></td><td></td><td>4 lb</td><td></td></tr></tbody>
                </table>
              </div>

            </div>

          </div>

        </main>
      </>
    )
  }
}
export default Products;