/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    // Common
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    // Text Colors
    textTitle: '#0F172B',
    textSubtitle: '#62748E',
    textParagraph: '#45556C',
    textInverse: '#FFFFFF',
    textMute: '#90A1B9',
    textAction: '#155DFC',

    // Background Colors
    bgBase: '#F7F9FB',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#009439',
    bgActionPrimary: '#155DFC',
    bgActiveUnit: '#F0FDF4',
    bgActionSecondary: '#0F172B',
    bgProgressWithinBudget: '#8B5CF6',
    bgProgressOverBudget: '#E7000B'
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    // Text Colors
    textTitle: '#0F172B',
    textSubtitle: '#62748E',
    textParagraph: '#45556C',
    textInverse: '#FFFFFF',
    textMute: '#90A1B9',
    textAction: '#155DFC',

    // Background Colors
    bgBase: '#F7F9FB',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#009439',
    bgActionPrimary: '#155DFC',
    bgActiveUnit: '#F0FDF4',
    bgActionSecondary: '#0F172B',
    bgProgressWithinBudget: '#8B5CF6',
    bgProgressOverBudget: '#E7000B'
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
