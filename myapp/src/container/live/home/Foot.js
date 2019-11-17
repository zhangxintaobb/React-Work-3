import React, { Component } from 'react'
import { WhiteSpace } from 'antd-mobile';
export default class Foot extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="sm" />
                <WhiteSpace size="sm" />
                <div style={{height:'30px'}}>
                    <div style={{display:'inline-block',width:'8px',height:'25px',background:'#3fcccb',float:'left'}}></div>
                    <h3 style={{display:'inline-block',float:'left',margin:'3px 20px'}}>热门推荐</h3>
                </div>
                <div style={{width:'100%'}}>
                <WhiteSpace size="sm" />
                    <img style={{width:'100%',height:'100%'}} src="image/live-home6.PNG" />
                </div>
            </div>
        )
    }
}

