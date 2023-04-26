import { Collapse, Descriptions, Typography } from 'antd';
import { IPeople } from 'swapi-ts';

import { Gap, View } from 'components';

import { Homeworld } from './Homeworld';
import { Starships } from './Starships';


const { Text } = Typography;

const { Panel } = Collapse;

interface IPersonProps {
  person: IPeople;
}

export const Person: React.FC<IPersonProps> = ({ person }) => {
  const {
    name,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,    
    homeworld,
    starships
  } = person;


  return (
    <View>
      <Descriptions
        title={<Text type="secondary">Name {name}.</Text>}      
        column={2}
      >
        <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
        <Descriptions.Item label="Height">{height}</Descriptions.Item>
        <Descriptions.Item label="Weight">{mass}</Descriptions.Item>
        <Descriptions.Item label="Hair">{hair_color}</Descriptions.Item>
        <Descriptions.Item label="Skin">{skin_color}</Descriptions.Item>
        <Descriptions.Item label="Eyes">{eye_color}</Descriptions.Item>
      </Descriptions>

      <Text type="secondary">Birth year {birth_year}.</Text>
      <Gap size={16} vertical />
      <Collapse>
        <Panel header="Planets" key="homeworld">
          <Homeworld homeworld={homeworld as string} />
        </Panel>        
        <Panel
          header={`Starships (${starships.length})`}
          key="starships"
        >
          <Starships starships={starships as string[]} />
        </Panel>
      </Collapse>
    </View>
  );
};
