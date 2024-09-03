import styled from "styled-components";

const PStyled = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    color: white;
    margin-left: 5px;
    margin-top: 0;

    &:hover {
        color: orange;
    }
`;

function formation(props) {
    return <PStyled>{props.text}</PStyled>;
}

export default formation;
