import styled from "styled-components";

export const BackGround = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 15px;
`;

export const Card = styled.div`
    width: 600px;
    height: auto;
    margin: 30px auto;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px 0 #bbb;
    padding: 15px;
`;

export const ProfileImage = styled.img`
    width: 110px;
    height: 110px;
    background-color: gray;
    border-radius: 50%;
    margin: auto;
    display: block;
`;

export const Title = styled.h1`
    font-weight: bolder;
    font-size: 30px;
    width: 100%;
    text-align: center;
`;

export const Subtitle = styled.h2`
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: #555;
`;

export const Description = styled.p`
    font-weight: 500;
    color: #333;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const Comments = styled.h1`
    font-weight: bolder;
    font-size: 25px;
`;

export const Comment = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 10px 0;
`;

export const CommentImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: gray;
`;

export const Commenter = styled.p`
    font-weight: bold;
    margin: 0;
`;

export const CommentContent = styled.p`
    color: #666;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SocialLink = styled.button`
    background: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 90px;
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    margin: 0 5px;
`;