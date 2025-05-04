import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6 grayscale" />
      ) : (
        <MoonIcon className="w-6 h-6 grayscale" />
      )}
    </button>
  )
}

export default ThemeToggle
