import React from "react";
import styled from "styled-components";

import { Navbar, NavbarBrand, Form, FormGroup, Input } from "reactstrap";

const styles = {
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

const SideContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
`;

const InstaIcon = styled.div`
  width: 75px;
  height: 32px;
  border-right: 1px solid black;
`;

const SideContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
  justify-content: space-around;
`;

const SearchBar = ({ search, logout }) => {
  return (
    <Navbar color="light" light expand="md">
      <SideContainerLeft>
        <InstaIcon>
          <i className="fab fa-instagram fa-2x" />
        </InstaIcon>
        <NavbarBrand style={styles.heading} href="/">
          Instagram
        </NavbarBrand>
      </SideContainerLeft>
      <Form style={styles.form}>
        <FormGroup style={styles.formGroup}>
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="search"
            onChange={e => search(e)}
          />
        </FormGroup>
      </Form>
      <SideContainerRight>
        <i className="far fa-compass fa-lg" />
        <i className="far fa-heart fa-lg" />
        <i className="far fa-user fa-lg" onClick={logout} />
      </SideContainerRight>
    </Navbar>
  );
};

export default SearchBar;
