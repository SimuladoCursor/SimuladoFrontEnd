import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import imagemIA from "../../imagens/ia.png";
import imagemPy from "../../imagens/python.png";
import imagemJs from "../../imagens/javascript.png";
import quizimg from "../../imagens/quiz.png";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  

  
  return (
    
      
    <C.Container>
      
      <C.Separador onClick={() => [navigate()]}>
       <a href="https://www.google.com/"><img src={imagemIA} alt= ""/></a>
        <img src={imagemPy} alt= ""/>
        <img src={imagemJs} alt= ""/>
      </C.Separador>
    
      
      <C.Separador>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
           Sair
        </Button>
        <a href="http://localhost:5173/"><img src={quizimg} alt="" /> </a>

      </C.Separador>

    </C.Container>
  );
};

export default Home;
