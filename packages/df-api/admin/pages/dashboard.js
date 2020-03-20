import React from 'react';

import { Container } from '@arch-ui/layout';
import { Title } from '@arch-ui/typography';

const Dashboard = () => (
  <Container>
    <Title as="h1" margin="both">
      Dashboard
    </Title>
    <p>Administer DineForward Here</p>
  </Container>
);

export default Dashboard;
