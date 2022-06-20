import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { InputLabel, Button, Input, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { getStates, getCountysByState } from "../../../services/locality";
export default function FullWidthGrid() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [states, setStates] = useState([]);
  const [state, setState] = useState(null);

  const [countys, setCountys] = useState([]);
  const [county, setCounty] = useState(null);

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangeCountys = (event) => {
    setCounty(event.target.value);
  };

  useEffect(() => {
    getStates().then((res) => setStates(res.data));
  }, []);

  useEffect(() => {
    getCountysByState(state).then((res) => setCountys(res.data));
  }, [state]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {console.log(states)}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>Nome</InputLabel>
          <Input
            color="primary"
            fullWidth
            {...register("firstName", { required: true })}
          />
          {errors.lastName && <span>Fill the username</span>}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Sobrenome</InputLabel>
          <Input
            color="primary"
            fullWidth
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>Fill the username</span>}
        </Grid>
        <Grid item xs={4}>
          <InputLabel>CEP</InputLabel>
          <Input
            color="primary"
            fullWidth
            {...register("zipCode", { required: true })}
          />
        </Grid>
        <Grid item xs={8}>
          <InputLabel>Endereço</InputLabel>
          <Input
            color="primary"
            fullWidth
            {...register("street", { required: true })}
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <InputLabel>Estado</InputLabel>
          <Select
            variant={"standard"}
            id="combo-states"
            value={state}
            onChange={handleChangeState}
            sx={{ width: "100%" }}
          >
            {states.map((item) => (
              <MenuItem value={item.id}>{item.sigla}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Cidade</InputLabel>
          <Select
            variant={"standard"}
            id="combo-countys"
            value={county}
            onChange={handleChangeCountys}
            onClick={handleChangeCountys}
            sx={{ width: "100%" }}
          >
            {countys.map((item) => (
              <MenuItem value={item.id}>{item.nome}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} display={"flex"}>
          <Button fullWidth variant="contained" color="primary">
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
