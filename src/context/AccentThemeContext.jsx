import { createContext, useContext } from 'react'

const AccentThemeContext = createContext('saffron')

/** @param {{ accent?: 'saffron', children: import('react').ReactNode }} props */
export function AccentThemeProvider({ accent = 'saffron', children }) {
  return (
    <AccentThemeContext.Provider value={accent}>{children}</AccentThemeContext.Provider>
  )
}

/** @returns {'saffron'} */
export function useAccentTheme() {
  return useContext(AccentThemeContext)
}
