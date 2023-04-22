import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { IIProps, NavigationIProps } from "../utils/interface";

const ActionRow = ({
  title,
  screen,
  color,
  requiresPro,
  vertical,
  icon,
}: IIProps) => {
  const navigation = useNavigation<NavigationIProps>();

  const handlePress = () => navigation.navigate(screen);

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex flex-1 m-2 justify-center items-center py-6 rounded-lg space-x-2 ${
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
