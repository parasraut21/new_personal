import React from 'react';
import { Link } from "react-router-dom";

import {BiHomeAlt , BiUser} from 'react-icons/bs' ;
import {BsClipboard , BsBriefcase , BsChatSqaure} from 'react-icons/bs' ;

const Nav = () => {
  return (<>
  <nav>
    <div className='container mx-auto' >
      <div>
        <Link>
        <BiHomeAlt/>
        </Link>
      </div>
    </div>
  </nav>
  
  </>);
};

export default Nav;
