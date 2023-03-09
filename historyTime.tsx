import { HStack, Text } from "@react-native-material/core";
import { ITime } from "./App";

interface IHistoryTime {
  index: number;
  time: ITime;
}

const HistoryTime = ({ index, time }: IHistoryTime) => {
  const timeStamp = new Date();
  timeStamp.setMinutes(time.minutes);
  timeStamp.setSeconds(time.seconds);

  return (
    <HStack m={10} spacing={165}>
      <Text variant="subtitle1">{index + 1}</Text>
      <Text variant="subtitle1">
        {`${timeStamp.getUTCMinutes()} : ${timeStamp.getUTCSeconds()}s`}
      </Text>
    </HStack>
  );
};

export default HistoryTime;
