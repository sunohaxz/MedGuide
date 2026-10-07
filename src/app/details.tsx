import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { Collapsible } from "@/components/ui/collapsible";
import { Colors } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View>
        <Text>Explore</Text>
        <Text>
          This starter app includes example{"\n"}code to help you get started.
        </Text>

        <ExternalLink href="https://docs.expo.dev">
          <Text>Expo documentation</Text>
        </ExternalLink>
      </View>

      <View>
        <Collapsible title="File-based routing">
          <Text>
            This app has two screens: <Text>src/app/index.tsx</Text> and{" "}
            <Text>src/app/explore.tsx</Text>
          </Text>
          <Text>
            The layout file in <Text>src/app/_layout.tsx</Text> sets up the tab
            navigator.
          </Text>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <Text>Learn more</Text>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Android, iOS, and web support">
          <Text>
            You can open this project on Android, iOS, and the web. To open the
            web version, press <Text>w</Text> in the terminal running this
            project.
          </Text>
          <Image source={require("@/assets/images/tutorial-web.png")} />
        </Collapsible>

        <Collapsible title="Images">
          <Text>
            For static images, you can use the <Text>@2x</Text> and{" "}
            <Text>@3x</Text> suffixes to provide files for different screen
            densities.
          </Text>
          <Image source={require("@/assets/images/react-logo.png")} />
          <ExternalLink href="https://reactnative.dev/docs/images">
            <Text>Learn more</Text>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Light and dark mode components">
          <Text>
            This template has light and dark mode support. The{" "}
            <Text>useColorScheme()</Text> hook lets you inspect what the
            user&apos;s current color scheme is, and so you can adjust UI colors
            accordingly.
          </Text>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <Text>Learn more</Text>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Animations">
          <Text>
            This template includes an example of an animated component. The{" "}
            <Text>src/components/ui/collapsible.tsx</Text> component uses the
            powerful <Text>react-native-reanimated</Text> library to animate
            opening this hint.
          </Text>
        </Collapsible>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  header: {
    alignItems: "center",
    gap: 6,
  },
  badge: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.accent,
  },
  tag: {
    color: Colors.light.accent,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.text,
  },
  card: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.text,
  },
  commonUsesList: {
    gap: 6,
  },
  commonUseRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  commonUseBullet: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.light.accent,
    marginTop: 7,
  },
  body: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    lineHeight: 22,
  },
  warningCard: {
    backgroundColor: "#FFF7ED",
    borderWidth: 1,
    borderColor: "#FDBA74",
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#9A4F00",
  },
  warningText: {
    fontSize: 15,
    color: "#7C2D12",
    lineHeight: 22,
  },
  notFoundBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  notFoundText: {
    fontSize: 18,
    color: Colors.light.text,
    fontWeight: "600",
  },
});
