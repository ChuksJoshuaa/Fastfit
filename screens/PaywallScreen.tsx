import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationIProps } from "../utils/interface";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationIProps>();
  return (
    <ScrollView className="flex-1 relative bg-[#1A2F44]">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white font-bold pt-3">
          upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to pro to access all the features
        </Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-12 right-5"
      >
        <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
      </TouchableOpacity>

      <View className="items-center">
        <MaterialCommunityIcons
          name="trophy-award"
          size={150}
          color="#E5962D"
        />
      </View>

      <View className="space-y-5 px-10 py-5">
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-key" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Upgrade to the premium version of the app and enjoy all the
              exclusive features available only to pro users
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-person-add-outline" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Helpline 24/7 to Personal Trainers
            </Text>
            <Text className="text-white text-sm font-extralight">
              Get all unlimited access to our fitness support team and get help
              anytime you need it - day or night. {""}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-star" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg capitalize">
              Unlock limited edition content
            </Text>
            <Text className="text-white text-sm font-extralight">
              Unlock exclusive content that you can't get anywhere else, like
              special exclusive workouts and routines
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaywallScreen;
