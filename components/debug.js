import { Link } from "expo-router";
import { View } from "react-native";

export default function Debug() {
  
  return (  
    <View style={
      { 
        top: 30,
        left: 20}
      }>
      <Link href="/_sitemap">DEBUG</Link>
    </View>
  );
}