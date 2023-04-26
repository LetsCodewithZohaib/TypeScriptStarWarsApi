import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';

interface IPersonCardProps {
  name: string;
  gender: string;
  url: string;
  birthyear: string;
  starships: number;
  vehicles:number;
}

export const PersonCard: React.FC<IPersonCardProps> = memo(
  ({ name, gender, url, birthyear,starships,vehicles }) => {
    const idSearch = btoa(url);
    const navigate = useNavigate();

    const onClick = useCallback(() => {
      navigate(idSearch);
    }, [idSearch, navigate]);

    return (
      <Col xs={24} md={12}>
        <Card hoverable onClick={onClick} data-testid="person-item"
         headStyle={{ backgroundColor: '#5c6cfa', color: '#ffffff' }}
         bodyStyle={{ backgroundColor: '#a9bbff' }}
         bordered={false}
         style={{ width: 300 }}
        >
          <Meta title={name} description={`Gender: ${gender}`} />
          <Meta description={`Birth Year: ${birthyear}`} />
          <Meta description={`Starships: ${starships}`} />
          <Meta description={`Vehicles: ${vehicles}`} />
        </Card>
      </Col>
    );
  }
);
