import React, { Component } from 'react'

import { List, Avatar } from 'antd';
import Tags from './Tags.js'

const data = [
    {
        title: 'Project 0001',
    },
    {
        title: 'Project 0002',
    },
    {
        title: 'Project 0003',
    },
    {
        title: 'Project 0004',
    },
];

export default class ProjectsList extends Component {

    render(){
        return (
            <List
        itemLayout = "horizontal"
        dataSource = { data }
        renderItem = {
                item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<Tags></Tags>}
                        />
                    </List.Item>
                )
            }
                />
    );
        }
}
