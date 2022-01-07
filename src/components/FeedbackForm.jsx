import { useState } from 'react'

import Card from "./Card"
import Button from './Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate our services?</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" name="review" id="review" placeholder="Type your review here" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  )
}

export default FeedbackForm
