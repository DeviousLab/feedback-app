import { Link } from "react-router-dom"

import Card from "../Card"
import Button from "../Button"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>This is a project built with React to leave feedback</p>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </Card>
  )
}

export default AboutPage