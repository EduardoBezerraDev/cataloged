const axios = require("axios").default;
const endPoint = "https://servicodados.ibge.gov.br/api/v1";

const getStates = (state = null) => {
  const res = axios.get(
    `${endPoint}/localidades/estados?orderBy=nome/${state ? state : ""}`
  );
  return res;
};
const getCountysByState = (state = null, county = null) => {
  const res = axios.get(
    `${endPoint}/localidades/estados/${state}/municipios/${
      county ? county : ""
    }`
  );
  return res;
};

export { getStates, getCountysByState };
