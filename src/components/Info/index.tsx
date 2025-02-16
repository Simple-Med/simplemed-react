import { StyledBlock, TitleBlock, BalloonGrupo } from "../Info/styles";
import InfoBalloon from "../InfoBalloon";
import  WatchIcon  from '../../assets/WatchIcon.png';
import  LockIcon  from '../../assets/LockIcon.png';
import  ZapIcon  from '../../assets/ZapIcon.png';
import  TabIcon  from '../../assets/TabIcon.png';

const InfoMobile = () => {
return(
    <StyledBlock>
        <TitleBlock>
            BENEFÍCIOS
        </TitleBlock>
        <BalloonGrupo>
        <InfoBalloon title="Economia de tempo no atendimento" text="Reduza o tempo gasto em tarefas administrativas e foque no que realmente importa: seus pacientes." imageSrc={WatchIcon}/>
        <InfoBalloon title="Armazenamento seguro dos dados" text="Garanta a segurança e privacidade dos dados de seus pacientes com nossa plataforma segura." imageSrc={LockIcon}/>
        <InfoBalloon title="Facilidade na comunicação" text="Comunique-se de forma rápida e eficiente com seus pacientes através da integração com o WhatsApp" imageSrc={ZapIcon}/>
        <InfoBalloon title="Fluxo de cadastro intuitivo" text="Cadastre seus pacientes de forma rápida e fácil, com um fluxo intuitivo e sem complicações." imageSrc={TabIcon}/>
        </BalloonGrupo>
    </StyledBlock>
)
};

export default InfoMobile;