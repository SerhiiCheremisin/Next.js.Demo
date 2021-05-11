import React from 'react';
import Link from 'next/link';


const Header = () => {
    return(
        <div>
            <header>
               <ul>
                   <li><Link href="/"><a>Home</a></Link></li>
                   <li><Link href="/users"><a>Users</a></Link></li>

               </ul>
            </header>

        </div>

    )

}

export default Header;
