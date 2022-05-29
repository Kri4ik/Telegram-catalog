import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import Card from "../ChannelCard/Card"
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
  
    const loadMoreData = () => {
      if (loading) {
        return;
      }
  
      setLoading(true);
      fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        .then((res) => res.json())
        .then((body) => {
          setData([...data, ...body.results]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };
  
    useEffect(() => {
      loadMoreData();
    }, []);
    return (
      <div
        id="scrollableDiv"
        style={{
          height: 600,
          overflow: 'auto',
          padding: '0 16px',
          margin: "0px,10px,0px,10px",
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >

        <List
        grid={{column:4, gutter:130}}
        itemLayout= "vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
                <Card avatar={item.picture.large} title={item.name.last} description={item.email}/>

            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App;