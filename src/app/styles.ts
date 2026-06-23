import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  ${isAndroid && `padding-top: ${StatusBar.currentHeight}px`}
`;
