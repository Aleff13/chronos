import React, { useEffect, useState } from "react";
import { Button, HStack, VStack, Text } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";
import HistoryTime from "./historyTime";
import Display from "./display";
import { styles } from "./styles";

export interface ITime {
  seconds: number;
  minutes: number;
}

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState<NodeJS.Timer>();
  const [previousTime, setPreviousTime] = useState<ITime[]>([]);
  const [running, setRunning] = useState<boolean>(false);

  const startTimer = () => {
    setRunning(true)
    setCustomInterval(
      setInterval(() => {
        changeTimer()
      }, 1000)
    );
  };

  const stopTimer = () => {
    setRunning(false)
    clearInterval(customInterval)
  };

  const saveTime = () => {
    const time: ITime = {
      seconds,
      minutes,
    };

    let current = previousTime;
    current.push(time);
    setPreviousTime(current);

    clear();
  };
  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };
  const changeTimer = () => {
    console.log(running);
    console.log(customInterval);
    setSeconds((prevState) => {
      if (prevState + 1 === 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chronos</Text>
      <Display minutes={minutes} seconds={seconds} />
      {!running && (
        <HStack m={4} spacing={6}>
          <Button title="Vai!" style={{ marginTop: 40 }} onPress={startTimer} />
          <Button title="Zerar" style={{ marginTop: 40 }} onPress={clear} />
        </HStack>
      )}
      {running && (
        <HStack m={4} spacing={6}>
          <Button
            title="Pausar"
            style={{ marginTop: 40 }}
            onPress={stopTimer}
          />
          <Button
            title="Salvar e Zerar"
            style={{ marginTop: 40 }}
            onPress={saveTime}
          />
        </HStack>
      )}
      <VStack>
        {previousTime.map((time, index) => (
          <HistoryTime index={index} time={time} key={index} />
        ))}
      </VStack>
    </View>
  );
};

export default App;
