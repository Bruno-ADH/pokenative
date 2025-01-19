import 'dotenv/config';

export default {
  expo: {
    name: "Pokenative",
    slug: "pokenative",
    version: "1.0.0",
    scheme: "pokenativelink",
    orientation: "portrait",
    icon: "./assets/images/pokeSplash.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/pokeSplash.png",
      resizeMode: "contain",
      backgroundColor: "#DC0A2D",
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/pokeball.png",
        backgroundColor: "#DC0A2D"
      }
    },
    web: {
      favicon: "./assets/images/pokeball.png"
    },
    plugins: [
      "expo-router",
      "expo-font"
    ],
    extra: {
      apiUrl: process.env.API_URL
    }
  }
};
