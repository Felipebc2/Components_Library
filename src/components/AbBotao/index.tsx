import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: #EB9B00 solid 2px;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: #B87900;
        border: #B87900 solid 2px;
    }
`


export const AbBotao = () => {
    return (
        <BotaoEstilizado>Clique aqui!</BotaoEstilizado>
    )
}