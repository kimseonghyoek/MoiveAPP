import React from "react";

// Food component
function Food({props}) {
  return (
    <h1>I like {props}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Food props="Kimch"
     />
    </div>
  );
}

export default App;
