import styled from "styled-components";

const PStyled = styled.p`
    font-size: 90px;
    font-weight: 800;
`;

function TitleHeader({ text }) {
    return <PStyled>{text}</PStyled>;
}

export default TitleHeader;