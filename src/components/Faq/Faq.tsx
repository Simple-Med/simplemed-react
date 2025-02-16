import styled from "styled-components";
import { FaqCard } from "../FaqCard";

const FaqContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (max-width: 440px) {
    gap: 20px;
}

  h2 {
    font-size: 6vmin;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
  }
`;

const Faq = () => {
  return (
    <>
      <FaqContainer>
        <h2>PERGUNTAS FREQUENTES</h2>
        <FaqCard
          title="Como funciona a ferramenta?"
          text="Nossa ferramenta simplifica o processo de cadastro de pacientes e aprovação de dados, permitindo que você economize tempo e foque no atendimento."
        />

        <FaqCard
          title="É seguro? Como os dados são protegidos?"
          text="Sim, a segurança dos dados é nossa prioridade. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança para garantir a proteção dos dados de seus pacientes."
        />

        <FaqCard
          title="Preciso instalar algo no meu celular?"
          text="Não, nossa ferramenta é totalmente baseada na web e pode ser acessada de qualquer dispositivo com acesso à internet, sem a necessidade de instalação."
        />

        <FaqCard
          title="Tem custo?"
          text="Oferecemos diferentes planos para atender às suas necessidades. Entre em contato conosco para saber mais sobre nossos preços e condições."
        />
      </FaqContainer>
    </>
  );
};

export { Faq };
