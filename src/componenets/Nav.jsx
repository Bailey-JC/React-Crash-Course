import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/Bailey">Bailey</Link>
      <Link to="/users/Tom">Tom</Link>
      <Link to="/users/James">James</Link>
    </nav>
  );
}

export default Nav;
