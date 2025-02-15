import styled from "styled-components";

const FormTestContainer = styled.section`
  width: 40%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.2);
  padding: 40px 0px;
  margin-bottom: 140px;
`;

const FormContent = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h3 {
    font-size: 3.5vmin;
    font-weight: 400;
    color: #2c6262;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #0b132a;
  }

  input {
    width: 100%;
    padding: 15px 15px;
    border: 2px solid #737d8f;
    border-radius: 10px;
  }

  input::placeholder {
    font-size: 1.7vmin;
    color: #737d8f;
  }
`;

const CtaButton = styled.button`
  margin-top: 20px;
  padding: 15px 10px;
  font-size: 2vmin;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #2c6262;
  width: 100%;
  font-weight: 600;
  box-shadow: 0 12px 20px rgba(67, 211, 208, 0.3);
  cursor: pointer;
`;

const FormTest = () => {
  return (
    <>
      <FormTestContainer>
        <FormContent>
          <h3>Cadastre-se para testar</h3>

          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome Sobrenome"
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="nome@email.com"
            />
          </InputContainer>
          <InputContainer>
            <label>Especialidade Médica</label>
            <input
              type="text"
              name="especiality"
              id="especiality"
              placeholder="Especialidade Médica"
            />
          </InputContainer>

          <CtaButton>Solicitar</CtaButton>
        </FormContent>
      </FormTestContainer>
    </>
  );
};

export { FormTest };
