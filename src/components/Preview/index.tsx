import { StyledPreview, TextPreview, VideoPreview, FigmaDesnecessario, ContainerVideo } from "./styles";

const Preview = () => {
    return(
        <StyledPreview>
            <TextPreview>
            <h1>Mas e como funciona?</h1>
            <p>blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah</p>
            </TextPreview>
            <ContainerVideo>
                <VideoPreview/>
                <FigmaDesnecessario/>
            </ContainerVideo>
        </StyledPreview>
    )
};

export default Preview;
