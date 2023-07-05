import { Slot, Stack } from "expo-router"
import { useState } from "react"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { AuthProvider } from "../src/context/auth"
import { ThemeProvider } from "../src/context/themeProvider"

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    undefined | boolean
  >(false)

  // return (
  //   <Provider>
  //     <Slot />
  //   </Provider>
  // )

  return (
    <ThemeProvider>
      <AuthProvider>
        <View className="flex-1">
          <StatusBar style="light" translucent />
          <Stack
            initialRouteName="(auth)/apresentation"
            screenOptions={{
              headerShown: true,
              contentStyle: { backgroundColor: "transparent" },
              animation: "flip",
              gestureEnabled: true,
              gestureDirection: "horizontal",
            }}
          >
            <Stack.Screen name="(auth)/apresentation" />
            <Stack.Screen name="(auth)/sign-in" />
            <Stack.Screen name="index" />
            {/* <Stack.Screen name="index" /> */}
            <Stack.Screen name="memories" />
            {/* <Stack.Screen name="new" /> */}
          </Stack>
        </View>
      </AuthProvider>
    </ThemeProvider>
  )
}
