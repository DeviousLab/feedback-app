import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:8000/feedback?_sort=id&_order=desc');
    const feedbackData = await response.json();
    setFeedback(feedbackData);
    setIsLoading(false);
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedFeedback } : item));
    setFeedbackEdit({
      item: {},
      edit: false
    });
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
      isLoading
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;