import { useState } from 'react';
import {
  Platform,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';

const Item = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.card}>
        <Text style={styles.task.title}>{props.title}</Text>
        <Text style={styles.task.content}>{props.content}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [tasks, setTask] = useState([
    {
      Name: 'Deneme',
      Description: 'Işık kapatılacak',
    },
  ]);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Item title={item.Name} content={item.Description} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  task: {
    title: {
      color: "white"
    },
    content: {
      color: "white"
    }
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  }
});
