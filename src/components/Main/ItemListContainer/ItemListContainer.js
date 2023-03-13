import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import { pedirDatos } from "../../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    pedirDatos()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div>
      <div className="flex bg-custom-gris p-100">
        <ul>
          <ItemList items={productos} />
        </ul>
      </div>
    </div>
  );
};
