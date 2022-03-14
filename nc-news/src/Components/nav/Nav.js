import "./Nav.css";
import React from "react";
import UserIcon from "./UserIcon";
import CreateIcon from "@mui/icons-material/Create";

import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar({ setSortBy, isLoading, setIsLoading }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Navbar.Brand href="/" className="nc-news">
        nc news
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/articles?topic=coding" onClick={() => setSortBy("")}>
            Coding
          </Nav.Link>
          <Nav.Link
            href="/articles?topic=football"
            onClick={() => setSortBy("")}
          >
            Football
          </Nav.Link>
          <Nav.Link
            href="/articles?topic=cooking"
            onClick={() => setSortBy("")}
          >
            Cooking
          </Nav.Link>
        </Nav>
        {isLoading ? null : (
          <Nav className="ms-auto">
            <Nav.Link href="/write-article">
              <CreateIcon style={{ textDecoration: "none", color: "white" }} />
            </Nav.Link>
            <div className="logged-in ">
              <UserIcon sx={{ display: "flex" }} />
            </div>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
