import { useParams } from "react-router-dom";
import dummyData from "../data/dummy_data";
import DetailHeader from "../components/DetailHeader";
import styled from "styled-components";
import avatarImg from "../assets/IMG_0848.JPG";
import FloatingBar from "../components/FloatingBar";


const Main = styled.main`
    width: 100%;
    background-color: #fff;
    padding-top: 88px;
`;

const PostContainer = styled.div`
    width: 768px;
    margin-left: auto;
    margin-right: auto;
`;

const PostHeader = styled.div`
    margin-bottom: 64px;
`;

const Title = styled.h1`
    font-size: 48px;
    line-height: 1.5;
    letter-spacing: -0.192px;
    font-weight: 800;
    color: #212529;
    margin-bottom: 32px;
    word-break: keep-all;
    overflow-wrap: break-word;
    transition: color 0.125s ease-in;
`;

const Meta = styled.div`
    font-size: 16px;
    color: #495057;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

const AuthorName = styled.span`
    font-weight: bold;
    color: #212529;
`;

const Dot = styled.span`
  margin: 0 8px;
  color: #868e96;
`;

const Date = styled.span`
  color: #868e96;
`;

const Summary = styled.h2`
    line-height: 1.5;
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: bold;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
`;

const PostContent = styled.div`
    width: 768px;
    margin: 5rem auto 0px;
`;

const Content = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;

    font-size: 1.125rem;
    color: #212529;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
`;

const AuthorCard = styled.div`
    margin-top: 16rem;
    margin-bottom: 6rem;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    unicode-bidi: isolate;

    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

const AuthorLeft = styled.div`
    display: flex;
    align-items: center;
`;

const FollowButton = styled.button`
    width: 96px;
    height: 32px;

    border: 1px solid #12b886;
    border-radius: 20px;

    background: white;
    color: #12b886;

    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;


const Avatar = styled.img`
    width: 128px;
    height: 128px;

    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
`;

function Detail() {
    const { id } = useParams();
    const post = dummyData.find((item) => item.id === id);

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <DetailHeader post={post} />

            <Main>
                <FloatingBar post={post} />
                <PostContainer>

                <PostHeader>
                    <Title>{post.title}</Title>

                    <Meta>
                    <AuthorInfo>
                        <AuthorName>{post.author.name}</AuthorName>
                        <Dot>·</Dot>
                        <Date>{post.date}</Date>
                    </AuthorInfo>

                    <FollowButton>팔로우</FollowButton>
                    </Meta>

                </PostHeader>

                <PostContent>
                    <Summary>{post.summary}</Summary>
                    <Content>{post.content}</Content>
                </PostContent>

                <AuthorCard>
                    <AuthorLeft>
                    <Avatar src={avatarImg} alt="프로필 이미지" />
                    <AuthorName>{post.author.name}</AuthorName>
                    </AuthorLeft>

                    <FollowButton>팔로우</FollowButton>
                </AuthorCard>

                </PostContainer>
            </Main>
            </>
    );
}

export default Detail;