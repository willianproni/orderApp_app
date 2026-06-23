import { Text } from "../Text";
import { Container } from "./styles";

export function Button({
  children,
  onPress,
  disabled,
}: {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  );
}
