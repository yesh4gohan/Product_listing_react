import {HeaderContainer,HeaderLogo} from './styles'
import Logo from '../../nykaa_logo.svg'
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo}/>
    </HeaderContainer>
  )
}

export default Header;