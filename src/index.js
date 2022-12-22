import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const NoteTakingApp = () => {
  // Initialize state
  const [notes, setNotes] = useState([]);

  // Handle form submission
  const handleSubmit = event => {
    // Prevent form from being submitted
    event.preventDefault();

    // Get input text
    const input = event.target.elements.newNoteText;
    const text = input.value.trim();

    // Check if input is not empty
    if (text) {
      // Add new note to list
      setNotes([...notes, text]);

      // Clear input field
      input.value = '';
    }
  };

  // Handle delete button clicks
  const handleDelete = index => {
    // Remove note from list
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <div>
      <h1>Note Taking App</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-note-text">Add a new note:</label>
        <input type="text" id="new-note-text" name="newNoteText" />
        <button type="submit">Add</button>
      </form>

      <h2>Existing Notes:</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
