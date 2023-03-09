import { Text } from "@react-native-material/core";
import { ITime } from "./App";

interface IHistoryTime {
    index: number;
    time: ITime
}

const HistoryTime = ({index, time}: IHistoryTime) => {

    return (
        <Text variant="subtitle1" key={index} >
        {`${time.minutes} : ${time.seconds}`}
        </Text>
    )
}

export default HistoryTime