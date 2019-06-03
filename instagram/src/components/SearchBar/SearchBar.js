import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand, Form, FormGroup, Input } from "reactstrap";

const styles = {
  sideContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "25%"
  },
  insta_icon: {
    width: 75,
    height: 25,
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
  }
};

const SearchBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <div style={styles.sideContainer}>
        <div style={styles.insta_icon} />
        <NavbarBrand style={styles.heading} href="/">
          Instagram
        </NavbarBrand>
      </div>
      <Form style={styles.form}>
        <FormGroup style={styles.formGroup}>
          <Input type="search" name="search" id="search" placeholder="search" />
        </FormGroup>
      </Form>
      <div style={styles.sideContainer} />
    </Navbar>
  );
};

export default SearchBar;
