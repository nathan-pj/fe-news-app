import "./Nav.css";
import React from "react";
import UserIcon from "./UserIcon";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar({ setSortBy, isLoading, setIsLoading }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Navbar.Brand className="nc-news">nc news</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <div className="topic-link">
            <Link
              to={"/articles?topic=coding"}
              onClick={() => setSortBy("")}
              style={{ textDecoration: "none", color: "white" }}
            >
              Coding
            </Link>
          </div>
          <div className="topic-link">
            <Link
              to="/articles?topic=football"
              onClick={() => setSortBy("")}
              style={{ textDecoration: "none", color: "white" }}
            >
              Football
            </Link>
          </div>
          <div className="topic-link">
            <Link
              to={"/articles?topic=cooking"}
              onClick={() => setSortBy("")}
              style={{ textDecoration: "none", color: "white" }}
            >
              Cooking
            </Link>
          </div>
        </Nav>

        <Nav className="ms-auto">
          <div className="info__icon">
            <Link to="/info">
              <InfoIcon style={{ textDecoration: "none", color: "white" }} />
            </Link>
          </div>
          <div className="write-article__icon">
            <Link to="/write-article">
              <CreateIcon style={{ textDecoration: "none", color: "white" }} />
            </Link>
          </div>
          <div className="logged-in ">
            <UserIcon sx={{ display: "flex" }} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
