import { colors } from "../../../theme/colors";
import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  img {
    width: 203px;
    height: 88px;
  }

  .social-media-links {
    padding: 0 0 25px 25px;
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        float: left;
        padding: 0.7rem;
        padding-top: 0;

        a {
          font-size: 0.875rem;
          img {
            width: 20px;
            height: 20px;
          }
        }
        &:before {
          content: '';
          position: absolute;
          border-top: 1px solid ${colors.slash};
          width: 1px;
          height: 28px;
          background: ${colors.slash};
          right: 280px;
        }
      }
    }
  }
  .kids {
    background-color: ${colors.linkHover};
    margin-left: 25px;
    border-radius: 10px;
    img {
      width: 46px;
      height: 9px;
      margin: -3px 0px 0px -3px;
    }
  }
  .search-box {
    display: flex;
    align-items: center;
    margin-right: 20px;
    input {
      position: relative;
      width: 100%;
      border: 0;
      height: 40px;
      padding: 10px;
      font-size: 14px;
      background-color: ${colors.primaryLight};
      color: ${colors.secondary};
      &:focus {
        outline: none;
        background-color: ${colors.secondary};
      }
    }
    img {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 49px;
      cursor: pointer;
    }
  }
  .auth {
    margin-right: 20px;
    a {
      color: ${colors.link};
      -webkit-transition: color 200ms;
      -moz-transition: color 200ms;
      transition: color 200ms;
      &:hover {
        text-decoration: none;
        color: #b9b8b8;
      }
    }
  }
  .slash {
    color: ${colors.slash};
    margin-left: 5px;
    margin-right: 5px;
  }
  .nav-bar {
    margin-top: 2%;
    border-top: 1px solid ${colors.border};
    border-bottom: 1px solid ${colors.border};
    ul {
      li {
        padding: 4px 38px;
        display: table-cell;
        width: auto;
        margin: 0;
        vertical-align: top;
        border-left: 1px solid ${colors.border};
        border: 1px solid ${colors.border};
        box-sizing: border-box;
        line-height: 2.5rem;
        /* font-weight: bold; */
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
            span {
              display: inline-block;
              width: 32px;
              border-top: 1px solid #fff;
              box-shadow: 0 0 6px 2px;
              margin-bottom: -22px;
              color: ${colors.white};
            }
          }
        }
      }
    }
  }
  .display-none {}
`