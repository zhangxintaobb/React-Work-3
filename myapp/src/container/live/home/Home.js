import React, { Component } from 'react'
import {NavBar,Icon,Tabs,Carousel} from 'antd-mobile'
import Body from './Body';
import Foot from './Foot';
const tabs = [
    { title: '推荐'},
    { title: '家居' },
    { title: '餐厨'},
    { title: '床上用品'},

  ];
const img=[
    {src:'image/live-home2.PNG'},
    {src:'image/live-home1.PNG'}
];

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{height:'58px',fontSize:'20px', backgroundColor:'#3fcccb',color:'#ffffff'}}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                // ]}
                >住吧家居</NavBar>
                        <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                            
                        {img.map(val => (
                            <a
                            key={{val}}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                            >
                            <img
                                src={val.src}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                        <Body />
                        <Foot />
            </div>
        )
    }
}
