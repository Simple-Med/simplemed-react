import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleBlock, } from "../Info/styles";
import { CustomSlider, StyledBlock2 } from './styles';
import InfoBalloon from "../InfoBalloon";
import WatchIcon from '../../assets/WatchIcon.png';
import LockIcon from '../../assets/LockIcon.png';
import ZapIcon from '../../assets/ZapIcon.png';
import TabIcon from '../../assets/TabIcon.png';

const Info = () => {
  // Configurações do Slider
  const settings = {
    dots: true, // Mostra os pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Número de slides visíveis
    slidesToScroll: 1, // Número de slides a serem rolados por vez
    responsive: [
      {
        breakpoint: 440, // Configurações para telas menores que 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Configurações para telas menores que 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledBlock2>
      <TitleBlock>BENEFÍCIOS</TitleBlock>
    
        
        <CustomSlider {...settings}>
          <InfoBalloon
            title="Economia de tempo no atendimento"
            text="Reduza o tempo gasto em tarefas administrativas e foque no que realmente importa: seus pacientes."
            imageSrc={WatchIcon}
          />
          <InfoBalloon
            title="Armazenamento seguro dos dados"
            text="Garanta a segurança e privacidade dos dados de seus pacientes com nossa plataforma segura."
            imageSrc={LockIcon}
          />
          <InfoBalloon
            title="Facilidade na comunicação"
            text="Comunique-se de forma rápida e eficiente com seus pacientes através da integração com o WhatsApp."
            imageSrc={ZapIcon}
          />
          <InfoBalloon
            title="Fluxo de cadastro intuitivo"
            text="Cadastre seus pacientes de forma rápida e fácil, com um fluxo intuitivo e sem complicações."
            imageSrc={TabIcon}
          />
        </CustomSlider>
      
    </StyledBlock2>
  );
};

export default Info;