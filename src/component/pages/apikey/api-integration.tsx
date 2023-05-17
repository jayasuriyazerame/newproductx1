import React, { Component } from 'react';
import Sidebar from '../sidebar';
import '../products.css';
import { Button } from 'reactstrap';
// import { callApi } from "../../../utils/api";
import './api-integration.css';
import shopify from "../../assets/img/shopify.png";
import tick from "../../assets/img/tickicon.png";
import bigcommerce from "../../assets/img/bigcommerce.png";
import magento from "../../assets/img/magento.png";
import untick from "../../assets/img/untick.png";
import { callApi } from "../../../utils/api";
export default class Apiintegration extends React.Component {
    state = {
        formopen: "",
        accesstoken: "",
        storename: "",
        client_id: "",
        client_secret: "",
        access_token: "",
        store_hash: "",

        consumer_key: "",
        consumer_secret: "",
        token_secret: "",
        store_id: "",
        product_urlsuffix: "",
        category_urlsuffix: "",
        category_path_producturl: "",
        exclude_emaildomains: "",

        tokenError: "",
        storenameError: "",
        clientidError: "",
        clientsecretError: "",
        accesstokenError: "",
        storehashError: "",

        consumerkryError: "",
        consumersecretError: "",
        // accesstokenError: "",
        tokensecretError: "",
        storeidError: "",
        producturlsuffixError: "",
        categoryurlsuffixError: "",
        categorypathproducturlError: "",
        excludeemaildomainsError: "",

    }

    onchange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClickone = () => {

        let tokenError = "";
        let storenameError = "";

        if (!this.state.accesstoken) {
            tokenError = "Access token is required";
        }
        if (!this.state.storename) {
            storenameError = "Storename is required";
        }
        if (tokenError || storenameError) {
            this.setState({ tokenError, storenameError });
            return;
        }

        console.log("login___>>>", this.state);
        let req = {
            accesstoken: this.state.accesstoken,
            storename: this.state.storename,

        }
        callApi("POST", "apishopify.php", req)
            .then(res => res.data)
            .then(response => {
                console.log("response", response);
                if (response['success'] == true) {
                    this.setState({ formopen: "" });
                }
                else {

                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleClicktwo = () => {

        let clientidError = "";
        let clientsecretError = "";
        let accesstokenError = "";
        let storehashError = "";

        if (!this.state.access_token) {
            clientidError = "client id is required";
        }
        if (!this.state.client_secret) {
            clientsecretError = "clientsecret is required";
        }
        if (!this.state.client_secret) {
            accesstokenError = "accesstoken is required";
        }
        if (!this.state.store_hash) {
            storehashError = "Storehash is required";
        }
        if (clientidError || clientsecretError || accesstokenError || storehashError) {
            this.setState({ clientidError, clientsecretError, accesstokenError, storehashError });
            return;
        }

        console.log("login___>>>", this.state);
        let req = {
            client_id: this.state.client_id,
            client_secret: this.state.client_secret,
            access_token: this.state.access_token,
            store_hash: this.state.store_hash,

        }
        callApi("POST", "apibigcommerce.php", req)
            .then(res => res.data)
            .then(response => {
                console.log("response", response);
                if (response['success'] == true) {
                    this.setState({ formopen: "" });
                }
                else {

                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    handleClickthree = () => {

        let consumerkryError = "";
        let consumersecretError = "";
        let accesstokenError = "";
        let tokensecretError = "";
        let storeidError = "";
        let producturlsuffixError = "";
        let categoryurlsuffixError = "";
        let categorypathproducturlError = "";
        let excludeemaildomainsError = "";

        if (!this.state.consumer_key) {
            consumerkryError = "consumer key is required";
        }
        if (!this.state.consumer_secret) {
            consumersecretError = "consumersecret is required";
        }
        if (!this.state.access_token) {
            accesstokenError = "accesstoken is required";
        }
        if (!this.state.token_secret) {
            tokensecretError = "Tokensecret is required";
        }
        if (!this.state.store_id) {
            storeidError = "Store id is required";
        }
        if (!this.state.product_urlsuffix) {
            producturlsuffixError = "producturlsuffix is required";
        }
        if (!this.state.category_urlsuffix) {
            categoryurlsuffixError = "categoryurlsuffix is required";
        }
        if (!this.state.category_path_producturl) {
            categorypathproducturlError = "categorypathproducturl is required";
        }
        if (!this.state.exclude_emaildomains) {
            excludeemaildomainsError = "excludeemaildomains is required";
        }
        if (consumerkryError || consumersecretError || accesstokenError || tokensecretError || storeidError || producturlsuffixError || categoryurlsuffixError || categorypathproducturlError || excludeemaildomainsError) {
            this.setState({ consumerkryError, consumersecretError, accesstokenError, tokensecretError, storeidError, producturlsuffixError, categoryurlsuffixError, categorypathproducturlError, excludeemaildomainsError });
            return;
        }

        console.log("login___>>>", this.state);
        let req = {
            consumer_key: this.state.consumer_key,
            consumer_secret: this.state.consumer_secret,
            access_token: this.state.access_token,
            token_secret: this.state.token_secret,
            store_id: this.state.store_id,
            product_urlsuffix: this.state.product_urlsuffix,
            category_urlsuffix: this.state.category_urlsuffix,
            category_path_producturl: this.state.category_path_producturl,
            exclude_emaildomains: this.state.exclude_emaildomains,

        }
        callApi("POST", "apimagento.php", req)
            .then(res => res.data)
            .then(response => {
                console.log("response", response);
                if (response['success'] == true) {
                    this.setState({ formopen: "" });
                }
                else {

                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    apiformopen(value) {
        console.log("value---->>>", value);
        this.setState({ formopen: value });
    }


    render() {

        return (
            <>
                <main>
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
                            <div className='cardapi'>
                                <div className='card-bodyone'>
                                    <div className='row'>
                                        <div className="mb-4 col-md-4 shofifycarddiv">
                                            <div className="platformWrapper" onClick={() => this.apiformopen('Shopify')}>
                                                {this.state.formopen == "Shopify" ?
                                                    (
                                                        <img src={tick} width="" alt="tick" className="select" />
                                                    ) : (<img src={untick} width="" alt="tick" className="select" />)}
                                                <div className="align-items-center ">
                                                    <div className="col text-center col">
                                                        <img src={shopify} width="54" alt="Javascript Snippet" />
                                                    </div>
                                                    <div className="col text-center col">
                                                        <label>Shopify</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 col-md-4 shofifycarddiv">
                                            <div className="platformWrapper" onClick={() => this.apiformopen('BigCommerce')}>
                                                {this.state.formopen == "BigCommerce" ? (
                                                    <img src={tick} width="" alt="tick" className="select" />
                                                ) : (<img src={untick} width="" alt="tick" className="select" />)}

                                                <div className="align-items-center ">
                                                    <div className="col text-center col">
                                                        <img src={bigcommerce} width="54" alt="Javascript Snippet" />
                                                    </div>
                                                    <div className="col text-center col">
                                                        <label>BigCommerce</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 col-md-4 shofifycarddiv">
                                            <div className="platformWrapper" onClick={() => this.apiformopen('Magento')}>
                                                {this.state.formopen == "Magento" ? (
                                                    <img src={tick} width="" alt="tick" className="select" />
                                                ) : (<img src={untick} width="" alt="tick" className="select" />)}
                                                <div className="align-items-center ">
                                                    <div className="col text-center col">
                                                        <img src={magento} width="54" alt="Javascript Snippet" />

                                                    </div>
                                                    <div className="col text-center col">
                                                        <label>Magento</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"> </div>
                                        <div className="col-md-6">
                                            {this.state.formopen == "Shopify" ?
                                                (
                                                    <div className="mt-2 mb-4 form-wrap">
                                                        <h4 className="text-left mb-3">Edit your shopify store secret keys</h4>
                                                        <form>
                                                            <div className="mt-40 form-group">
                                                                <div className="keyrow_bottom row">
                                                                    <div className="col-md-12">
                                                                        <label className="mb-2 labelenter">Access Token</label>
                                                                        <input
                                                                            name="accesstoken"
                                                                            id="value_"
                                                                            type="text"
                                                                            className="form-control form-control"
                                                                            onChange={this.onchange}
                                                                            onFocus={() => this.setState({ tokenError: "" })}

                                                                        />
                                                                        <div className="text-danger">{this.state.tokenError}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="keyrow_bottom row">
                                                                    <div className="col-md-12">
                                                                        <label className="mb-2 labelenter">Store name</label>
                                                                        <input
                                                                            name="storename"
                                                                            id="value_"
                                                                            type="text"
                                                                            className="form-control form-control"
                                                                            onChange={this.onchange}
                                                                            onFocus={() => this.setState({ storenameError: "" })}
                                                                        />
                                                                        <div className="text-danger">{this.state.storenameError}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3 row">
                                                                <div className="text-right col-12">
                                                                    <button
                                                                        type="button"
                                                                        className="primary text-center btn btn-primary"
                                                                        onClick={this.handleClickone}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                ) : ""}
                                            {this.state.formopen == "BigCommerce" ? (
                                                <div className="mt-2 mb-4 form-wrap">
                                                    <h4 className="text-left mb-3">Set your secret keys from your bigcommerce store</h4>
                                                    <form method="post" className="">
                                                        <div className="mt-40 form-group">
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label htmlFor="ClientID">Client ID</label>
                                                                    <input
                                                                        name="client_id"

                                                                        id="ClientID"
                                                                        type="text"
                                                                        className="form-control form-control"

                                                                        onChange={this.onchange}
                                                                        onFocus={() => this.setState({ clientidError: "" })}
                                                                    // fdprocessedid="yf7ny"
                                                                    />
                                                                    <div className="text-danger">{this.state.clientidError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label htmlFor="ClientSecret">Client Secret</label>
                                                                    <input
                                                                        name="client_secret"

                                                                        id="ClientSecret"

                                                                        type="text"
                                                                        className="form-control form-control"

                                                                        onChange={this.onchange}
                                                                        onFocus={() => this.setState({ clientsecretError: "" })}
                                                                    // fdprocessedid="5tve2o"
                                                                    />
                                                                    <div className="text-danger">{this.state.clientsecretError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label htmlFor="AccessToken">Access Token</label>
                                                                    <input
                                                                        name="access_token"

                                                                        id="AccessToken"

                                                                        type="text"
                                                                        className="form-control form-control"

                                                                        onChange={this.onchange}
                                                                        onFocus={() => this.setState({ accesstokenError: "" })}
                                                                    // fdprocessedid="9s15on"
                                                                    />
                                                                    <div className="text-danger">{this.state.accesstokenError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label htmlFor="StoreHash">Store Hash</label>
                                                                    <input
                                                                        name="store_hash"
                                                                        id="StoreHash"

                                                                        type="text"
                                                                        className="form-control form-control"

                                                                        onChange={this.onchange}
                                                                        onFocus={() => this.setState({ storehashError: "" })}
                                                                    // fdprocessedid="lrr81"
                                                                    />
                                                                    <div className="text-danger">{this.state.storehashError}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 row">
                                                            <div className="text-right col-12">
                                                                <button
                                                                    type="button"
                                                                    className="primary text-center btn btn-primary"
                                                                    onClick={this.handleClicktwo}
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            ) : ""}
                                            {this.state.formopen == "Magento" ? (
                                                <div className="mt-2 mb-4 form-wrap">
                                                    <h4 className="text-left mb-3">Set your secret keys from your Magento store</h4>
                                                    <form method="post" className="">
                                                        <div className="mt-40 form-group">
                                                            {/* <h4 style={{ color: "red" }}>Please fill all fields</h4> */}
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Consumer Key</label>
                                                                    <input name="consumer_key" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ consumerkryError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.consumerkryError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Consumer Secret</label>
                                                                    <input name="consumer_secret" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ consumersecretError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.consumersecretError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Access Token</label>
                                                                    <input name="access_token" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ accesstokenError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.accesstokenError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Access Token Secret</label>
                                                                    <input name="token_secret" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ tokensecretError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.tokensecretError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Store Id</label>
                                                                    <input name="store_id" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ storeidError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.storeidError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Product URL Suffix</label>
                                                                    <input name="product_urlsuffix" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ producturlsuffixError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.producturlsuffixError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Category URL Suffix</label>
                                                                    <input name="category_urlsuffix" id="value_" type="text" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ categoryurlsuffixError: "" })}
                                                                    />
                                                                    <div className="text-danger">{this.state.categoryurlsuffixError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Category Path for Product URL</label>
                                                                    <select name="category_path_producturl" id="value_" className="form-control form-control" onChange={this.onchange} onFocus={() => this.setState({ categorypathproducturlError: "" })} >
                                                                        <option value="no">No</option>
                                                                        <option value="yes">Yes</option>
                                                                    </select>
                                                                    <div className="text-danger">{this.state.categorypathproducturlError}</div>
                                                                </div>
                                                            </div>
                                                            <div className="keyrow_bottom row">
                                                                <div className="col-md-12">
                                                                    <label className="">Exclude Email Domains</label>
                                                                    <input name="exclude_emaildomains" id="value_" type="text" className="form-control form-control" onChange={this.onchange}   onFocus={() => this.setState({ excludeemaildomainsError: "" })}
                                                                        />
                                                                        <div className="text-danger">{this.state.excludeemaildomainsError}</div>
                                                                    {/* <span><i>add multiple domain using comma separator</i></span> */}
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 row">
                                                                <div className="text-right col-12">
                                                                    <button
                                                                        type="button"
                                                                        className="primary text-center btn btn-primary"
                                                                        onClick={this.handleClickthree}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            ) : ""}
                                        </div>
                                        <div className="col-md-4"></div>
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