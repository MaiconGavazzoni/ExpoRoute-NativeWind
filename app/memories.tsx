import { Link, useRouter } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { Button } from "../src/components/Button"
import { useAuth } from "../src/context/auth"

export default function NewMemory() {
  const { signOut } = useAuth()
  const router = useRouter()
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-white">
        Open up App.tsx to start working on your app!
      </Text>
      <Link href="/" asChild>
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
          <Text>Index</Text>
        </TouchableOpacity>
      </Link>
      <Button title="SingOut" onPress={() => signOut()} />
    </View>
  )
}
