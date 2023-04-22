import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NavigationIIProps } from "../utils/interface";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const DemoScreen = () => {
  const navigation = useNavigation<NavigationIIProps>();
  return (
    <SafeAreaView className="flex-1 relative bg-[#E5962D] pt-7">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="p-5 flex flex-row items-center"
      >
        <Ionicons name="arrow-back" size={40} color="white" />
        <Text className="text-white font-bold text-lg px-2">Go back</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center px-10">
        <Text className="text-white text-2xl font-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-20">
          You have access to this feature
        </Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-outline" size={60} color="#96F550" />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          This is where you create a new screen & change the rest of the app so
          navigation is as follows: navigation.navigate("ThePageYouWant")
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
