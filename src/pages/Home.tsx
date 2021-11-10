import { Link } from 'react-router-dom';
import { Card, Table } from 'antd';

export interface Props {
  users: Array<string>;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <Link to={`/user/${text}`}>{text}</Link>,
  },
];

function Home({ users = [] }: Props) {
  const data = users.map((v) => ({
    key: v,
    name: v,
  }));
  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true }}
      />
    </Card>
  );
}

export default Home;
