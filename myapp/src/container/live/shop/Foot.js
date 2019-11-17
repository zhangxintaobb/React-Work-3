import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex } from 'antd-mobile';
export default class Foot extends Component {
    render() {
        return (
            <div style={{ padding: '16px 0', background: '#eeeeee' }}>
                <div className="flex-container">
                    <WingBlank>
                        <Flex>
                            <Flex.Item>
                                <div>
                                    <img style={{ width: '100%', height: '120px' }} src='image/shop13.jpg' />
                                    <h6 style={{margin:'0px',marginTop:'5px'}}>Top Art Studio 欧式风格精细...</h6>
                                    <h6 style={{margin:'0px',marginTop:'5px',marginBottom:'5px'}}>￥39.95</h6>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div><img style={{ height: '120px', width: '100%' }} src='image/shop14.jpg' /></div>
                                <h6 style={{margin:'0px',marginTop:'5px'}}>顺顺工艺欧式风格塑料外框黑...</h6>
                                <h6 style={{margin:'0px',marginTop:'5px',marginBottom:'5px'}}>￥83.99</h6>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div>
                                    <img style={{ width: '100%', height: '120px' }} src='image/live-home2.PNG' />
                                </div>
                            </Flex.Item>
                        
                        </Flex>
                    </WingBlank>

                </div>
            </div >
        )
    }
}
