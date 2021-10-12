import React, { useContext } from 'react'
import s from 'styled-components'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

import Logo from '../header/Logo'
import { Text } from '../styles/Text'
import { Button } from '../styles/Buttons'
import { colors } from '../../utils/colors'
import { Group } from '../styles/Layout'
import { NAV_HEIGHT } from '../styles/sizes'
import { AuthUserContext } from '../../context/auth'

const NavStyle = s.nav`
  padding: 1rem 1.5rem 0rem 1.5rem;
  display: flex;
  width: 100%;
  max-height: ${NAV_HEIGHT};
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.WHITE};
  align-items: center;
  justify-content: space-between;
`

const NavSpace = s.div`
  width: 100%;
  height: ${NAV_HEIGHT};
`

const NavLink = ({ title }: { title: string }) => (
  <Link href={`/${title}`}>
    <a>
      <Text style={{ marginRight: '4rem' }}>{title}</Text>
    </a>
  </Link>
)

const Nav = () => {
  const { user } = useContext(AuthUserContext)
  const router: NextRouter = useRouter()
  console.log(router.pathname)
  console.log(user)

  return (
    <>
      <NavStyle>
        <Logo />
        <Group horizontal>
          <NavLink title="Home" />
          <NavLink title="About" />
          <NavLink title="Tutorial" />
          <NavLink title="Team" />
          {user ? (
            <Link href={`/api/accounts/logout/?next=${router.pathname}`}>
              <a>
                <Button color={colors.MEDIUM_BLUE}>Logout</Button>
              </a>
            </Link>
          ) : (
            <Link href={`/api/accounts/login/?next=${router.pathname}`}>
              <a>
                <Button color={colors.MEDIUM_BLUE}>Login</Button>
              </a>
            </Link>
          )}
        </Group>
      </NavStyle>
      <NavSpace />
    </>
  )
}

export default Nav
