import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <h2>unfound page please <Link to="/">go to home</Link></h2>
    </>
  )
}

export default Error
