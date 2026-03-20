"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const LogIn = () => {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/home');
    };
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={handleSubmit}>Log In</button>
    </div>
  )
}

export default LogIn
