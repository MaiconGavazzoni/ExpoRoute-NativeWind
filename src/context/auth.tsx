import { useRouter, useSegments } from "expo-router"
import React, { ReactNode, useContext } from "react"

interface AuthContextData {
  user: Object | null
  signIn(): Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: Object | null, replace = "/apresentation") {
  const segments = useSegments()
  const router = useRouter()

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace(replace)
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/")
    }
  }, [user, segments])
}

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setAuth] = React.useState<Object | null>(null)
  const [replace, setReplace] = React.useState<string | undefined>(undefined)

  useProtectedRoute(user, replace)

  async function signIn() {
    setAuth({})
  }

  async function signOut() {
    setReplace(() => "/sign-in")
    setAuth(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// This hook can be used to access the user info.
function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
