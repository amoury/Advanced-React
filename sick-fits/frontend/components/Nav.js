import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/items"><a>Items</a></Link>
      <Link href="/sell"><a>Sell</a></Link>
      <Link href="/signup"><a>Signup</a></Link>
      <Link href="/orders"><a>Orders</a></Link>
      <Link href="/me"><a>Me</a></Link>
    </NavStyles>
  )
}

export default Nav;