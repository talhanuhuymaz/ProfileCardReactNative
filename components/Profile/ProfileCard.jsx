import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style.js";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function ProfileCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>New Profile Card</Text>
          <Text>A simple profile card template made with React Native</Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <Entypo name="medium" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
