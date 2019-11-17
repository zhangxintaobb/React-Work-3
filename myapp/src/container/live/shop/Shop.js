import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel } from 'antd-mobile'
import Search from './Search'
import Body from './Body'
import Foot from './Foot'
export default class Shop extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ height: '58px', fontSize: '20px', backgroundColor: '#3fcccb', color: '#ffffff' }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >商城</NavBar>
                <Search/>
                <Body />
                <Foot />
            </div>
        )
    }
}
