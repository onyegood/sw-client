import React from 'react';
import styled from 'styled-components';

import { Col, Container, Row } from 'reactstrap';

const PageNotyFoundContainer = styled(Container) `
  text-align: center;
  margin-top: 6%;
`;

const PageNotFound: React.FC = () => (<PageNotyFoundContainer>
	<Row data-testid="page-not-fount-container">
		<Col className="mx-auto"
			md="6"
		>
			<h1 data-testid="page-not-fount-text">Ooh! page not found</h1>
		</Col>
	</Row>
</PageNotyFoundContainer>);

export default PageNotFound;
