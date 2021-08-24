import { Container } from "reactstrap";
import { IconSprite } from "../assets";
import { colors } from "../theme/colors";
import styled from "styled-components";

export const CardsContainer = styled(Container)`
  .thumbnail-container {
    border-radius: 10px;
    cursor: pointer;
    img {
      width: 100%;
      max-height: 200px;
    }
    .image-container {
      position: relative;
    }
    .time {
      background-color: red;
      height: 40px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .card-content-container {
    padding: 5px;
    float: right;
    width: 100%;
    margin-left: -4px;
    h5 {
      font-size: 1em;
      line-height: 1.15em;
      margin-top: 5px;
      text-transform: uppercase;
    }
    p {
      color: ${colors.red};
      cursor: pointer;
      font-size: 0.75rem;
      text-transform: uppercase;
    }
    .play-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .play {
      display: inline-block;
      margin: -1.7em -0.2em -0.5em -0.5em;
      background-repeat: no-repeat;
      background-image: url(${IconSprite});
      background-size: 1000% 200%;
      width: 1.7em;
      height: 1.7em;
    }
  }
`