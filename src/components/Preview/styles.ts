import styled from "styled-components";

export const StyledPreview = styled.div`
margin-top: 120px;
margin-bottom: 140px;
height: 387px;
width: 100%;
display: flex;
justify-content: center;
gap: 80px;

@media (max-width: 440px) {
    flex-direction: column;
}
`
export const TextPreview = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
text-align: left;
height: 212px;
width: 480px;

@media (max-width: 440px) {
    width: 100%;
    padding: 0px 40px;
    
}
h1 {
    color: #2C6262;
    font-size: 48px;
    font-weight: 600;
    line-height: 100%;

    @media (max-width: 440px) {
    font-size: 36px;
}
}

p {
    color: #0B132A;
    font-size: 20px;
    font-weight: 400;
    line-height: 115%;

    @media (max-width: 440px) {
    font-size: 18px;
}
}



`
export const ContainerVideo = styled.div`
position: relative;
height: 387px;
width: 509px;

@media (max-width: 440px) {
    
    
}
`
export const VideoPreview = styled.div`
height: 275px;
width: 430px;
border-radius: 20px;
background-color: #DAE7F9;
position: absolute;
z-index: 1;

@media (max-width: 440px) {
    height: 194px;
    width: 304px;
    margin-left: 50px;
}
`
export const FigmaDesnecessario = styled.div`
height: 384px;
width: 275px;
background-color: #2F5067;
border-radius: 20px;
transform:  rotate(-70.772deg);
position: absolute;
top: -10%;
left: 28%;
z-index: 0;
@media (max-width: 440px) {
    height: 272px;
    width: 195px;
}

`