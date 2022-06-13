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

export default function Products() {
  const fakeProducts = [
    {
      image:
        "https://img.irroba.com.br/filters:fill(fff):quality(95)/joiasmbc/catalog/aliancas-baratas-caucaia-ce-3-5-mm-pedras-sinteticas-brancas-8-5-gramas-compromisso-namoro-prata-lei-925.jpg",
      name: "Alianças de compromisso",
      description:
        "Par alianças de compromisso prata 950, 2 Pedras sintéticas brancas",
      price: "307,94",
      category: "Alianças",
    },
    {
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/joiasmbc/catalog/aliancas-de-casamento-caucaia-ce-7-mm-15-4-grs-diamantes-quadradas-abauladas-brilhantes-quina-quebrada-chanfrada-zirconia-ouro-amarelo-18k-750-fio-reto-precos-baratas.jpg",
      name: "Aliança de casamento",
      description:
        "Par alianças casamento em ouro 18k, 60 pedras sintéticas brancas",
      price: "7.942,00",
      category: "Alianças",
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
                    <small style={{ color: "orange" }}>
                      {product.category}
                    </small>
                    <p style={{ marginTop: 5}}>{product.description}</p>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body3"
                      color="text.primary"
                    >
                      <Divider style={{ marginBottom: 10 }} />
                      R$ <strong> {product.price}</strong>
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
      <FloatingButton title={"Novo produto"} />
    </>
  );
}
