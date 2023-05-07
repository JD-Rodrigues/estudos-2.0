import { Navbar, NavbarListItem } from "tailgrids-react";
import AutoCarouselHeroPage from "../node_modules/page-slices/src/sections/heropages/AutoCarouselHeroPage/index.jsx"
// eslint-disable-next-line no-unused-vars
import styles from "./index.module.css"

const App = () => {

  return (
    <>
      <Navbar
        button2="Contate-nos"
        logoSrc="http://www.old2.commonsupport.com/eronment/wp-content/themes/eronment/images/logo.png"
      >
        <NavbarListItem href="/#">Home</NavbarListItem>
        <NavbarListItem href="/#">Payment</NavbarListItem>
        <NavbarListItem href="/#">About</NavbarListItem>
        <NavbarListItem href="/#">Blog</NavbarListItem>
      </Navbar>
      <AutoCarouselHeroPage />
    </>
  )
}
 
export default App