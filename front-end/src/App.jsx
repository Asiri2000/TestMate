import { useState } from 'react'
import './App.css'


function Welcome(){
   return <h4>Welcome to the TestMate Application!</h4>

}

function App() {
  


  return (
    <>
      <h1>Welcome to the Frontend! </h1>

      <p>This is the frontend of the TestMate application. Here, you can interact with the user interface and access various features of the application.</p>

<br />

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

    </>
  )
}

export default App
