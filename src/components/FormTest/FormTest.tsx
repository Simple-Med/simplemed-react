import { useState } from "react";
import styled from "styled-components";
import * as forms from "../../utils/forms.ts";

const FormTestContainer = styled.section`
  width: 40%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.2);
  padding: 40px 0px;
  margin-bottom: 140px;

  @media (max-width: 440px) {
    width: 350px;
  }
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
    text-align: center;

    @media (max-width: 440px) {
      font-size: 26px;
    }
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

    @media (max-width: 440px) {
      font-size: 14px;
    }
  }
`;

const CtaButton = styled.button`
  font-family: "Poppins";
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

  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

const FormTest = () => {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome Sobrenome",
    },
    email: {
      value: "",
      id: "email",
      name: "email",
      type: "text",
      placeholder: "nome@email.com",
      isValid: true,
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um email válido",
    },
    especiality: {
      value: "",
      id: "especiality",
      name: "especiality",
      type: "text",
      placeholder: "Especialidade Médica",
    },
  });

  function handleInputChange(e) {
    const result = forms.update(
      formData,
      e.target.name,
      e.target.value
    );
    setFormData(result);
  }


  return (
    <FormTestContainer>
      <FormContent>
        <h3>Cadastre-se para testar</h3>

        <InputContainer>
          <label>Nome</label>
          <input
            {...formData.name}
            onChange={handleInputChange}
            value={formData.name.value}
          />
        </InputContainer>

        <InputContainer>
          <label>Email</label>
          <input
            {...formData.email}
            onChange={handleInputChange}
            value={formData.email.value}
          />
        </InputContainer>

        <InputContainer>
          <label>Especialidade Médica</label>
          <input
            {...formData.especiality}
            onChange={handleInputChange}
            value={formData.especiality.value}
          />
        </InputContainer>

        <CtaButton>Solicitar</CtaButton>
      </FormContent>
    </FormTestContainer>
  );
};

export { FormTest };
