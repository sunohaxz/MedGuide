import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { Collapsible } from "@/components/ui/collapsible";
import { MaxContentWidth, Spacing } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Explore</Text>
          <Text style={styles.centerText}>
            This starter app includes example{"\n"}code to help you get started.
          </Text>
          <ExternalLink href="https://docs.expo.dev">
            <Text>Expo documentation</Text>
          </ExternalLink>
        </View>

        <View style={styles.sectionsWrapper}>
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
            <Image
              style={styles.imageTutorial}
              source={require("@/assets/images/tutorial-web.png")}
            />
          </Collapsible>

          <Collapsible title="Images">
            <Text>
              For static images, you can use the <Text>@2x</Text> and{" "}
              <Text>@3x</Text> suffixes to provide files for different screen
              densities.
            </Text>
            <Image
              style={styles.imageReact}
              source={require("@/assets/images/react-logo.png")}
            />
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

