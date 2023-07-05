import { ActivityIndicator, TouchableOpacity, View, Text } from "react-native"

interface ButtonProps {
  title: string
  disabled?: boolean
  outline?: boolean
  small?: boolean
  onPress: () => void
  isLoading?: boolean
}

export function Button({
  title,
  disabled,
  outline,
  small,
  onPress,
  isLoading,
}: ButtonProps) {
  return (
    <View className="w-full">
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled || isLoading}
        className={`
            items-center 
            justify-center
            rounded-lg
            transition
            w-full
            ${disabled || (isLoading && "opacity-70")}
            ${
              outline
                ? "bg-white dark:bg-gray-600"
                : "bg-rose-500 dark:bg-green-800"
            }
            ${
              outline
                ? "border-black dark:border-white"
                : "border-slate-300 dark:border-slate-800"
            }
            
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-[0.5px]"}
            `}
        onPress={onPress}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            className={`${
              outline
                ? "text-black dark:text-white"
                : "text-white dark:text-black"
            }`}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  )
}
