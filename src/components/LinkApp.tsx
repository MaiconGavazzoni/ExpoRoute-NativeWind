import { Link } from "expo-router"
import { TouchableOpacity, Text } from "react-native"

interface LinkProps {
  title: string
  href: string
  heigth: string
}

export function LinkApp({ title, heigth, href }: LinkProps) {
  const cl = `w-full h-${heigth} items-center justify-center bg-green-500`

  return (
    <Link href={href} asChild>
      <TouchableOpacity className={cl}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </Link>
  )
}
