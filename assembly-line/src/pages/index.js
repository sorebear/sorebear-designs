import React from 'react';
import Link from 'gatsby-link';
import Hut from '../components/hut';

const IndexPage = () => (
  <div>
    <div className="hut-container">
      <Hut color={'blue'} />
      <Hut color={'yellow'} />
    </div>
  </div>
)

export default IndexPage;
