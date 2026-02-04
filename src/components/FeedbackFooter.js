import React from 'react';

export default function FeedbackFooter() {
  const handleFeedback = (helpful) => {
    // You can integrate with analytics or a feedback service here
    console.log(`Page helpful: ${helpful}`);
    // Could send to analytics, show a thank you message, etc.
  };

  return (
    <div className="feedback-footer">
      <div className="feedback-section">
        <span className="feedback-question">Was this page helpful?</span>
        <div className="feedback-buttons">
          <button
            className="feedback-btn"
            onClick={() => handleFeedback(true)}
            aria-label="Yes, this page was helpful"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            Yes
          </button>
          <button
            className="feedback-btn"
            onClick={() => handleFeedback(false)}
            aria-label="No, this page was not helpful"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
            </svg>
            No
          </button>
        </div>
      </div>
      <div className="feedback-actions">
        <button
          className="feedback-action-btn"
          type="button"
          data-o-support-request=""
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Suggest edits
        </button>
        <button
          className="feedback-action-btn"
          type="button"
          data-o-support-request=""
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Raise issue
        </button>
      </div>
    </div>
  );
}
