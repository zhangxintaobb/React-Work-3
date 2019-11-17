import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Grid } from 'antd-mobile'
const img = [
    'image/shop1.jpg',
    'image/shop1.PNG',
    'image/shop2.PNG',
    'image/shop3.PNG',
    'image/shop4.PNG',
    'image/shop5.PNG',
    'image/shop6.PNG',
    'image/shop7.PNG',
    'image/shop8.PNG',
    'image/shop9.PNG',

   
]
const name = [
    "桌",
    "床",
    "椅",
    "几",
    "柜",
    "书架",
    "沙发",
    "家居饰品",
    "户外家居",
    "全部分类",
]
const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: img[i],
    text: name[i],
}));
export default class Body extends Component {
    render() {
        return (
            <div style={{ width: '100%' ,backgroundColor:'white'}}>
                <Grid data={data}
                    columnNum={5}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div  style={{ }}>
                            <img src={dataItem.icon} style={{ width: '45%', height: '45%' }} alt="" />
                            <div style={{ color: '#888', marginTop: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
