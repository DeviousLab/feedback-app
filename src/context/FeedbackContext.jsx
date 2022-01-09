import { createContext, useState, useEffect } from 'react';

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
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const feedbackData = await response.json();
    setFeedback(feedbackData);
    setIsLoading(false);
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const feedbackData = await response.json();

    setFeedback([feedbackData, ...feedback]);
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