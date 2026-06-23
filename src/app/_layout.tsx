import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function RootLayout() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("@/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("@/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("@/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
