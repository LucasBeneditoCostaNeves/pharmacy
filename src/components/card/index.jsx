import { useContext } from "react";
import { toast } from "react-toastify";
import { CreateContextApplication } from "../../context/fullcontext";
import { Li } from "./styled";

const addRequest = async (object, requestData) => {
  const data = {
    name: object.name,
    category: object.category,
    price: object.price,
    img: object.img,
  };
  requestData(data);
};

export const Card = (obj) => {
  const { requestDataState, requestData } = useContext(
    CreateContextApplication
  );
  const name = requestDataState.map((element) => element.name);
  const includes = name.includes(obj.name);

  return (
    <Li>
      <img className="img" src={obj.img} alt="" />
      <div className="div">
        <h2 className="h2">{obj.name}</h2>
        <span className="span">{obj.category}</span>
        <p className="p">R$ {Math.floor(obj.price)},00</p>
        <button onClick={() => addRequest(obj, requestData)}>
        Add to Cart        
        </button>
      </div>
    </Li>
  );
};
