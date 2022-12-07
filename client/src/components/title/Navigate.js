import { Link } from "react-router-dom";

function Navigate() {
  return (
    <div>
      <Link to={"/"}> home </Link>
      <Link to={"/main"}>Main</Link>
      <Link to={"/recipe-list-page"}>recipe list</Link>
      <Link to={"/recipe-page"}>recipe </Link>
      <Link to={"/nutrition-facts"}>Main</Link>
    </div>
  );
}

export default Navigate;
