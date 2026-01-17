import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../common';

interface CardTotalProps {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
}

export const CardTotal = ({ children, footer, header }: CardTotalProps) => {
    return (
        <ThemedView style={UI.container}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={UI.background} />
            {header}
            {children}
            {footer}
        </ThemedView>
    );
};

const UI = StyleSheet.create({
    container: {
        padding: 24,
        gap: 15,
    },
    background: {
        position: 'absolute',
        inset: 0,
    },
});
