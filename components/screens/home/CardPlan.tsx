import { Icon, Progress, ThemedText, ThemedView } from '@/components/common';
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface CardProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    title: string;
    current: number;
    total: number;
    icon: {
        color: string;
        key: string;
        bgColor: string;
    };
}

export const CardPlan = ({
    style,
    onPress,
    title,
    current,
    total,
    icon,
}: CardProps) => {
    return (
        <ThemedView colorName="bgPrimary" style={[UI.container, style]}>
            <View style={UI.content}>
                <Icon icon={icon} />
                <View style={{ marginLeft: 12 }}>
                    <View>
                        <ThemedText colorName="textTitle">{title}</ThemedText>
                        <ThemedText colorName="textSubtitle">
                            {current} of {total}
                        </ThemedText>
                    </View>
                </View>
            </View>
            <Progress
                bgColor="#F1F5F9"
                progressColor="#3B82F6"
                progress={current}
                total={total}
            />
        </ThemedView>
    );
};

const UI = StyleSheet.create({
    container: {
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
    icon: {
        borderRadius: 9999,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
});
