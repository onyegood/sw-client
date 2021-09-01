import { Container } from 'reactstrap';
import { colors } from '../../theme/colors';
import styled from 'styled-components';

export const LoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colors.black};
  overflow: hidden;
  margin-top: 10%;

  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, ${colors.white});
    animation: animate 2s linear infinite;
    margin-bottom: 20px;

    @keyframes animate {
      0% {
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      background: #000;
      border-radius: 50%;
      z-index: 1000;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: linear-gradient(45deg, transparent, transparent 40%, ${colors.white});
      border-radius: 50%;
      z-index: 1000;
      z-index: 1;
      filter: blur(30px);
    }
  }
`;
