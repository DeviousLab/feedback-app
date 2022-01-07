import { useState } from 'react'

import Card from "./Card"
import Button from './Button';

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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
