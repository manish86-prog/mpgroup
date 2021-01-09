    import React from 'react';
    import {Link} from 'react-router-dom';

    const Menulinks = ()=>{

        return (
            <div id="buttons">
              <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="Blog">Blogs</Link></li>
				        <li><Link to="Productnew">Products</Link></li>
                <li><Link to="Gallery">Gallery</Link></li>
                {/* <li><Link to="Friends">Friends</Link></li> */}					
                <li><Link to="About">About</Link></li>
                <li><Link to="Contactus">Contact</Link></li>
              </ul>
            </div>
            )
          }
export default Menulinks;
    