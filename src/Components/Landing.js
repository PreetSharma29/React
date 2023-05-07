import React from 'react';
import { useParams } from 'react-router-dom';

function Landing() {
  const { username } = useParams();

  return (
    <div>
      <h2>Welcome to LPU, {username}!</h2>
    </div>
  );
}

export default Landing;
