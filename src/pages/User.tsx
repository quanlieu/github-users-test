import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Spin, Avatar, Row, Col } from 'antd';

import IUser from '../types/user';
import { getSingleUser } from '../apis/user';

function User() {
  const [userInfo, setUserInfo] = useState<IUser>();
  const params = useParams();
  useEffect(() => {
    async function getApi() {
      const response = await getSingleUser(params.name);
      setUserInfo(response.data);
    }

    getApi();
  }, [params.name]);

  if (!userInfo) {
    return (
      <div style={{ margin: 16 }}>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <Card style={{ maxWidth: 400, margin: 16 }}>
      <p>
        <Link to="/">Go back</Link>
      </p>
      <Row gutter={16} align="middle">
        <Col>
          <Avatar src={userInfo.avatar_url} />
        </Col>
        <Col>
          <b>{userInfo.name}</b>
          <br />
          {userInfo.location}
        </Col>
      </Row>
    </Card>
  );
}

export default User;
