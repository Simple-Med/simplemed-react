import Slider from 'react-slick';
import styled from 'styled-components';

export const StyledBlock2 = styled.div`
background-color: #DAE7F9;
height: 600px;
width: 100%;
padding: 30px 0px 80px 0px;
justify-content: center;
align-items: center;

display: none;

@media (max-width: 440px) {
  display: block;
}
`

export const TitleBlock = styled.h2`
  color: #2C6262;
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 30px;
`

export const BalloonGrupo = styled.div`
display: flex;
gap: 40px;
justify-content: center;


`
export const CustomSlider = styled(Slider)`
position: relative;

  @media (max-width: 440px) {
    .slick-slide {
      display: flex;
      justify-content: center; /* Centraliza o card horizontalmente */
      align-items: center; /* Centraliza o card verticalmente */
      margin-bottom: 20px;
    }
  }
`
