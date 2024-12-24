import * as React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '@/styles/Styles';

export default function LittleLemonFooter() {
    return (
        <View style={globalStyles.viewFooterAndHeader}>
            <Text style={globalStyles.textFooterAndHeader}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    );
}