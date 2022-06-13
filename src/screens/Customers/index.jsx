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

export default function Customers() {
  const fakeCustomers = [
    {
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
            <ListItem className={styles.borderDefault} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={customer.firstName} src={"1"} />
              </ListItemAvatar>
              <ListItemText
                primary={`${customer.firstName} ${customer.lastName}`}
                secondary={
                  <Fragment>
                    <p>
                      Endereço: {customer.address}
                      <br />
                      Número: {customer.number}
                      <br />
                      Complemento: {customer.complement}
                    </p>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <Divider style={{ marginBottom: 10 }} />
                      Ultima compra em:<strong> {customer.lastPurchase}</strong>
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </>
        ))}
      </List>
      <FloatingButton title={"Novo cliente"} />
    </>
  );
}
