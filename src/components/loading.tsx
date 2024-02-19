import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator
      color={"#fff"}
      className="flex-1 bg-[#202123] items-center justify-center"
    />
  );
}
