import { useState, useEffect } from "react";

function UserProfile() {
  const [name, setName] = useState("Alishba");
  

  useEffect(() => {

  console.log("useEffect is running")
    document.title = `Profile: ${name}`;

    return () => {
        console.log("cleanUp is running")
      document.title = "React App";
    };
  }, [name]); 

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name}!</h2>
    </div>
  );
}

export default UserProfile;