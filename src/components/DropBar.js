import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const DropDownMain = styled.div`
position: fixed;
z-index: 101;
width: 100%;
height: 100%;
background-color: #cd852f;
display: grid;
align-items: center;
top: ${({open})=>(open ? '0' :'-100%')};
left: 0;
transition: 0ms.3 ease-in-out;
opacity: ${({open})=>(open ? '1' :'0')};
`;

const Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
cursor: pointer;
outline: none;
`;

const CloseIcon = styled(FaTimes)`
color: red;
`;

const DropDownWrap = styled.div`

`;

const DropDownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width:775px){
    grid-template-rows: repeat(4,60px);
}
`;

const DropDownLink = styled(Link)`
display: flex;
color:wheat;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 1.5rem;
list-style: none;
cursor: pointer;
transition: 0.5s ease-in-out;
`;
const Btn = styled(Link)`

`;

const DropBar = ({open,view}) => {
    return (
        <DropDownMain open={open} onClick={view}>
            <Icon onClick={view}>
                <CloseIcon />
            </Icon>
            <DropDownWrap>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                            </DropDownLink>
                    ))}
                </DropDownMenu>
                <Btn>
                    <Button primary="true" round="true" to="/contact">Contact Us</Button>
                </Btn>
            </DropDownWrap>
        </DropDownMain>
    )
}

export default DropBar
