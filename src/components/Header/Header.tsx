import styled from "styled-components";
import Logo from "../../assets/Logo.svg";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderDecoration = styled.div`
  background-color: #2f5067;
  height: 40px;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0px;

  img {
    width: 220px;
  }
`;

const HeaderCategoryContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  p {
    font-size: 2.2vmin;
    color: #737d8f;
  }
`;

const HeaderRequestDemonstrationButton = styled.button`
  border: 1px solid #2c6262;
  border-radius: 100px;
  color: #2c6262;
  font-size: 2.2vmin;
  outline: none;
  background-color: #fff;
  padding: 15px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderDecoration></HeaderDecoration>
        <HeaderContent>
          <img src={Logo} alt="Logo" />
          <HeaderCategoryContainer>
            <p>Sobre</p>
            <p>Benefícios</p>
            <p>Demonstração</p>
            <p>Contato</p>
          </HeaderCategoryContainer>
          <HeaderRequestDemonstrationButton>
            Solicitar Demonstração
          </HeaderRequestDemonstrationButton>
        </HeaderContent>
      </HeaderContainer>
      <div></div>
    </>
  );
};

export { Header };
