import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel } from 'antd-mobile'
import Body from './Body';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },

];

export default class Idea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ height: '58px', fontSize: '20px', backgroundColor: '#3fcccb', color: '#ffffff' }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <Body />
                </Tabs>
            </div>
        )
    }
}
