import { View, Text} from "react-native";

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
        <TouchableOpacity
          style={styles.buttonLogOut}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.iconLogOut}
            source={require("../images/log-out.png")}
          />
      </TouchableOpacity>
    </View>
  )
}

export default MapScreen;
