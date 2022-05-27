import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const { Meta } = Card;

class App extends React.Component {
    render(){
        return(
            <Card
                style={{
                width: 300,
                margin: 20,
                border: '2px solid rgba(140, 140, 140, 0.35)',
                }}
                cover={
                <img
                    alt="example"
                    src={this.props.avatar}
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                <Meta
                avatar={<Avatar src={this.props.avatar} />}
                title={this.props.title}
                description={this.props.description}
                />
                <br></br>
                <hr></hr>
                <br></br>
                <p>Category:</p>
                <p>Description:</p>
            </Card>
        );
    }
}

export default App;