import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import imagemIA from "../../imagens/ia.png";
import imagemPy from "../../imagens/python.png";
import imagemJs from "../../imagens/javascript.png";



const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const URl_quiz = "http://localhost:5173/";

  return (
    
    
    
    <C.Container>
      <C.Separador onClick={() => [navigate(URl_quiz)]}>
        <img src={imagemIA} alt= ""/>
        <img src={imagemPy} alt= ""/>
        <img src={imagemJs} alt= ""/>
      </C.Separador>
      
      <C.Separador>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
           Sair
        </Button>
        <Button Text={"Ir para o quiz"} onClick={() => [navigate(URl_quiz)]} >
          Ir para o quiz
        </Button>
      </C.Separador>

    </C.Container>
  );
};

export default Home;
