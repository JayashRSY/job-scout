import { Stack, useRouter } from "expo-router";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn } from "../components/common/header/ScreenHeaderBtn";
import { Welcome } from "../components/home/welcome/Welcome";
import { PopularJobs } from "../components/home/popular/PopularJobs";
import { NearbyJobs } from "../components/home/nearby/NearbyJobs";
const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60" />;
          },
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />;
          },
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome></Welcome>
          <PopularJobs></PopularJobs>
          <NearbyJobs></NearbyJobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
