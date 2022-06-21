import axios from "axios";

export const getCep = (cep) => {
  const res = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return res;
};
export default getCep;
