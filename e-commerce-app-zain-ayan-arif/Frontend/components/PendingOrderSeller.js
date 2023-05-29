import { StyleSheet, Text, View, TouchableOpacity, Linking, Modal, Animated, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';


import {SellerModalStyles} from './Styles/SellerModalStyles'


const PendingOrderSeller = (props) => {
    const [show, setShow] = useState(false);
    const [modalAnimation] = useState(new Animated.Value(0));
    const navigation = useNavigation();

    const item = props.item;
    const call = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${item.phone}`;
        } else {
            phoneNumber = `telprompt:${item.phone}`;
        }
        Linking.openURL(phoneNumber);
    };

    const handleReplyPress = () => {
        setShow(true);
        Animated.timing(modalAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleCloseModal = () => {
        Animated.timing(modalAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setShow(false);
        });
    };

    const modalTranslateY = modalAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get('window').height, 0],
    });

    const handleSendOTP = () => {
        handleCloseModal();
        navigation.navigate('SellerOtp');
    }

    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>{item.product}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardBodyLeft}>
                        <Text style={styles.cardBodyText}>Price: {item.price}</Text>
                        <Text style={styles.cardBodyText}>Date: {item.date}</Text>
                    </View>
                    <View style={styles.cardBodyRight}>
                        <Text style={styles.cardBodyText}>Customer Name: {item.customer}</Text>
                        <Text style={styles.cardBodyText}>Customer Address: {item.address}</Text>
                        <Text style={styles.cardBodyText}>Customer Phone: {item.phone}</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.Button} onPress={handleReplyPress}>
                        <Text style={styles.ButtonText}>Deliver Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={call}>
                        <Text style={styles.ButtonText}>call</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                transparent={true}
                visible={show}
                animationType="fade"
                onRequestClose={handleCloseModal}
            >
                <View style={SellerModalStyles.ModalMainView}>
                    <Animated.View
                        style={[
                            SellerModalStyles.ModalInnerView,
                            { transform: [{ translateY: modalTranslateY }] },
                        ]}
                    >
                        <Text style={SellerModalStyles.ModalHeadText}>Confirm Delivery</Text>
                        <Text style={SellerModalStyles.ModalText}>Send OTP to {item.customer}'s Email Address</Text>
                        <TouchableOpacity style={SellerModalStyles.ModalBTN} onPress={handleSendOTP}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Send OTP</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Modal>
        </View>
    )
}

export default PendingOrderSeller

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5
    },
    cardHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    cardBodyLeft: {
        width: '50%'
    },
    cardBodyRight: {
        width: '50%'
    },
    cardBodyText: {
        fontSize: 16,
        marginBottom: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    Button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        width: '30%'
    },
    ButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})