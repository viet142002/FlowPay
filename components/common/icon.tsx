import IC_STONK from '@/assets/icons/ic_stonk.svg';
import { StyleSheet, View } from 'react-native';

interface IconProps {
    icon: { color: string; key: string; bgColor: string };
    size?: number;
    sizeWrapper?: number;
    variant?: 'circle' | 'square';
}

export const Icon = ({
    icon,
    size = 24,
    sizeWrapper = 40,
    variant = 'circle',
}: IconProps) => {
    const IconCurrent = getIcon(icon);
    const isCircle = variant === 'circle';

    return (
        <View
            style={[
                UI.icon,
                {
                    backgroundColor: icon.bgColor,
                    width: sizeWrapper,
                    height: sizeWrapper,
                    borderRadius: isCircle ? 9999 : 12,
                },
            ]}
        >
            <IconCurrent color={icon.color} width={size} height={size} />
        </View>
    );
};

const getIcon = (icon: IconProps['icon']) => {
    switch (icon.key) {
        case 'stonk':
            return IC_STONK;
        default:
            return IC_STONK;
    }
};

const UI = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});
