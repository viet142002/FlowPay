import { View } from 'react-native';

interface ProgressProps {
    bgColor: string;
    progressColor: string;
    progress: number;
    total: number;
    height?: number;
}

export const Progress = ({
    bgColor,
    progressColor,
    progress,
    total,
    height = 8,
}: ProgressProps) => {
    const percentage = Math.min((progress / total) * 100, 100);
    const isMoreThanFull = progress > total;

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                height,
                backgroundColor: bgColor,
                borderRadius: height / 2,
                overflow: 'hidden',
            }}
        >
            <View
                style={{
                    width: `${percentage}%`,
                    height,
                    backgroundColor: isMoreThanFull ? '#FF0000' : progressColor,
                    borderRadius: height / 2,
                }}
            />
        </View>
    );
};
