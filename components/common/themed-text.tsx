import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
    type?:
        | 'default'
        | 'title'
        | 'semibold'
        | 'subtitle'
        | 'link'
        | 'heading'
        | 'small';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    colorName,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor(
        { light: lightColor, dark: darkColor },
        colorName ?? 'text',
    );

    const textStyle = styles[type] ?? undefined;

    return <Text style={[{ color }, textStyle, style]} {...rest} />;
}

const styles = StyleSheet.create({
    small: {
        fontSize: 11,
        lineHeight: 16,
    },
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    semibold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 36,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    },
});
