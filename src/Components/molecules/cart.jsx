import styled from "styled-components";
import Imagen from "../atoms/Imagen";
import Information from "../atoms/formation";
import Title from "../atoms/Title";

const StyledDiv = styled.div`
  background-color: #3d3d3d;
  border-radius: 15px;
  margin: 13px auto;  
  width: 48%;
  display: flex;
  max-height: 225px;
`;

const StyledContainerImage = styled.div`
  border-radius: 8px 0 0 8px;
  margin: 0;
  width: 280px;
  height: 100%;
`;

const StyledContainerData = styled.div`
  padding: 1%;
  border-radius: 8px;
  width: 80%;
`;

function Cart({ id, name, image, ki, maxKi, race, gender, affiliation }) {
    return (
        <StyledDiv key={id}>
            <StyledContainerImage>
                <Imagen src={image} alt={name} />
            </StyledContainerImage>

            <StyledContainerData>
                <Title text={name} />
                <Information text={`Race: ${race}`} />
                <Information text={`Gender: ${gender}`} />
                <Information text={`Ki: ${ki}`} />
                <Information text={`Max Ki: ${maxKi}`} />
                <Information text={`Affiliation: ${affiliation}`} />
            </StyledContainerData>
        </StyledDiv>
    );
}

export default Cart;