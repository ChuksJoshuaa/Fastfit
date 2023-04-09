import { SafeAreaView, Text, Image } from "react-native";
import { imageUrl } from "../utils/sourceImage";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: imageUrl,
        }}
        className="w-full h-64"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
