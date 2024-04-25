import React from "react";
import styled, { css } from "styled-components";

export interface AbButtonProps {
    texto: string;
    tipo: 'primario' | 'secundario';
    onClick?: ()=> void;
}

const BotaoEstilizado = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps)=> props.tipo === 'primario' ? '#EB9B00' : '#fff' };
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbButtonProps)=> props.tipo === 'primario' ? '#fff' : '#EB9B00' };
    font-size: 20px;
    cursor: pointer;
    ${(props: AbButtonProps)=> props.tipo === 'primario'
            ?
            css`
        &:hover {
            background: #B87900;
            border: 2px solid #B87900;
    }
        `
            : 
            css`
        &:hover {
            background: #fff;
            border: 2px solid #B87900;
            color: #b87900
    }
        ` 
    };
`


export const AbButton = ({texto, tipo='primario', onClick}: AbButtonProps) => {
    return (<BotaoEstilizado tipo = {tipo} onClick = {onClick} >
        {texto}
    </BotaoEstilizado>)
}

