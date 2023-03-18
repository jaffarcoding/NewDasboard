import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Homes.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import "./ResClients.scss";
const Header = () => {
  // <----------------------------- view Clients----------------------------------->
  return (
    <Fragment>
      <Home />
      <div className="client-side">
        <h3>View Clients</h3>
        <p>
          <span>Client Master</span> /{" "}
          <span className="second">View Clients</span>
        </p>
        <AiOutlineBell className="bell" />
        <div className="search-engine">
          <AiOutlineSearch className="search-view" />
          <input type="text" placeholder="Search" />
          <div className="coloumns">
            <p>Columns</p>
            <AiOutlineDown className="down" />
          </div>
          {/* <div className="exports">
            <button>Export</button>
          </div> */}
          <button className="exports">Export</button>
          <AiOutlineDownload className="export" />
        </div>
      </div>
      <div className="wrap-title">
        <div className="company-name">
          <h4>Company Name</h4>
        </div>
        <div className="email-address">
          <h4>Email Address</h4>
        </div>
        <div className="phone-no">
          <h4>Phone No</h4>
        </div>
        <div className="contact-person">
          <h4>Contact Person</h4>
        </div>
        <div className="facilitator">
          <h4>Facilitator</h4>
        </div>
        <div className="sites">
          <h4>Sites</h4>
        </div>
        <div className="tenants">
          <h4>tenants</h4>
        </div>
        <div className="tenants-group">
          <h4>Tenant Group</h4>
        </div>

        <div className="action">
          <h4>Actions</h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="table">
          <div className="wrapper-content">
            <div className="wrap-item">
              <div className="company-name">
                <h4 className="firstH">Infosys</h4>
                <h4>Wipro</h4>
                <h4>Accenture</h4>
                <h4>Capgemini</h4>
                <h4>Lodha</h4>
                <h4>Tata Consultancy Servieces</h4>
                <h4>HCL</h4>
                <h4>Redington</h4>
                <h4>Mphasis</h4>
                <h4>Larsen & Toubro</h4>
              </div>
              <div className="email-address">
                <h4 className="firstH">management@infosys.com</h4>
                <h4>management@wipro.com</h4>
                <h4>management@accenture.com</h4>
                <h4>management@capgemini.com</h4>
                <h4>management@lodha.com</h4>
                <h4>management@tcs.com</h4>
                <h4>management@hcl.com</h4>
                <h4>management@redington.com</h4>
                <h4>management@mphasis.com</h4>
                <h4>management@larsentoubro.com</h4>
              </div>
              <div className="phone-no">
                <h4 className="firstH">+91 9563214587</h4>
                <h4>+91 9834687432</h4>
                <h4>+91 8732654789</h4>
                <h4>+91 8432657995</h4>
                <h4>+91 9642357894</h4>
                <h4>+91 9632457468</h4>
                <h4>+91 9452136487</h4>
                <h4>+91 9326571865</h4>
                <h4>+91 9874621547</h4>
                <h4>+91 9547154964</h4>
              </div>
              <div className="contact-person">
                <h4 className="firstH">Vijayent Roy</h4>
                <h4>Kalpit Soni</h4>
                <h4>Drishti Sane</h4>
                <h4>Aisha Keer</h4>
                <h4>Kanika Khare</h4>
                <h4>Prabhat Rao</h4>
                <h4>Venkat Pant</h4>
                <h4>Samir Yadav</h4>
                <h4>Sweta Chawla</h4>
                <h4>Abhishek Kumar</h4>
              </div>
              <div className="facilitator">
                <h4 className="firstH">- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
              </div>
              <div className="sites">
                <h4 className="firstH">12</h4>
                <h4>8</h4>
                <h4>4</h4>
                <h4>6</h4>
                <h4>24</h4>
                <h4>10</h4>
                <h4>5</h4>
                <h4>1</h4>
                <h4>1</h4>
                <h4>16</h4>
              </div>
              <div className="tenants">
                <h4 className="firstH">- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>16</h4>
                <h4>-</h4>
                <h4>2</h4>
                <h4>1</h4>
                <h4>- -</h4>
                <h4>- -</h4>
              </div>
              <div className="tenants-group">
                <h4 className="firstH">- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>1</h4>
                <h4>- -</h4>
                <h4>- -</h4>
                <h4>- -</h4>
              </div>

              <div className="action">
                <h4 className="firstH">
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
                <h4>
                  <BsThreeDotsVertical />
                </h4>
              </div>
            </div>
          </div>
          <div className="pagination">
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
            <li>
              <a>5</a>
            </li>
            <li>
              <a>6</a>
            </li>
            <li>
              <a>7</a>
            </li>
            <li>
              <a>8</a>
            </li>
          </div>
          <div className="previous">
            <p>Previous</p>
            <GrFormPrevious className="previous-P" />
          </div>
          <div className="next">
            <p>Next</p>
            <GrFormNext className="next-p" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
