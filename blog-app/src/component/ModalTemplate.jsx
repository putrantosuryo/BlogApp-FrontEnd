import React, { useEffect, useState } from "react";

import {
    NavbarBrand,
    Navbar,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CloseButton,
  } from "reactstrap";
  import Login from "../pages/User/LoginUserPage";

function ModalTemplate(args) {
  const [modal, setModal] = useState(false);
  const modalLogin = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={modalLogin}>
        Login Modal
      </Button>
      <Modal isOpen={modal} modalLogin={modalLogin} {...args}>
        <CloseButton onClick={modalLogin} />
        <ModalBody>
          <Login />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalTemplate;
