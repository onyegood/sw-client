import { Container } from 'reactstrap';
import { searchIcon } from '../../assets';
import { colors } from '../../theme/colors';
import styled from 'styled-components';

export const BigSearchContainer = styled(Container)`
  input {
    position: relative;
    width: 100%;
    height: 69px;
    font-size: 30px;
    padding: 10px;
    border: 0;
    background-color: ${colors.primaryLight};
    color: ${colors.secondary};
    &:focus {
      outline: none;
      background-color: ${colors.secondary};
      color: ${colors.primaryLight};
    }
  }
  button {
    position: absolute;
    height: 45px;
    right: 174px;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primaryLight};
    background-image: url(${searchIcon});
    padding: 7px 16px 10px 44px;
    font-size: 1.2em;
    text-indent: 0;
    text-transform: uppercase;
    background-position: 0 95%;
    background-size: 50px auto;
    background-repeat: no-repeat;
  }
  .search-wrapper {
    display: flex;
    align-items: center;
  }
`;
