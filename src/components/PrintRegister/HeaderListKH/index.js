import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory} from 'react-router-dom';
const HeaderListKH = () => {
  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      style={{ borderBlock: "none" }}
    >
      <Container>        
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderListKH;
