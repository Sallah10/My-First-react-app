// import { useState } from 'react'
import Main from './Components/MainText/Main'
import './App.css'

function App() {

  return (
    <>
      <Main/>
    </>
  )
}

export default App

{/* <!-- Success message start --> */}

            

            {/* <!-- Success message end --> */}
// If you're using React and you want to clear the page and display a message after an email has been inputted, you can follow these general steps:

// Set Up State:
// Use React state to manage the input value and a flag to determine whether to display the message.

// Handle Input Changes:
// Update the state when the user inputs an email.

// Handle Form Submission:
// When the form is submitted, update the state to trigger the display of the message.

// Conditional Rendering:
// Use conditional rendering to display the message when the appropriate state is set.

// Here's a basic example using functional components and the useState hook:
// import React, { useState } from 'react';

// const EmailForm = () => {
//   const [email, setEmail] = useState('');
//   const [showMessage, setShowMessage] = useState(false);

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any necessary actions with the email, e.g., send it to a server
//     // ...

//     // Set state to show the message
//     setShowMessage(true);

//     // Optional: Clear the email input
//     setEmail('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>

//       {showMessage && (
//         <div>
//           <p>Email submitted successfully!</p>
//           {/* Add any additional message or content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmailForm;