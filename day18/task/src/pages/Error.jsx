import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h2>page not found</h2>
      <Link to="/" className="btn btn-danger">go to home</Link>
    </>
  );
}

export default Error;
