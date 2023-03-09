import { Text, Box } from "@react-native-material/core";
import { styles } from "./styles";
interface IDisplay {
    minutes: number;
    seconds: number;
}
const Display = ({minutes, seconds}: IDisplay) => {
    return (
    <Box style={{borderWidth: 1, borderRadius: 15}}>
        <Text style={styles.title}>
            {minutes < 10 ? 0 + minutes : minutes} :
            {seconds < 10 ? 0 + seconds : seconds}s
        </Text>
    </Box>
    )
}

export default Display