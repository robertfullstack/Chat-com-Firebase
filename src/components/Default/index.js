import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat Meet</C.Title>
      <C.Info>
        Converse por aqui!!
        {/* Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet. */}
      </C.Info>
    </C.Container>
  );
};

export default Default;
