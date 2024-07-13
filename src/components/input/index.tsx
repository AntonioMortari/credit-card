import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface IInputProps extends TextInputProps {

}

const Input = ({style,  ...rest }: IInputProps) => {
    return (
        <TextInput style={[styles.input, style]} {...rest}>

        </TextInput>
    )
}

export { Input };