import { View } from 'react-native';

import { CardTotal } from '@/components/CardTotal';
import { ThemedText, ThemedView } from '@/components/common';

import IC_STONK from '@/assets/icons/ic_stonk.svg';
import IC_UN_STONK from '@/assets/icons/ic_un_stonk.svg';
import IC_WALLET from '@/assets/icons/ic_wallet.svg';

export const CardTotalBalance = () => {
    return (
        <CardTotal>
            <CardTotal.Header>
                <ThemedText colorName="textInverseMute">
                    Total Balance
                </ThemedText>
                <IC_WALLET color="#BEDBFF" />
            </CardTotal.Header>
            <CardTotal.Content style={{ gap: 4 }}>
                <ThemedText colorName="textInverse" type="heading">
                    $-2,090.0
                </ThemedText>
                <ThemedText colorName="textInverseMute">
                    0.0% of income used
                </ThemedText>
            </CardTotal.Content>
            <CardTotal.Footer>
                <ThemedView style={{ flex: 1 }}>
                    <ThemedText colorName="textInverseMute">Income</ThemedText>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 4,
                            alignItems: 'center',
                        }}
                    >
                        <IC_STONK color="#7BF1A8" width={16} height={16} />
                        <ThemedText colorName="textInverse" type="semibold">
                            $0.00
                        </ThemedText>
                    </View>
                </ThemedView>
                <ThemedView style={{ flex: 1 }}>
                    <ThemedText colorName="textInverseMute">
                        Expenses
                    </ThemedText>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 4,
                            alignItems: 'center',
                        }}
                    >
                        <IC_UN_STONK color="#FFA2A2" width={16} height={16} />
                        <ThemedText colorName="textInverse" type="semibold">
                            $2,090.053
                        </ThemedText>
                    </View>
                </ThemedView>
            </CardTotal.Footer>
        </CardTotal>
    );
};
