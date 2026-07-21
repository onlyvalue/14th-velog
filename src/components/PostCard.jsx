import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImage from "../assets/IMG_0848.JPG";

const CardItem = styled.li`
  list-style: none;
`;

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;  
`;

const Card = styled.article`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
    transition: box-shadow .25s ease-in, transform .25s ease-in;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
    }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  padding-top: 52.1921%;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
    height: 133px;
    padding: 16px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
`;

const Text = styled.div`
  height: 115px;
`;

const Title = styled.h4`
    font-size: 16px;
    margin: 0 0 4px;
    line-height: 1.5;
    word-break: break-word;
    color: #212529;
    font-weight: bold;
`;

const Description = styled.p`
    margin: 0;
    color: #495057;
    font-size: 14px;
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Meta = styled.div`
    margin-top: auto;
    font-size: 12px;
    line-height: 1.5;
    color: #868e96;
`;

const Footer = styled.div`
    padding: 10px 16px;
    border-top: 1px solid #f1f3f5;
    display: flex;
    font-size: 12px;
    line-height: 1.5;
    justify-content: space-between;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    color: #868e96;
    font-size: 12px;
`;

const AuthorName = styled.span`
    color: #212529;
    font-size: 12px;
    font-weight: bolder;
`;

const Like = styled.div`
    display: flex;
    align-items: center;
    color: #212529;
    svg {
        width: 12px;
        height: 12px;
        margin-right: 8px;
    }
`;

function PostCard({ post }) {
  return (
    <CardItem>
        <CardLink to={`/posts/${post.id}`}>
            <Card>
                <ThumbnailWrapper>
                    <Thumbnail src={post.thumbnail} alt={post.title} />
                </ThumbnailWrapper>

                <Content>
                    <Text>
                        <Title>{post.title}</Title>
                        <Description>{post.summary}</Description>
                    </Text>

                    <Meta>
                        {post.date} · {post.comments}개의 댓글
                    </Meta>
                </Content>

                <Footer>
                    <Author>
                        <ProfileImage src={profileImage} alt="프로필 이미지" />
                        <span>by <AuthorName>{post.author.name}</AuthorName></span>
                    </Author>

                    <Like>
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"></path></svg> {post.likes}
                    </Like>
                </Footer>
            </Card>
        </CardLink>
    </CardItem>
    
  );
}

export default PostCard;