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
`;

const DarkModeControl = () => (
	<DarkModeButton>
		<Icon className="cursor-pointer icon-color"
			height="30"
			id="sun-icon"
			width="30"
		/>
		{/* <Icon id="moon-icon" height="30" width="30" fill='icon-color' /> */}
	</DarkModeButton>
);

export default DarkModeControl;
