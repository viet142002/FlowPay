import { View } from 'react-native';

import { Container, ThemedText } from '@/components/common';
import { CardTotalBalance } from '@/components/screens/home';
import { CardDirect } from '@/components/screens/home/CardDirect';
import { Plans } from '@/components/screens/home/Plans';

import IC_PLUS from '@/assets/icons/ic_plus.svg';
import IC_STONK from '@/assets/icons/ic_stonk.svg';

export default function HomeTabScreen() {
    return (
        <Container scrollable>
            <View style={{ marginBottom: 24, gap: 8 }}>
                <ThemedText colorName="textSubtitle">Current Preiod</ThemedText>
                <ThemedText type="title" colorName="textTitle">
                    February 2026
                </ThemedText>
            </View>
            <CardTotalBalance />
            <View
                style={{
                    marginVertical: 24,
                    gap: 12,
                    flexDirection: 'row',
                }}
            >
                <CardDirect
                    icon={<IC_STONK color="#155DFC" />}
                    title="Update"
                    subtitle="Income"
                />
                <CardDirect
                    icon={<IC_PLUS color="#00A63E" />}
                    title="Manage"
                    subtitle="Plans"
                />
            </View>
            <Plans />
        </Container>
    );
}
