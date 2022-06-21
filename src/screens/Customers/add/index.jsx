import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { InputLabel, Button, Input, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  getStates,
  getCitiesByState,
  getCity,
} from "../../../services/locality";
import getCep from "../../../services/getCep";
import styles from "./index.module.css";
export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [states, setStates] = useState([]);

  const [citys, setCitys] = useState([]);
  const [city, setCity] = useState("");

  const [district, setDistrict] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangecitys = (event) => {
    setCity(event.target.value);
  };

  const changeCep = (cep) => {
    setCep(cep);
    if (cep.length === 8) {
      getCep(cep).then((res) => {
        const cityByCep = res.data.localidade;

        getStates(res.data.uf).then((res) => {
          setState(res.data.id);
          getCity(cityByCep).then((res) => {
            setCity(res.data.id);
            console.log(res.data.id);
          });
        });

        setCep(res.data.cep);
        setState(res.data.uf);
        setDistrict(res.data.bairro);
        setAddress(res.data.logradouro);
      });
    }
  };

  useEffect(() => {
    getStates().then((res) => {
      setStates(res.data);
    });
  }, []);

  useEffect(() => {
    getCitiesByState(state).then((res) => {
      setCitys(res.data);
    });
  }, [state]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel>Nome</InputLabel>
            <Input
              color="primary"
              fullWidth
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className={styles.errorShow}>O nome é obrigatório</span>
            )}
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Sobrenome</InputLabel>
            <Input
              color="primary"
              fullWidth
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className={styles.errorShow}>
                O sobrenome é obrigatório
              </span>
            )}
          </Grid>

          <Grid item xs={6}>
            <InputLabel>whatsapp</InputLabel>
            <Input
              color="primary"
              fullWidth
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className={styles.errorShow}>
                O sobrenome é obrigatório
              </span>
            )}
          </Grid>
          <Grid item xs={4}>
            <InputLabel>CEP</InputLabel>
            <Input
              onChange={(text) => {
                changeCep(text.currentTarget.value);
              }}
              value={cep}
              color="primary"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <InputLabel>Endereço</InputLabel>
            <Input color="primary" fullWidth name="address" value={address} />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Número</InputLabel>
            <Input color="primary" fullWidth name="address" />
          </Grid>
          <Grid item xs={9}>
            <InputLabel>Bairro</InputLabel>
            <Input color="primary" fullWidth value={district} />
          </Grid>
          <Grid item xs={3} md={8}>
            <InputLabel>Estado</InputLabel>
            <Select
              variant={"standard"}
              id="combo-states"
              value={state}
              key={state}
              onChange={handleChangeState}
              sx={{ width: "100%" }}
            >
              {states.map((item) => (
                <MenuItem value={item.id}>{item.sigla}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={9}>
            <InputLabel>Cidade</InputLabel>
            <Select
              variant={"standard"}
              id="combo-citys"
              value={city}
              key={state}
              onChange={handleChangecitys}
              sx={{ width: "100%" }}
            >
              {citys.map((item) => (
                <MenuItem value={item.id}>{item.nome}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} display={"flex"}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
