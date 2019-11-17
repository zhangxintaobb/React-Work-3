import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Flex } from 'antd-mobile';
export default class Body extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                    <div className="flex-container">
                        <Flex>
                            <Flex.Item>
                                    <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                            <Flex.Item>
                                <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex>
                            <Flex.Item>
                                    <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                            <Flex.Item>
                                <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex>
                            <Flex.Item>
                                    <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                            <Flex.Item>
                                <img style={{ width: '100%' }} src='image/idea-body0.jpg' />
                            </Flex.Item>
                        </Flex>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
