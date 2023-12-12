"use client";

import { validateString } from "@/lib/utils";

export const sendFeedback = async (formData: FormData) => {
    const name = formData.get("name");
    const comment = formData.get("comment");
    
    if(!validateString(name, 100) || !validateString(comment, 5000)){
        return {
            error: "Invalid name or comment",
        };
    }
    
    let feedbackList: { name: string; comment: string; date: string }[] = [];

  // Check if localStorage is available
  if (typeof window !== 'undefined' && window.localStorage) {
    // Retrieve existing feedback from localStorage
    const storedFeedback = localStorage.getItem('feedbackList');
    if (storedFeedback) {
      feedbackList = JSON.parse(storedFeedback);
    }

    // Add new feedback
    const newFeedback = { name, comment, date: new Date().toISOString() };
    feedbackList.push(newFeedback);

    // Save updated feedback to localStorage
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  } else {
    return {
      error: 'localStorage is not available in this environment.',
    };
  }

  return {
    data: 'Feedback submitted successfully!',
  };

}

