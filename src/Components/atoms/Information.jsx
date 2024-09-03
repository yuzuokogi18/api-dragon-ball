import styled from "styled-components";

const PStyled = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    color: #bebebe;
    margin-left: 5px;
    margin-top: 22px;
`;

function Information({ text }) {
    return <PStyled>{text}</PStyled>;
}

export default Information