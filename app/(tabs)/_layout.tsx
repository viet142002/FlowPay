import { Tabs } from 'expo-router';
import React from 'react';

import { useThemeColor } from '@/hooks/use-theme-color';

import IC_BAR_CHART from '@/assets/icons/ic_bar_chart.svg';
import IC_CIRCLE_CHART from '@/assets/icons/ic_circle_chart.svg';
import IC_HOME from '@/assets/icons/ic_home.svg';
import IC_STONK from '@/assets/icons/ic_stonk.svg';

export default function TabLayout() {
    const bgActionPrimary = useThemeColor({}, 'bgActionPrimary');

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: bgActionPrimary,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IC_HOME style={{ color }} />,
                }}
            />
            <Tabs.Screen
                name="plans"
                options={{
                    title: 'Plans',
                    tabBarIcon: ({ color }) => <IC_CIRCLE_CHART style={{ color }} />,
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: 'Stats',
                    tabBarIcon: ({ color }) => <IC_BAR_CHART style={{ color }} />,
                }}
            />
            <Tabs.Screen
                name="income"
                options={{
                    title: 'Income',
                    tabBarIcon: ({ color }) => <IC_STONK style={{ color }} />,
                }}
            />
        </Tabs>
    );
}
