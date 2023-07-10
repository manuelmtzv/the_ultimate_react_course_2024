import { useState, useEffect } from 'react'

export default function Footer() {
  const [message, setMessage] = useState('')

  const hour = new Date().getHours()

  const { open, close } = {
    open: 12,
    close: 22,
  }

  useEffect(() => {
    if (hour >= open && hour <= close) {
      setMessage("We're currently open!")
    } else {
      setMessage("We're currently close!")
    }
  }, [hour, open, close])

  return (
    <footer className='footer'>
      <p>{message}</p>
    </footer>
  )
}
