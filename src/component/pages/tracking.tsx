import React, { Component } from 'react';
import Sidebar from './sidebar';
import './tracking.css';


class Tracking extends Component {
    render() {
      return (
        <>
      <main>
        <Sidebar />



<div className="navcontent">
  <div className="connectapp">
<div className="moduleheader">
<div className="Layoutmodule">
  <a className="se-link" href="/customers/branded_tracking">Branded Tracking &amp; Notifications</a> / Select Stores</div>
</div>

<div className="selectstore">
  <ol className="ollistone"><li className="lilistone">
    <a  className="alink" href="#">
      <span className="spanone">1</span>
      <span className="spantwo">Select Stores</span>
      </a></li><li className="lilistone"><a className="alinkone" href="#">
        <span className="spanthree">2</span><span className="spanfour">Customize Design</span>
        </a></li><li className="lilistone"><a className="alinkone" href="#">
          <span className="spanthree">3</span><span className="spanfour">Links &amp; Social Media</span>
          </a></li></ol></div>
          <h1 className="h1content">Branded Tracking &amp; Notifications</h1>
  </div>
</div>




        </main>
        </>
      )
    }
}
export default Tracking;