import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex } from 'antd-mobile';

export default class Body extends Component {
    render() {
        return (
            <div style={{ padding: '16px 0',background:'#eeeeee' }}>
                <div className="flex-container">
                    <WingBlank>
                        <Flex>
                            <Flex.Item>
                                <div>
                                    <img style={{ width:'100%', height: '120px' }} src='image/live-home3.PNG' />
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div><img style={{ height: '120px',width:'100%' }} src='image/live-home4.PNG' /></div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img style={{ height: '120px',width:'100%' }} src='image/live-home5.PNG' />
                                </div>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>

                </div>
            </div >


        )
    }
}
