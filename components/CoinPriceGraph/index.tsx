import React from 'react';
import { Dimensions } from 'react-native';
import { ElementView } from '../Themed'
import { LineChart } from "react-native-chart-kit";
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface CoinPriceGraphProps {
  dataString: string;
}

export default function CoinPriceGraph({ dataString }: CoinPriceGraphProps) {
  const colorScheme = useColorScheme();

  const data = JSON.parse(dataString);

  return (
    <ElementView>
      <LineChart
        data={{
          labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d",  "-1d", 'now'],
          datasets: [
            {
              data
            }
          ]
        }}
        width={Dimensions.get("window").width - 30}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withOuterLines={false}
        withInnerLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: Colors[colorScheme].primary,
          decimalPlaces: data[0] > 100 ? 0 : 2, // optional, defaults to 2dp
          color: (opacity = 1) => Colors[colorScheme].secondary,
          labelColor: (opacity = 1) => Colors[colorScheme].text,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#fafafa"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </ElementView>
  );
};
