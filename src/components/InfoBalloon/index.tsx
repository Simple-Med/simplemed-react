import { StyledDiv } from './styles';

type Props = {
  title: string;
  text: string;
  imageSrc: string;

}

const InfoBalloon = ({title, text, imageSrc }: Props) => {
  return (
  
    <StyledDiv>
      <img src={imageSrc} alt={title} />
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledDiv>
    
    
  );
};


export default InfoBalloon;