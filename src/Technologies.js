import React from 'react';

import Stack from './Stack';
import jinglesLogo from './JinglesVB.png';

export default function Technologies() {
    return (
      <div>
        <div className='container'>
          <Stack id='jingles' name='Jingles' logo={jinglesLogo} />
        </div>
      </div>
    );
  }