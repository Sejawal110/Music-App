import { TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from "./constants/Colors";

export const GoToPreviousButton = () => {

    

    return (
        <TouchableOpacity activeOpacity={0.50}>
            <AntDesign name="banckward" size={24} color={Colors.iconPrimary} />
        </TouchableOpacity>
    )
}


export const PlayPauseButton = () => {
    const isPlaying = true;
    return (
        <TouchableOpacity activeOpacity={0.50}>
           <Feather name={ isPlaying ? 'pause' : 'play'} size={30} color={Colors.iconPrimary} />
        </TouchableOpacity>
    )
} 



export const GoToNextButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.50}>
            <AntDesign name="forward" size={24} color={Colors.iconPrimary} />
        </TouchableOpacity>
    )
}