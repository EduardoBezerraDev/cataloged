import React, { useState } from "react";
import { Drawer, Button, Row, Col, Divider } from "antd";
import Add from "@mui/icons-material/Add";
import styles from "../css/default.module.css";
const FloatingButton = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ position: "absolute", right: 23 }}>
      <Button
        type="primary"
        className={styles.ButtonBorderDefault}
        onClick={showDrawer}
      >
        <Add />
      </Button>
      <Drawer
        title={props.title}
        placement="top"
        onClose={onClose}
        visible={visible}
        height={"100%"}
      >
        {props.children}
      </Drawer>
    </div>
  );
};

export default FloatingButton;
