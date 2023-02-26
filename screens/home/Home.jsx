import { TouchableOpacity } from "react-native";
import PostsScreen from "../posts/PostsScreen";
import ProfileScreen from "../profile/ProfileScreen";
import CreatePostsScreen from "../createPost/CreatePostScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icons = {
  Posts: "table-multiple",
  Profile: "account",
  CreatePost: "plus",
};

const style = {
  CreatePost: {
    backgroundColor: "#FF6C00",
    color: "white",
    paddingHorizontal: 28,
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 70, paddingHorizontal: 9 },
        tabBarShowLabel: false,
        headerRight: () => {
          return (
            <TouchableOpacity
              style={{ paddingEnd: 20 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Entypo name="log-out" size={24} color="black" />
            </TouchableOpacity>
          );
        },
        tabBarIcon: ({ color, size }) => {
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
              style={style[route.name]}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
