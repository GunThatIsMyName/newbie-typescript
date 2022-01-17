import styled from "styled-components";

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:20px;
    background:#222;
    width:100%;
    height:auto;
    padding:20px 60px;
    box-sizing:border-box;
    color:#fff;

    @media (min-width:991px){
        grid-template-columns:repeat(6,1fr);
    }
`;