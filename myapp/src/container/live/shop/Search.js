import React, { Component } from 'react'
import { SearchBar, WingBlank, WhiteSpace, Carousel } from 'antd-mobile'
const img = [
    { src: 'image/live-home2.PNG' },
    { src: 'image/live-home1.PNG' },
    { src: 'image/live-home2.PNG' },
    { src: 'image/live-home1.PNG' }
];
export default class Search extends Component {

    render() {
        return (
            <div style={{ height: '20%' }}>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {img.map(val => (
                        <a
                            key={{ val }}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', float: 'left', }}
                        >
                            <div style={{ position: 'absolute', top: '0px', width: '100%', opacity: '0.7', backgroundColor: 'white' }}>
                                <WingBlank size="xl">
                                    <div>
                                        <img src='image/shop12.jpg' style={{ width: '20px', height: '23px', float: 'left', marginRight: '10px', marginTop: '15px' }} />
                                        <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
                                    </div>
                                </WingBlank>
                            </div>
                            <img
                                src={val.src}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}

                </Carousel>

            </div>
        )
    }
}
