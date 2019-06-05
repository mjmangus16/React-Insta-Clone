import React from "react";

import { Navbar, NavbarBrand, Form, FormGroup, Input } from "reactstrap";

const styles = {
  sideContainerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%"
  },
  insta_icon: {
    width: 75,
    height: 32,
    borderRight: "1px solid black"
  },
  heading: {
    paddingLeft: 15
  },
  form: {
    margin: "0px auto"
  },
  formGroup: {
    margin: "0px auto"
  },
  sideContainerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
    justifyContent: "space-around"
  }
};

const SearchBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <div style={styles.sideContainerLeft}>
        <div style={styles.insta_icon}>
          <i className="fab fa-instagram fa-2x" />
        </div>
        <NavbarBrand style={styles.heading} href="/">
          Instagram
        </NavbarBrand>
      </div>
      <Form style={styles.form}>
        <FormGroup style={styles.formGroup}>
          <Input type="search" name="search" id="search" placeholder="search" />
        </FormGroup>
      </Form>
      <div style={styles.sideContainerRight}>
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </Navbar>
  );
};

export default SearchBar;
