import { Text } from "@react-native-material/core";
import { styles } from "./styles";
interface IDisplay {
    minutes: number;
    seconds: number;
}
const Display = ({minutes, seconds}: IDisplay) => {
    return (
    <Text style={styles.title}>
        {minutes < 10 ? 0 + minutes : minutes} :
        {seconds < 10 ? 0 + seconds : seconds}
      </Text>
    )
}

export default Display