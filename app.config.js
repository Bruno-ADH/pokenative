import 'dotenv/config';

export default {
  expo: {
    name: "pokenative",
    slug: "pokenative",
    version: "1.0.0",
    scheme: "pokenativelink",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
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
