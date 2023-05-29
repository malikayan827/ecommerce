import { StyleSheet, Dimensions } from "react-native";


const SellerModalStyles = StyleSheet.create({
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

export {SellerModalStyles}