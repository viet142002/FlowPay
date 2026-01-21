import { ReactNode } from 'react';
import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from '../common';

interface CardProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ children, style }: CardProps) => {
    return (
        <ThemedView colorName="bgPrimary" style={[UI.container, style]}>
            {children}
        </ThemedView>
    );
};

const UI = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 12,
        padding: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#00000013',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});
