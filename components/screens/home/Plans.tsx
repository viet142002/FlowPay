import { View } from 'react-native';
import { CardPlan, CardProps } from './CardPlan';

const data: CardProps[] = [
    {
        current: 300,
        total: 1000,
        title: 'Plan A',
        icon: { color: '', key: '', bgColor: '#F0EAFE' },
    },
    {
        current: 15,
        total: 20,
        title: 'Plan B',
        icon: { color: '', key: '', bgColor: '#E1F6EF' },
    },
    {
        current: 300,
        total: 1000,
        title: 'Plan C',
        icon: { color: '', key: '', bgColor: '#F0EAFE' },
    },
    {
        current: 15,
        total: 20,
        title: 'Plan D',
        icon: { color: '', key: '', bgColor: '#E1F6EF' },
    },
];

export const Plans = () => {
    return (
        <View style={{ gap: 8 }}>
            {data.map((item) => (
                <PlanItem
                    key={item.title}
                    current={item.current}
                    icon={item.icon}
                    title={item.title}
                    total={item.total}
                />
            ))}
        </View>
    );
};

const PlanItem = (cardProps: CardProps) => {
    return <CardPlan {...cardProps} />;
};
