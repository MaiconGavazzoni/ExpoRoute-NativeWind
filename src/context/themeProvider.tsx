import { useRouter, useSegments } from "expo-router"
import React, { ReactNode, useContext, useEffect } from "react"

interface ThemaProps {
  primary: string
  secondary: string
}

interface ThemeContextData {
  themaligth: ThemaProps
  themadark: ThemaProps
  setTheme(): void
}

const ThemeContext = React.createContext<ThemeContextData>(
  {} as ThemeContextData
)

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [themaligth, setThemaligth] = React.useState<ThemaProps>(() => ({
    primary: "valeo-primary",
    secondary: "valeo-secondary",
  }))
  const [themadark, setThemadark] = React.useState<ThemaProps>(() => ({
    primary: "valeo-primary-dark",
    secondary: "valeo-secondary-dark",
  }))

  function setTheme() {
    setThemaligth({
      primary: "valeo-primary",
      secondary: "valeo-secondary",
    })
    setThemadark({
      primary: "valeo-primary-dark",
      secondary: "valeo-secondary-dark",
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        themaligth,
        themadark,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// This hook can be used to access the user info.
function useThemeProvider(): ThemeContextData {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useThemeProvider }
