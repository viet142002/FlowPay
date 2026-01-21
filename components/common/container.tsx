import { ReactNode } from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/use-theme-color';
import { BottomSpace } from './bottom-space';
import { ThemedView } from './themed-view';

interface ContainerProps {
    children: ReactNode;
    edges?: ('top' | 'right' | 'bottom' | 'left')[];
    scrollable?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Container = ({
    children,
    edges,
    scrollable,
    style,
}: ContainerProps) => {
    const bgBase = useThemeColor({}, 'bgBase');

    return (
        <SafeAreaView
            edges={edges}
            style={{ flex: 1, backgroundColor: bgBase }}
        >
            {scrollable ? (
                <ScrollView style={[UI.container, style]}>
                    {children}
                    <BottomSpace />
                </ScrollView>
            ) : (
                <ThemedView style={[UI.container, style]}>
                    {children}
                    <BottomSpace />
                </ThemedView>
            )}
        </SafeAreaView>
    );
};

const UI = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        paddingInline: 24,
    },
});
