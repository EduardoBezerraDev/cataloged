const axios = require("axios").default;
const endPoint = "https://servicodados.ibge.gov.br/api/v1";

const getStates = (state = null) => {
  const res = axios.get(
    `${endPoint}/localidades/estados/${state ? state : ""}?orderBy=nome/`
  );
  return res;
};
const getCitiesByState = (state = null) => {
  const res = axios.get(
    `${endPoint}/localidades/estados/${state}/municipios/`
  );
  return res;
};
const getCity = (city = null) => {
  const res = axios.get(
    `${endPoint}/localidades/municipios/${city}/`
  );
  return res;
};

export { getStates, getCitiesByState, getCity };
