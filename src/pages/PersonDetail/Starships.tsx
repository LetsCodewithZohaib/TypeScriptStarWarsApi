import { Descriptions, Spin, Typography } from 'antd';

import { View } from 'components';

import { useGetStarships } from './hooks';

const { Text } = Typography;

let contentStyle = { textDecoration: 'underline' };

interface IStarshipsProps {
  starships: string[];
}

export const Starships: React.FC<IStarshipsProps> = ({ starships }) => {
  const { data, isLoading } = useGetStarships(starships);

  return (
    <Spin spinning={isLoading}>
      {data.map((starship) => {
        const { url, name, manufacturer, passengers, cargo_capacity, starship_class,cost_in_credits } =
        starship;

        return (
          <View key={url} style={{ backgroundColor: '#a9bbff' }}>
            <View>
              <Text strong>
                {name} 
              </Text>
            </View>           

            <Descriptions column={1}>
            <Descriptions.Item label="Manufacturer">
                {manufacturer}
              </Descriptions.Item>
              <Descriptions.Item label="Passengers">
                {passengers}
              </Descriptions.Item>
              <Descriptions.Item label="Cargo Capacity">
                {cargo_capacity}
              </Descriptions.Item>
              <Descriptions.Item label="Starship Class">
                {starship_class}
              </Descriptions.Item>
              <Descriptions.Item label="Cost in Credits">
                {cost_in_credits}
              </Descriptions.Item>
            </Descriptions>
          </View>
        );
      })}
    </Spin>
  );
};
