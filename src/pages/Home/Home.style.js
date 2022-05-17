import styled from "styled-components";
import img from "../../assets/photo.avif";

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url(${img});
  opacity: 0.5;
  box-shadow: 0em 1em 1.25em 0em rgba(0, 0, 0, 1);
`;

export const HeroImg = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  max-height: 50vh;
  box-shadow: 0em 0.5em 1.25em 0em rgba(0, 0, 0, 1);
`;

export const WrapCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  width: calc((100% - 32px) / 3);
  height: 350px;
  padding: 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.color.white};
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-size: cover;
  &&:hover {
    && div {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

export const CardTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  min-height: 30px;
  line-height: 30px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const EmptyShowtime = styled.div`
  margin-top: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  background: ${(props) => props.theme.color.white};
`;
