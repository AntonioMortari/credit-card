import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { CARD_SIDE, CreditCard } from '@/components/credit-card';
import { useSharedValue } from 'react-native-reanimated';
import { Input } from '@/components/input';
import { useState } from 'react';



const Payment = () => {
    const cardSide = useSharedValue(CARD_SIDE.front);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [code, setCode] = useState('');

    const showCardFront = () => {
        cardSide.value = CARD_SIDE.front;
    }


    const showCardBack = () => {
        cardSide.value = CARD_SIDE.back;
    }

    const handleFlipCard = () => {
        if (cardSide.value === 0) {
            showCardBack()
        } else {
            showCardFront()
        }
    }


    return (
        <View style={styles.container}>
            <CreditCard cardSide={cardSide} data={{
                code,
                date: date.replace(/^(\d{2})(\d)/, '$1/$2'),
                name,
                number: number.replace(/\d{4}(?=\d)/g, '$& ')
            }} />

            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>Inverter</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <Input placeholder='Nome do titular' onChangeText={setName} onFocus={showCardFront} />

                <Input placeholder='Numero do cartão'
                    maxLength={16}
                    keyboardType='numeric'
                    onChangeText={setNumber}
                    onFocus={handleFlipCard}
                />

                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <Input placeholder='01/02' style={styles.smallInput} onChangeText={setDate} maxLength={4}  onFocus={showCardBack}/>
                    <Input placeholder='123' style={styles.smallInput} onChangeText={setCode} maxLength={3} onFocus={showCardBack} />

                </View>


            </View>
        </View>

    )
}

export { Payment };