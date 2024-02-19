import { Text, View } from "react-native";
import { Avatar } from "./avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { EmailDataProps } from "@/utils/emails";

type EmailProps = {
  data: EmailDataProps;
};

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <View className=" flex items-center justify-center">
        <Avatar source={{ uri: data.avatar }} />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}
          <Text className="text-lg font-subtitle text-[#9AA0A6] flex-1">
            {data.name}
          </Text>
          <Text className="text-sm font-body text-[#9AA0A6]">12 de fev</Text>
        </View>
        <Text
          className="text-base font-body text-[#9AA0A6]"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>
        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body  text-[#9AA0A6] flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>
          <MaterialIcons
            name={data.star ? "star" : "star-outline"}
            size={22}
            color={data.star ? colors.yellow[600] : colors.blue[600]}
          />
        </View>
      </View>
    </View>
  );
}
