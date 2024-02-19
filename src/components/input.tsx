import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

type InputProps = {
  children: ReactNode;
};

function Input({ children }: InputProps) {
  return (
    <View className="w-fulll h-14 bg-[#2A2B2D] rounded-2xl p-4 flex-row items-center space-x-4 ">
      {children}
    </View>
  );
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.blue[600]}
      {...rest}
      className="flex-1 font-normal text-base text-white"
    />
  );
}

Input.Field = InputField;

export { Input };
