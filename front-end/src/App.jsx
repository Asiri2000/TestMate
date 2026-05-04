import { useState } from 'react'
import './App.css'
import {Welcome} from './Welcome';
import {Content} from './Welcome';
import Button from './Button';
import {Click} from './Button';
import {Hello, HelloWithoutJsx} from './Hello';
import {UserProfile,ContactForm} from './UserProfile';
import {CandidateProfile} from './CandidateProfile';


function App() {
  


  return (
<div>
      <h1>Welcome to the Frontend! </h1>

      <p>This is the frontend of the TestMate application. Here, you can interact with the user interface and access various features of the application.</p>

<br />
     <div>
      <table>
          <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Access</th>
          </tr>
          <tr>
              <td>Dashboard</td>
              <td>View your test results and performance metrics.</td>
              <td><a href="/dashboard">Go to Dashboard</a></td>
          </tr>

      </table>
      </div>

      <Welcome />

       <Content />

 <Button />
  <br />
    <Click />
    <br />
    <Hello />
      <br />
      <HelloWithoutJsx />
      <br />
      <UserProfile />

      <br />
      <ContactForm />

      <br />
      <CandidateProfile />

</div>
   

   
  );
}

export default App;