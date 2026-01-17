import { Stack } from 'expo-router';

export default function PlansStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Plans' }} />
            <Stack.Screen name="[planId]" options={{ title: 'Plan' }} />
        </Stack>
    );
}
