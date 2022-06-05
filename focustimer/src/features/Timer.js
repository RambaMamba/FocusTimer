import React from 'react';
import { View, StyleSheet, Text, Platform, Vibration } from 'react-native';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/button';
import { useState } from 'react';
import { spacing } from '../util/sizes';
import { colors } from '../util/colors';
import { ProgressBar, Colors } from 'react-native-paper';
import { Timing } from './Timing';
import { Button } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}> Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <ProgressBar
        style={{ height: 10, marginTop: 70}}
        progress={progress}
        color={colors.progBar}
      />

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.timeWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.clear}>
        <Button mode="contained" onPress={clearSubject}>
          Stop Timer
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clear: {
    flex: 0.35,
    justifyContent: 'flex-end',
    marginTop: 40,
  },

  countdown: {
    flex: 0.5,
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  timeWrapper: {
    flex: 0.01,
    flexDirection: 'row',
  },
});
