import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../util/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/button';
import { spacing } from '../util/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
              <RoundedButton  title="+" size={50} onPress={() => addSubject(subject)}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button:{
    justifyContent:'center'
  },
  textinput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
});
