import { View } from "react-native"
import { Button } from "../../src/components/Button"
import { useAuth } from "../../src/context/auth"
import { LinkApp } from "../../src/components/LinkApp"

export default function Login() {
  const { signIn } = useAuth()

  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Button title="SingIn" onPress={() => signIn()} />
      <LinkApp title="Apresentação" heigth="28" href="/apresentation" />
    </View>
  )
}
