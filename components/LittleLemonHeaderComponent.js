import * as React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '@/styles/Styles';

export default function LittleLemonHeader() {
    return (
        <View style={globalStyles.viewFooterAndHeader}>
            <Text style={globalStyles.textFooterAndHeader}>
                Welcome to Little Lemon
            </Text>
        </View>
    );
}