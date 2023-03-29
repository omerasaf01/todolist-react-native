import { View, Text, StyleSheet } from 'react-native';

function Item (props) {
  return (
    <View style={styles.item}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  textStyle: {
    color: "white",
    marginTop: 25,
    marginBottom: 25,
  },
});

module.export = {Item}