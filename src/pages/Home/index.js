import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import imagemIA from "../../imagens/ia.png";
import imagemPy from "../../imagens/python.png";
import imagemJs from "../../imagens/javascript.png";
import quizimg from "../../imagens/quiz.png";
import Modulojs from "../Modulos/modulojs";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  

  
  return (
    
      
    <C.Container>
      
      
      <C.Separador onClick={() => [navigate()]}>
       <a href="https://www.oracle.com/br/artificial-intelligence/machine-learning/what-is-machine-learning/"><img src={imagemIA} alt= ""/></a>
       <a href="https://www.w3schools.com/python/"><img src={imagemPy} alt= ""/></a>
       <a href="https://www.w3schools.com/js/js_intro.asp"><img src={imagemJs} alt= ""/></a>
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
