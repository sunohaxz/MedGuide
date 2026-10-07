import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

import { ExternalLink } from "@/components/external-link";
import { Collapsible } from "@/components/ui/collapsible";

export default function TabTwoScreen() {
  return (
    <ScrollView>
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

@extends('layouts.app')

@section('title', 'Skills')
@section('back', 'yes')

@section('content')
    <h1>Skills 💪</h1>

    @if (count($profile['skills']) === 0)
        <div class="card">No skills yet. <a href="/edit">Add some on the Edit page.</a></div>
    @else
        <div class="card">
            @foreach ($profile['skills'] as $skill)
                <span class="tag">{{ $skill }}</span>
            @endforeach
        </div>
    @endif
@endsection
