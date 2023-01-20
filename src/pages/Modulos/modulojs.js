import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import { Title } from "../Home/styles";




const Modulojs = () => {

    const navigate = useNavigate();
    const { home } = useAuth();


  return (
    <div>
        <Title>Titulo</Title>
    </div>
    

 );
};
export default Modulojs;