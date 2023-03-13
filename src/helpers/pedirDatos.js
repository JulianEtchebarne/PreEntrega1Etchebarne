import DATA_BEBIDAS_RECOM from "../data/DATA_BEBIDAS_RECOM.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    resolve(DATA_BEBIDAS_RECOM);
    reject("Error al pedir los datos.");
  });
};
export const pedirProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    resolve(DATA_BEBIDAS_RECOM.find((prod) => prod.id === id));
    reject("Error al pedir los datos.");
  });
};
