import { TouchableOpacity, Text } from "react-native";
import { IIProps } from "../utils/interface";
import { Ionicons } from "@expo/vector-icons";

const ActionRow = ({
  title,
  screen,
  color,
  requiresPro,
  vertical,
  icon,
}: IIProps) => {
  return (
    <TouchableOpacity
      className={`flex flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: color }}
    >
      <Ionicons name={icon} size={30} color="#fff" />
      <Text className="font-bold text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
