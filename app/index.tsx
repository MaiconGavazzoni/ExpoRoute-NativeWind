import { Link, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"

export default function App() {
  const router = useRouter()
  const [theme, setTheme] = useState(false)
  const outline = false
  const small = false
  const disabled = false
  const loading = false

  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className={` ${!theme ? "text-white" : "text-black"}`}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text className={` ${theme ? "text-white" : "text-black"}`}>
        Open up App.tsx to start working on your app!
      </Text>
      <View className="w-1/3">
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={disabled}
          className={`
          items-center 
          justify-center
        
       
        rounded-lg
       
        transition
        w-full
       ${disabled || (loading && "opacity-70")}
       ${outline ? "bg-white" : "bg-rose-500"}
       ${outline ? "border-black" : "bg-rose-500"}
       ${outline ? "text-black" : "text-white"}
       ${small ? "py-1" : "py-3"}
       ${small ? "text-sm" : "text-md"}
       ${small ? "font-light" : "font-semibold"}
       ${small ? "border-[1px]" : "border-2"}
        `}
          onPress={() => setTheme(() => !theme)}
        >
          {loading ? <ActivityIndicator /> : <Text>Change Theme</Text>}
        </TouchableOpacity>
      </View>
      <Link href="/memories" asChild>
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
          <Text>Memories</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
