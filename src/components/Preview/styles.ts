import styled from "styled-components";

export const StyledPreview = styled.div`
margin-top: 120px;
margin-bottom: 140px;
height: 387px;
width: 100%;
display: flex;
justify-content: center;
gap: 80px;
`
export const TextPreview = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
text-align: left;
height: 212px;
width: 480px;
h1 {
    color: #2C6262;
    font-size: 48px;
    font-weight: 600;
    line-height: 100%;
}

p {
    color: #0B132A;
    font-size: 20px;
    font-weight: 400;
    line-height: 115%;
}
`
export const ContainerVideo = styled.div`
position: relative;
height: 387px;
width: 509px;
`
export const VideoPreview = styled.div`
height: 275px;
width: 430px;
border-radius: 20px;
background-color: #DAE7F9;
position: absolute;
z-index: 1;
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

`