import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import MiniLogo from '../../assets/MiniLogo.svg';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  
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

  @media (max-width: 440px) {
    justify-content: center;
    
  }

`;

const LogoWeb = styled.div`
  img {
    width: 220px;
  }

  @media (max-width: 440px) {
    display: none;
  }
`;

const LogoMobile = styled.div`

  img {
    width: 77px;
    display: none;

    @media (max-width: 441px) {
      display: block;
      
    }
  }

`;


const HeaderCategoryContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 440px) {
    display: none;
  }


  a {
    font-size: 2.2vmin;
    color: #737d8f;
    cursor: pointer;
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
  cursor: pointer;

  @media (max-width: 440px) {
    display: none;
  }
  
`;

const Header = () => {
 
  return (
    <>
      <HeaderContainer>
        <HeaderDecoration></HeaderDecoration>
        <HeaderContent>
          <LogoWeb>
            <img src={Logo} alt="" />
          </LogoWeb>
          <LogoMobile>
            <img src={MiniLogo} alt="" />
          </LogoMobile>
        
          <HeaderCategoryContainer>
            <a>Sobre</a>
            <a>Benefícios</a>
            <a>Demonstração</a>
            <a>Contato</a>
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
