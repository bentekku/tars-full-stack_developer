import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: auto;
  max-width: 520px;
  max-height: 620px;
  margin: 21px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e5e5;
`;

const ImgWrapper = styled.div`
  flex: 1;
  height: 77%;
  &:hover {
    cursor: zoom-in;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  height: 23%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 21px 16px;
  /* position: relative; */

  transition: all 0.2s ease-in-out;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const UserProf = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 100%;
  @media screen and (max-width: 736px) {
    height: 36px;
    width: 36px;
  }
`;
const Name = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #4f4f4f;
  @media screen and (max-width: 736px) {
    font-size: 14px;
  }
`;
const UserName = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #a7a7a7;
  font-style: italic;
  @media screen and (max-width: 736px) {
    font-size: 10px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Likes = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: #4f4f4f;
  font-size: 13px;
  font-weight: 700;
  span {
    font-size: 20px;
    font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 24;
  }
`;
const UnsplashBtn = styled.button`
  border: none;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    text-decoration: none;

    span {
      color: #000;
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
    }
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Picture = ({ photo }) => {
  const img = photo.urls.regular;
  const name = photo.user.name;
  const username = photo.user.username;
  const likes = photo.likes;
  const insta = photo.instagram_username;
  const downloads = photo.downloads;
  const userPfp = photo.user.profile_image.large;
  const imgHeight = photo.height;
  const imgWidht = photo.width;
  const unsplashLink = photo.links.html;

  const imgInfo = {
    img,
    name,
    username,
    likes,
    insta,
    downloads,
    userPfp,
    imgHeight,
    imgWidht,
    unsplashLink,
  };

  const calAspectRatio = (height, widht) => {
    const aspectRatio = height / widht;
    return aspectRatio;
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // for debugging
  // useEffect(() => {
  //   console.log("isModalOpen: ", modal);
  // }, [modal]);

  return (
    <>
      <Container
        style={{ aspectRatio: `${calAspectRatio(imgHeight, imgWidht)}/1` }}
      >
        <ImgWrapper onClick={() => toggleModal()}>
          <Img src={img} />
        </ImgWrapper>
        <Details>
          <Left>
            <UserProf src={userPfp} />
            <div>
              <Name>{name}</Name>
              <UserName>@{username}</UserName>
            </div>
          </Left>
          <Right>
            <Likes>
              <span className="material-symbols-outlined">favorite</span>
              {likes}
            </Likes>
            <UnsplashBtn>
              <a href={unsplashLink} target="_blank">
                <span
                  className="material-symbols-outlined"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  info
                </span>
              </a>
            </UnsplashBtn>
          </Right>
        </Details>
      </Container>
      {/* // MODAL */}
      {modal && (
        <Modal
          imgInfo={imgInfo}
          modal={modal}
          setModal={setModal}
          calAspectRatio={calAspectRatio}
        />
      )}
    </>
  );
};

export default Picture;
