import { View, type ViewProps } from 'react-native';

import { Colors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export function ThemedView({
    style,
    lightColor,
    darkColor,
    colorName,
    ...otherProps
}: ThemedViewProps) {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        colorName ?? 'transparent',
    );

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
