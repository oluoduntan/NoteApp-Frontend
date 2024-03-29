import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [invalidCredDisplay, setInvalidCredDisplay] = useState("none");

  function updatedUsername({ target }) {
    setUsername(target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("fetch call");

      let unavailable_usernames = ["damilola", "anjola"];

      if (unavailable_usernames.some((el) => el === username)) {
        setInvalidCredDisplay("block");
      } else {
        setInvalidCredDisplay("none");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  return (
    <div>
      <Header />
      <LoginForm username={username} updatedUsername={updatedUsername} invalidCredDisplay={invalidCredDisplay}/>
    </div>
  );
}

export default LoginPage;