import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { imageUrl } from "../utils/sourceImage";
import { Ionicons } from "@expo/vector-icons";
import { ActionRow } from "../components";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 relative bg-gray-100 mt-3">
      <ScrollView>
        <TouchableOpacity className="absolute items-center z-50 top-5 right-10">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">Go Pro</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: imageUrl,
          }}
          className="w-full h-64"
        />

        <ActionRow
          title="Track Workflow"
          screen="Demo"
          color="#E5962D"
          icon="fitness"
          vertical
        />

        <ActionRow
          title="Browse Workouts"
          screen="Demo"
          color="#1982C4"
          icon="library"
          vertical
        />
        <ActionRow
          title="Connect with Friends"
          screen="Demo"
          color="#FAA174"
          icon="share-social"
        />
        <ActionRow
          title="Add an Exercise"
          screen="Demo"
          color="#8AC926"
          icon="add-circle"
          requiresPro
        />
        <ActionRow
          title="Create a Routine"
          screen="Demo"
          color="#C03221"
          icon="md-time"
          requiresPro
        />
        <ActionRow
          title="Browse Workouts"
          screen="Demo"
          color="#23967F"
          icon="trophy"
          requiresPro
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
