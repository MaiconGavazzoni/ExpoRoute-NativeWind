import { Pressable, PressableProps, Text } from "react-native"

interface MyButtonProps extends PressableProps {
  children: React.ReactNode
}

export function MyButton({ children, ...rest }: MyButtonProps) {
  return (
    <Pressable
      {...rest}
      className="items-center justify-center w-full bg-slate-500 h-12 rounded-md"
    >
      <Text className="text-sm font-bold text-valeo-primary dark:text-valeo-primary-dark">
        {children}
      </Text>
    </Pressable>
  )
}
