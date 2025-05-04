import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center text-xs text-zinc-400 mt-4">
      {time.toLocaleTimeString()}
    </div>
  )
}

export default Clock
