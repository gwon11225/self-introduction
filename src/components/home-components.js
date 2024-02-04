import { Comment, CommentImage, Content, Commenter, CommentContent, ProfileImage, Title, Subtitle, Description, SocialLink } from "./styled-component"

export const CommentComponent = (props) => {
    return (
        <Comment>
          <CommentImage src={props.src}/>
          <Content>
            <Commenter>{props.name}</Commenter>
            <CommentContent>{props.comment}</CommentContent>
          </Content>
        </Comment>
    )
}

export const Introduction = (props) => {
    return (
        <>
        <ProfileImage src={props.profile}/>
        <Title>Jiyong Gwon</Title>
        <Subtitle>Back-End Developer</Subtitle>
        <div style={{textAlign: "center"}}>
            <SocialLink onClick={goGithub}>Github</SocialLink>
            <SocialLink onClick={goBlog}>Blog</SocialLink>
            <SocialLink onClick={goPortfolio}>Portfolio</SocialLink>
        </div>
        
        <Description>
          <div>
            <strong>자기소개 : </strong>
            언제나 자신과 회사 성장을 원하고 성장을 위해서라면 어떤일이든 마다하지 않는 개발자.
            개발을 즐기며 하루하루 노력하고 배울 준비가 된 주니어 개발자
          </div>
          <div>
            <strong>사용 기술 : </strong>
            JAVA, PYTHON, SPRING BOOT, FAST API, JPA, MYBATIS, UBUNTU, AWS
          </div>
        </Description>
        </>
    )
}

function goGithub() {
    window.location.href = "https://github.com/gwon11225";
}

function goBlog() {
    window.location.href = "https://anypeople.tistory.com"
}

function goPortfolio() {
    window.location.href = "https://www.notion.so/Backend-Developer-f241998b720649c591cf39314589ac33?pvs=4";
}