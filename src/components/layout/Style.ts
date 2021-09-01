import { Container } from 'reactstrap';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const LayoutContainer = styled(Container)`
  position: relative;
  .mobile-control {
    display: none;
  }
  .mobile-nave {
    display: none;
    background: #000000f7;
    position: absolute;
    height: 100vh;
    height: 100%;
    width: 100%;
    z-index: 1000;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      li {
        padding: 4px 38px;
        display: table-cell;
        width: auto;
        margin: 0;
        vertical-align: top;
        box-sizing: border-box;
        line-height: 3.5rem;

        a {
          color: ${colors.link};
          font-size: 0.85rem;
          p {
            margin: 0;
            padding: 0;
          }
          .link-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          &:hover {
            text-decoration: none;
          }
          &.active {
            color: ${colors.white};
          }
        }
      }
    }
  }
  .logo {
    img {
      width: 100px;
      height: 50px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
`;
