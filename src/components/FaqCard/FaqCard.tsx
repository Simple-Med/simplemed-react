import styled from "styled-components";

const FaqCardContainer = styled.div`
  padding: 40px;
  background-color: #DAE7F9;
  border-radius: 20px;

  h4{
  font-size: 3vmin;
  color: #2C6262;
  }

p{
font-size: 2.5vmin;
color: #0B132A;
}
`


type Props = {
  title: string;
  text: string;
}

const FaqCard = ({title, text}: Props) => {
  return(
    <>
      <FaqCardContainer>
        <h4>{title}</h4>
        <p>{text}</p>
      </FaqCardContainer>
    </>
  )
}

export { FaqCard };