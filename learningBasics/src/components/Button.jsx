import styled from 'styled-components';

export const Button = styled.button`
    padding:2rem;
    background-color: #fff;
    border:2px solid black;
    color:black;
    cursor:pointer;
    &:hover{
        background-color: black;
        color: white;
        transition: 0.5s;
    }
`;

export const FancyButton = styled(Button)`
    background-color: #000;
    color: white;
    &:hover{
        background-color:white;
        color: black;
        transition: 0.5s;
    }
`
export const FancyBtn = styled(Button)`
    background-color: ${(props) => props.$variant === 'light' ? "red":"black"};
    color: white;
    &:hover{
        background-color:white;
        color: black;
        transition: 0.5s;
    }
`

