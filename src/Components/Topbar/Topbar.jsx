import './Topbar.css'
import logo from '../../assets/logo.png'
import {Col,Row,Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import TopNavbar from '../TopNavbar/TopNavbar';
const Topbar = () => {
    return (
        <div>
            <Container fluid={true} className="top-bar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="minicart">
                    <BiUser className="icon"/>
                    <IoCartOutline className="icon"/>
                    <IoIosSearch className="icon"/>
                </div>
            </Container>
            <TopNavbar/>
        </div>
    );
};

export default Topbar;