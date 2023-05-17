import React, { Component } from 'react';
import Sidebar from './sidebar';
import './supplies.css';
import shipping from '../assets/img/shipping-supplies.svg';
import labels from '../assets/img/labels.svg';
import usps from '../assets/img/usps-supplies.svg';

class Supplies extends Component {
    render() {
      return (
        <>
      <main>
        <Sidebar />
        <div className="contentdiv">
            <div className="divcontent">
        <p className="first">We’ve partnered with ONYX Products® to save you money over other competitors and provide a one-stop shop for all your shipping supply needs.</p>
        <p className="secondpara"> <a  href="https://support.shippingeasy.com/hc/en-us/articles/4410766589339-ShippingEasy-Supplies-Store-Overview" className="se-link" data-pendo-id="/supplies#knowledge-base" rel="noopener noreferrer" target="_blank">What is ONYX Products®?</a></p>
       <p className='thirdpara'>Start with our curated list of ShippingEasy supplies!</p>

       <a  type="button" className="shopbutton"><div className="se-button__wrapper">
        <div className="se-button__content-wrapper"><span>Shop ShippingEasy Supplies Now</span></div></div></a>
        </div>
        <h2 className="h2h2">More popular supply categories</h2>

        <div className="gridrow">
        <div className="contentcol">
            <img src={shipping} />
                <h3 className="contenth3">Shipping Supplies</h3>
                <p className="contentpara">Boxes, bubble wrap, tape and mailers</p>
                <a target="_blank" href="https://onyxproducts.com/collections/shipping-supplies?utm_source=client&amp;utm_medium=shipping+supplies+cta+button&amp;utm_campaign=SE+Client+Test"  type="button" className="shopnowbutton   se-btn-primary-outline  " data-pendo-id="/supplies#buy-supplies">
                   <div className="se-button__wrapper">
                     <span className="se-button__content">Shop Now</span></div></a></div>
                     <div className="contentcol">
           <img src={labels} />
                <h3 className="contenth3">Labels</h3>
                <p className="contentpara">Thermal rolls, shipping labels and special handling labels</p>
                <a target="_blank" href="https://onyxproducts.com/collections/shipping-supplies?utm_source=client&amp;utm_medium=shipping+supplies+cta+button&amp;utm_campaign=SE+Client+Test"  type="button" className="shopnowbutton   se-btn-primary-outline  " data-pendo-id="/supplies#buy-supplies">
                   <div className="se-button__wrapper">
                     <span className="se-button__content">Shop Now</span></div></a></div>
                     <div className="contentcol">
           <img src={usps} />
                <h3 className="contenth3">Free USPS Supplies</h3>
                <p className="contentpara">USPS specific flat rate boxes and mailers</p>
                <a target="_blank" href="https://onyxproducts.com/collections/shipping-supplies?utm_source=client&amp;utm_medium=shipping+supplies+cta+button&amp;utm_campaign=SE+Client+Test"  type="button" className="shopnowbutton   se-btn-primary-outline  " data-pendo-id="/supplies#buy-supplies">
                   <div className="se-button__wrapper">
                     <span className="se-button__content">Shop Now</span></div></a></div>
            </div>
            
        
        </div>
        </main>
        </>
      );
    }
  }
  export default Supplies;
  