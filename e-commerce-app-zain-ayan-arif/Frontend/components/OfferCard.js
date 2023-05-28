import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'

const OfferCard = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('') // 'accept', 'reject', 'offer'
    const [modalAnimation] = useState(new Animated.Value(0));

    const item = props.item

    const handleModalOpen = (type) => {
        setModalType(type);
        setShowModal(true);
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
            setShowModal(false);
            setModalType('');
        });
    };

    const modalTranslateY = modalAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get('window').height, 0],
    });

    const renderModalContent = () => {
        switch (modalType) {
            case 'accept':
                return (
                    <View style={styles.ModalMainView}>
                        <Animated.View
                            style={[
                                styles.ModalInnerView,
                                { transform: [{ translateY: modalTranslateY }] },
                            ]}
                        >
                            <Text style={styles.ModalHeadText}>Accept Offer</Text>
                            <Text style={styles.ModalText}>Are you sure you want to sell {item.product} to {item.customerName}?</Text>
                            <Text style={styles.ModalText}>Price will be: {item.price}</Text>
                            <TouchableOpacity style={styles.ModalBTN} onPress={handleCloseModal}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Accept</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                );
            case 'reject':
                return (
                    <View style={styles.ModalMainView}>
                        <Animated.View
                            style={[
                                styles.ModalInnerView,
                                { transform: [{ translateY: modalTranslateY }] },
                            ]}
                        >
                            <Text style={styles.ModalHeadText}>Reject Offer</Text>
                            <Text style={styles.ModalText}>Are you sure you want to reject the offer for {item.product} from {item.customerName}?</Text>
                            <TouchableOpacity style={styles.ModalBTN} onPress={handleCloseModal}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Reject</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                );
            case 'offer':
                return (
                    <View style={styles.ModalMainView}>
                        <Animated.View
                            style={[
                                styles.ModalInnerView,
                                { transform: [{ translateY: modalTranslateY }] },
                            ]}
                        >
                            <Text style={styles.ModalHeadText}>Make Offer</Text>
                            <TextInput
                                style={styles.ModalTextInput}
                                placeholder="Enter your offer"
                            />
                            <TouchableOpacity style={styles.ModalBTN} onPress={handleCloseModal}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit Offer</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>{item.product}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardBodyLeft}>
                        <Text style={styles.cardBodyText}>Price: {item.price}</Text>
                        <Text style={styles.cardBodyText}>Offer: {item.offer}</Text>
                        <Text style={styles.cardBodyText}>Counter Offer: {item.counterOffer}</Text>
                        <Text style={styles.cardBodyText}>Date: {item.date}</Text>
                    </View>
                    <View style={styles.cardBodyRight}>
                        <Text style={styles.cardBodyText}>Customer Name: {item.customerName}</Text>
                        <Text style={styles.cardBodyText}>Customer ID: {item.customerId}</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.Button} onPress={() => handleModalOpen('accept')}>
                        <Text style={styles.ButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => handleModalOpen('reject')}>
                        <Text style={styles.ButtonText}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => handleModalOpen('offer')}>
                        <Text style={styles.ButtonText}>Make Offer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
                onRequestClose={handleCloseModal}
            >
                {renderModalContent()}
            </Modal>
        </View>
    )
}

export default OfferCard

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
        width: '30%',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: '#fff',
        fontSize: 16
    },
    ModalMainView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ModalInnerView: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width - 50,
        borderRadius: 10,
        padding: 20
    },
    ModalHeadText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ModalText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10
    },
    ModalTextInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    ModalBTN: {
        backgroundColor: 'black',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    }
})
