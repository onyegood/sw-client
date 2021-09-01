import { Container } from 'reactstrap';
import { bg, iconSprite } from '../assets';
import { colors } from '../theme/colors';
import styled, { createGlobalStyle } from 'styled-components';

const CardsContainer = styled(Container)`
  .thumbnail-container {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    height: 150px;
    background-color: ${colors.primaryLight};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 10px;
    h1 {
      padding-top: 20px;
      color: #3030307a;
    }
    img {
      width: 100%;
      max-height: 200px;
    }
    .image-container {
      /* position: relative; */
    }
    .time {
      background-color: red;
      height: 40px;
      /* position: absolute; */
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
      font-size: 1.3em;
      line-height: 1.15em;
      margin-top: 5px;
      text-transform: uppercase;
    }
    p {
      color: ${colors.black};
      /* cursor: pointer; */
      /* font-size: 0.75rem;
      text-transform: uppercase; */
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
      background-image: url(${iconSprite});
      background-size: 1000% 200%;
      width: 1.7em;
      height: 1.7em;
    }
    .other-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
    *, body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }

    body {
      background-image: url(${bg});
      background-color: ${colors.primary} !important;
      background-size: auto;
      background-blend-mode: overlay;
    }

    a,
    p {
      font-family: 'Roboto', sans-serif;
    }
    .card{
      border: 0 !important;
    }
`;

export { CardsContainer, GlobalStyle };
