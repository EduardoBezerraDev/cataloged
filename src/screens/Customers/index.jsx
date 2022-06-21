import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "../../css/default.module.css";
import FloatingButton from "../../components/FloatingButton";
import Add from "./add";

export default function Customers() {
  const fakeCustomers = [
    {
      id: 1,
      firstName: "Eduardo",
      lastName: "Bezerra",
      lastPurchase: "05/01/2021",
      state: "Ceará",
      city: "Fortaleza",
      district: "Parque potira",
      address: "Rua tampico",
      number: "1481",
      complement: "Casa 8",
    },
    {
      id: 2,
      firstName: "Felipe",
      lastName: "Araujo",
      lastPurchase: "09/04/2021",
      city: "Caucaia",
      state: "Ceará",
      district: "Parque potira",
      address: "Rua tampico",
      number: "1481",
      complement: "Casa 8",
    },
  ];
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {fakeCustomers.map((customer) => (
          <>
            <ListItem
              className={styles.borderDefault}
              alignItems="flex-start"
              key={customer.id}
            >
              <ListItemAvatar>
                <Avatar alt={customer.firstName} src={"1"} />
              </ListItemAvatar>
              <ListItemText
                primary={`${customer.firstName} ${customer.lastName}`}
                secondary={
                  <Fragment>
                    <p>
                      Endereço: <strong>{customer.address}</strong>
                      <br />
                      Número: <strong>{customer.number}</strong>
                      <br />
                      Complemento: <strong>{customer.complement}</strong>
                    </p>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <Divider style={{ marginBottom: 10 }} />
                      <i>Ultima compra em:</i>{" "}
                      <strong> {customer.lastPurchase}</strong>
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </>
        ))}
      </List>
      <FloatingButton title={"Novo cliente"}>
        <Add />
      </FloatingButton>
    </>
  );
}
