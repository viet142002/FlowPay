import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from '../common';

interface CardTotalProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const CardTotal = ({ children }: CardTotalProps) => {
    return (
        <ThemedView style={UI.container}>
            <LinearGradient
                colors={['#155DFC', '#1447E6']}
                style={UI.background}
            />
            {children}
        </ThemedView>
    );
};

CardTotal.Content = ({ children, style }: CardTotalProps) => (
    <ThemedView style={style}>{children}</ThemedView>
);

CardTotal.Header = ({ children, style }: CardTotalProps) => (
    <ThemedView style={[UI.header, style]}>{children}</ThemedView>
);
CardTotal.Footer = ({ children, style }: CardTotalProps) => (
    <ThemedView style={[UI.footer, style]}>{children}</ThemedView>
);

const UI = StyleSheet.create({
    container: {
        padding: 24,
        gap: 15,
        width: '100%',
        borderRadius: 24,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#00000013',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    background: {
        position: 'absolute',
        inset: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
