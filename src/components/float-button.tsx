import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { colors } from "@/styles/colors";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="px-8 py-3 bg-gray-600 rounded-2xl flex-row  items-center  absolute bottom-6 right-6"
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[600]} />
      )}
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  );
}
