import { Link, useNavigate } from "react-router-dom";
import { HeaderStyled } from "./styles";
import img from "../../assets/logo2.png";
import carrinho from "../../assets/shopping-cart.png"

export function Header({ setModal, cadastro, logout, setModalRequest }) {
    const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <HeaderStyled>
      <div className="div-int">
        <div className="aling-item">
          <img src={img} alt=""/>
        </div>
        <div>
          {setModalRequest && <img src={carrinho} className="carrinho" onClick={() => setModalRequest(true)}/>}
          {cadastro && <Link to={"/register"}>{cadastro}</Link>}
          {cadastro && (
            <button className="btnLogin" onClick={() => setModal(true)}>
              Login
            </button>
          )}
          {logout && <button className="logout" onClick={() => Logout()}>Login</button>}
        </div>
      </div>
    </HeaderStyled>
  );
}
