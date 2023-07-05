import { View, Text, ScrollView } from "react-native"
import { LinkApp } from "../../src/components/LinkApp"
import { useColorScheme } from "nativewind"
import { Button } from "../../src/components/Button"
import { useEffect } from "react"
import { useThemeProvider } from "../../src/context/themeProvider"
import { MyButton } from "../../src/components/MyButton"
import { MyLink } from "../../src/components/MyLink"

interface ThemaProps {
  primary: string
  secondary: string
}

// const themaligth = {
//   primary: "valeo-primary",
//   secondary: "valeo-secondary",
// }

// const themadark = {
//   primary: "valeo-primary-dark",
//   secondary: "valeo-secondary-dark",
// }

export default function Apresentation() {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <ScrollView className="bg-valeo-secondary dark:bg-valeo-secondary-dark">
      <View className="gap-y-4 flex flex-1 flex-col  w-full px-2 items-center justify-center">
        <Text>Apresentação Inicial</Text>
        <View className="w-full h-28">
          <LinkApp title="Login" heigth="28" href="/sign-in" />
        </View>
        <View className="flex flex-row  gap-2 px-2">
          <View className="w-1/2">
            <Button
              title="Theme"
              isLoading={false}
              onPress={() =>
                setColorScheme(colorScheme == "dark" ? "light" : "dark")
              }
            />
          </View>
          <View className="w-1/2">
            <Button
              title="Theme"
              isLoading={false}
              onPress={() =>
                setColorScheme(colorScheme == "dark" ? "light" : "dark")
              }
            />
          </View>
        </View>
        <MyButton>Olá Mundo Animal</MyButton>

        <MyButton>Olá Mundo</MyButton>

        <MyLink href="/sign-in" />

        <MyButton>Olá Mundo Feroz!</MyButton>
      </View>
    </ScrollView>
  )
}
