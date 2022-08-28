import { useContext } from "react";
import { MovieContext } from "../MovieContactList";
import { Navigation } from "../styles/Nav.styled";
const Nav = () => {
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <Navigation>
      <h3>Bipin Gurung</h3>
      <p>List of:{movie.length}</p>
    </Navigation>
  );
};

export default Nav;
