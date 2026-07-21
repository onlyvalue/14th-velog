import styled from "styled-components";
import { useState } from "react";

const FloatingContainer = styled.div`
    position: fixed;
    left: 240px;
    top: 240px;

    display: block;
    unicode-bidi: isolate;

    background: #F8F9FA;
    border: 1px solid #F1F3F5;
    border-radius: 2rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`;

const CircleButton = styled.button`
    height: 48px;
    width: 48px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #DEE2E6;
    border-radius: 1.5rem;
    color: #868E96;
    cursor: pointer;
    z-index: 5;

    color: ${({ $liked }) => ($liked ? "#fff" : "#868E96")};
    background: ${({ $liked }) => ($liked ? "#20C997" : "#fff")};
    border-color: ${({ $liked }) => ($liked ? "#20C997" : "#DEE2E6")};

    &:hover {
    color: ${({ $liked }) => ($liked ? "#fff" : "#212529")};
    border-color: ${({ $liked }) => ($liked ? "#20C997" : "#212529")};
    }
`;

const LikeCount = styled.span`
    margin-top: 0.5rem;
    color: #495057;
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
`;

function FloatingBar({ post }) {

  const [liked, setLiked] = useState(false);
  return (
    <FloatingContainer>
      <CircleButton $liked={liked} onClick={() => setLiked(!liked)}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
      </CircleButton>

      <LikeCount>{post.likes}</LikeCount>

      <CircleButton>
        <svg width="24" height="24" viewBox="0 0 24 24" class="share"><path fill="currentColor" d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"></path></svg>
      </CircleButton>
    </FloatingContainer>
  );
}

export default FloatingBar;