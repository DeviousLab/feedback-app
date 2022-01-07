import { useState } from 'react'

import Card from "./Card"

function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate our services?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" name="review" id="review" placeholder="Type your review here" value={text} />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
