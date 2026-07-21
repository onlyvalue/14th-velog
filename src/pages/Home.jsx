import HomeTab from "../components/HomeTab";
import dummyData from "../data/dummy_data";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import HomeHeader from "../components/HomeHeader";


const Main = styled.main`
  max-width: 1376px;
  margin: 0 auto;
  padding: 2rem;
`;

const PostGrid = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

function Home() {
  return (
    <>
        <HomeHeader />
        <HomeTab />

        <Main>
            <PostGrid>
                {dummyData.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </PostGrid>
        </Main>
    </>
    
  );
}

export default Home;