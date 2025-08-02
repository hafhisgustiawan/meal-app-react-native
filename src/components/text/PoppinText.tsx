import { View, Text, StyleSheet, TextProps } from "react-native";

const PoppinText: React.FC<TextProps> = (props) => {
  return <Text {...props} style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins_400Regular",
  },
});

export default PoppinText;
