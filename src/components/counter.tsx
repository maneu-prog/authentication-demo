'use client'

//import { useAuth, useUser } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  //const { isLoaded, userId, sessionId, getToken } = useAuth()
  //const { isLoaded, isSignedIn, user } = useUser()
  const { isLoaded, isSignedIn } = useUser()
  if (!isLoaded || !isSignedIn) {
    //if (!isLoaded || !userId) {
    return null
  }

  return (
    <>
      <p>Countador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  )
}
