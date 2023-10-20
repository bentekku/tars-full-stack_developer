import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 12px 0;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 21px;
  font-weight: 600;
  color: #000;
`;
const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 38px;
  font-weight: 700;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 32%;
  height: 75%;
  border-radius: 18px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.03);
  border: 2px solid rgba(0, 0, 0, 0.04);
`;
const Search = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 400;
  border: none;
  background-color: rgba(0, 0, 0, 0.03);

  transition: all 0.3s ease-in-out;
  &::-webkit-search-cancel-button {
    filter: grayscale(100%);
    filter: brightness(0);
  }
  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 100%;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.64);
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Left>
        <Logo className="material-symbols-outlined">motion_photos_on</Logo>
        ImgDrop
      </Left>
      <Center>
        <Search type="search" />
      </Center>
      <Right>
        <a href="https://www.linkedin.com/in/khan-shadab/" target="_blank">
          <ProfilePic src="/public/profile-pic.png" />
        </a>
      </Right>
    </Header>
  );
};

export default Navbar;
