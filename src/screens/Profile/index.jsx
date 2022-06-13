import { Fragment, useState } from "react";
import { Col, Image, Row, Space, Button } from "antd";
import { Text } from "./style";
import ShopTwoTone from "@ant-design/icons/ShopTwoTone";
export default function Profile() {
  const [showMapAddress, setShowMapAddress] = useState(false);
  return (
    <Fragment>
      <Row>
        <Col span={24}>
          <Space
            style={{
              padding: 2,
              borderColor: "#575fcf",
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Image
              src={`https://i.pinimg.com/originals/c2/f3/b1/c2f3b102e209069e5a79ec6af055f501.jpg`}
            />
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: 20 }}>
          <h1
            style={{ fontWeight: "bold", color: "#485460", letterSpacing: 2.5 }}
          >
            Aliança de ouro
          </h1>
          <Button
            type="ghost"
            onClick={() => setShowMapAddress(!showMapAddress)}
            style={{ marginBottom: 5 }}
            icon={<ShopTwoTone/>}
          >
            Ver endereço
          </Button>
          <iframe
            style={{ display: showMapAddress ? "block" : "none" }}
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.072757057311!2d-38.48367698450142!3d-3.794323237014821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74585e30b99e1%3A0x9cc102d2a2f4afb8!2sALIAN%C3%87A%20DE%20OURO!5e0!3m2!1spt-BR!2sbr!4v1654781170765!5m2!1spt-BR!2sbr"
            width="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Col span={8}>
          <Text color="#05c46b" fontSize={"25pt"} fontWeight={"bolder"}>
            1000
          </Text>
          <Text color={"grey"} fontSize={"17pt"} fontWeight={"bolder"}>
            Vendas
          </Text>
        </Col>
        <Col span={8}>
          <Text color="#ff3f34" fontSize={"25pt"} fontWeight={"bolder"}>
            40
          </Text>
          <Text color={"grey"} fontSize={"17pt"} fontWeight={"bolder"}>
            Clientes
          </Text>
        </Col>
        <Col span={8}>
          <Text color="#485460" fontSize={"25pt"} fontWeight={"bolder"}>
            10
          </Text>
          <Text color={"grey"} fontSize={"17pt"} fontWeight={"bolder"}>
            Catálogos
          </Text>
        </Col>
      </Row>
    </Fragment>
  );
}
