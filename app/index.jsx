import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello World!!!</Text>
      <StatusBar style="auto"></StatusBar>
      <Link href={"/home"} style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
