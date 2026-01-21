import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Card } from '@/components/Card';
import { ThemedText } from '@/components/common';

interface CardDirectProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
}

export const CardDirect = ({ icon, subtitle, title }: CardDirectProps) => {
    return (
        <Card style={UI.container}>
            <View
                style={[
                    UI.icon,
                    {
                        backgroundColor: '#DCFCE7',
                    },
                ]}
            >
                {icon}
            </View>
            <View>
                <ThemedText type="small" colorName="textSubtitle">
                    {title}
                </ThemedText>
                <ThemedText type="subtitle" colorName="textTitle">
                    {subtitle}
                </ThemedText>
            </View>
        </Card>
    );
};

const UI = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    icon: {
        borderRadius: 9999,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
