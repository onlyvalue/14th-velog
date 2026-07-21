import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const HeaderInner = styled.div`
  width: 1376px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  svg {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }

    text-decoration: none;
    color: #212529;
`;

const BlogTitle = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 21px;
  font-family: "Fira Mono", monospace;
  font-weight: bold;
`;

const UserName = styled.span`
  font-size: 21px;
  font-family: "Fira Mono", monospace;
  font-weight: bold;
`;

const Log = styled.span`
  font-weight: 500;
  margin-left: 4px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
`;

const IconButton = styled.button`
  border: none;
  outline: none;
  background: transparent;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  margin-right: ${(props) => (props.$mr ? "4px" : "0")};
`;

const LoginButton = styled.button`
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  border-radius: 16px;

  background: #212529;
  color: #fff;

  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 700;

  margin-left: 8px;
`;

function DetailHeader({ post }) {
  return (
    <Header>
      <HeaderInner>
        <Left as={Link} to="/">
            <svg viewBox="0 0 192 192" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z" fill="currentColor"></path></svg>
            <BlogTitle>
                <UserName>{post.author.name}</UserName>
                <Log>.log</Log>
            </BlogTitle>
        </Left>

        <Right>
          <IconButton $mr>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M4 19v-2h2v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h2v2H4Zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z"></path>
            </svg>
          </IconButton>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="m19.326 20.712-5.809-5.808a5.693 5.693 0 0 1-1.765.98 6.394 6.394 0 0 1-2.133.354c-1.849 0-3.414-.64-4.697-1.923C3.641 13.033 3 11.468 3 9.619c0-1.849.637-3.414 1.91-4.697C6.183 3.641 7.744 3 9.593 3c1.866 0 3.44.64 4.723 1.922 1.282 1.283 1.922 2.848 1.922 4.697 0 .75-.117 1.46-.352 2.132a6.052 6.052 0 0 1-.982 1.793l5.834 5.808a.888.888 0 0 1 .262.654c0 .261-.096.497-.288.706a.944.944 0 0 1-.693.288.945.945 0 0 1-.693-.288Zm-9.707-6.436c1.29 0 2.39-.453 3.297-1.36s1.36-2.006 1.36-3.297c0-1.308-.453-2.411-1.36-3.31-.907-.898-2.006-1.347-3.297-1.347-1.308 0-2.411.45-3.309 1.347-.898.899-1.348 2.002-1.348 3.31 0 1.29.45 2.39 1.348 3.297.898.907 2.001 1.36 3.31 1.36Z"></path>
            </svg>
          </IconButton>
          <LoginButton>로그인</LoginButton>
        </Right>
      </HeaderInner>
      
    </Header>
  );
}

export default DetailHeader;