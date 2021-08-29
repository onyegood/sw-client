import Icon from '../icons';
import React from 'react';
import styled from 'styled-components';

const DarkModeButton = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  .icon-color{
    color: white;
  }
  .cursor-pointer {
    cursor: pointer;
  }
`

const DarkModeControl = () => {
  return (
    <DarkModeButton>
      <Icon id="sun-icon" height="30" width="30" className="cursor-pointer icon-color" />
      {/* <Icon id="moon-icon" height="30" width="30" fill='icon-color' /> */}
    </DarkModeButton>
  );
}

export default DarkModeControl