import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styles from "../../css/default.module.css";
import FloatingButton from "../../components/FloatingButton";

export default function Catalogs() {
  const fakeProducts = [
    {
      name: "Natal",
      description: "Catálogo referente ao natal, com produtos natalinos.",
    },
    {
      name: "Dia dos namorados",
      description:
        "Cátalogo referente ao dia dos namorados. Com chocolate, ursos etc...",
    },
  ];
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {fakeProducts.map((product) => (
          <>
            <ListItem className={styles.borderDefault} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={`${product.name}`} src={"1"} />
              </ListItemAvatar>
              <ListItemText
                primary={`${product.name}`}
                secondary={
                  <Fragment>
                    <small style={{ color: "#60a3bc" }}>
                      {product.category}
                    </small>
                    <p>{product.description}</p>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </>
        ))}
      </List>
      <FloatingButton title={"Novo catálogo"}  />

    </>
  );
}
