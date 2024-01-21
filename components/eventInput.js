import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const EventInput = () => {
  const [text, onChangeText] = React.useState('Text');

  const onSubmitEdit = () => {
    // whatever you want to do on submit
  }

  return (
    <SafeAreaView>
      <Text> Create Event </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder = "Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Start Date"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="End Date"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EventInput;