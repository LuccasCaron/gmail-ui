import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, View, Text } from "react-native";
import clsx from "clsx";

export type iconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName: iconNameProps;
  notifications?: number;
};

export function DrawerButton({
  title,
  isFocused,
  isDivider,
  iconName,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable className="py-2 w-full " {...rest}>
      <View
        className={clsx("flex-row flex items-center h-14 px-6 -ml-2 w-full", {
          "bg-orange-600 rounded-r-full": isFocused,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx("text-white font-subtitle text-base", {
            " text-orange-300 ": isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
}
