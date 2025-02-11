import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { validateInput } from "../../contex/FormValidation";

const Verification = ({ navigation }) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [error, setError] = useState("");

    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (text, index) => {
        if (text.length <= 1) {
            switch (index) {
                case 0:
                    setValue1(text);
                    break;
                case 1:
                    setValue2(text);
                    break;
                case 2:
                    setValue3(text);
                    break;
                case 3:
                    setValue4(text);
                    break;
                case 4:
                    setValue5(text);
                    break;
            }
            setError(validateInput(text));
            if (text && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Verify Account</Text>
            <Text>Welcome back! Please enter the code sent to your email.</Text>
            <View style={styles.narrow}>
                <Text style={styles.label}>Email:</Text>
                <View style={styles.col}>
                    {[value1, value2, value3, value4, value5].map((val, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={styles.input}
                            placeholder="-"
                            keyboardType="numeric"
                            maxLength={1}
                            value={val}
                            onChangeText={(text) => handleChange(text, index)}
                        />
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate('VerificationLoader')}
            >
                <Text style={styles.btnText}>Verify</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Don't have an account? 
                <Text
                    style={styles.goto}
                    onPress={() => navigation.navigate('Login')}
                >Go Back To Login</Text>
            </Text>
        </View>
    );
};

export default Verification;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    narrow: {
        width: '90%',
        marginTop: 24,
    },
    col: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        height: 58,
        width: 58,
        textAlign: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        fontSize: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
    },
    btnPrimary: {
        backgroundColor: '#0065FF',
        width: '90%',
        height: 48,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
    },
    btnText: {
        color: '#ffffff',
        fontSize: 16,
    },
    h1: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 24,
    },
    goto: {
        color: '#0065FF',
        fontWeight: '800',
        marginLeft: 4,
        margin: 12,
    },
    gotoDanger: {
        color: '#F04438',
        fontWeight: '800',
        marginLeft: 4,
        margin: 12,
    },
});
