import { Link } from "expo-router"
import { Pressable, PressableProps, Text, View } from "react-native"

interface MyButtonProps extends PressableProps {
  href: string
}

export function MyLink({ href, ...rest }: MyButtonProps) {
  return (
    <View>
      <Link href={href} asChild>
        <Pressable
          {...rest}
          className="items-center justify-center w-full bg-slate-500 h-12 rounded-md"
        ></Pressable>
      </Link>
    </View>
  )
}
