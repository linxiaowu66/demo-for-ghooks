import React, { Component } from 'react';

export default class hisOrderList extends Component {
    columns () {
        var _self = this;
        return [
            {
                title: '序号',
                key: 'index',
                render: (text, record, index) => <span>{index+=1}</span>
            },
            {
                title: '操作',
                key: 'operate',
                fixed: 'right',
                width: 60,
                render: (text, record) => (<span><Button type="button" className="btn btn-primary btn-xs" title="查看" onClick={_self._handleToDetail.bind(null,record)}>查看</Button><Button type="button" title="人工派单" className="btn btn-primary btn-xs" style={{display:record.state==0&&record.allowManualDispatch==1?"inline-block":"none",marginLeft:10}} onClick={_self._handleDistribute.bind(null,record)}>人工派单</Button></span>),
            }
        ]
    }

    render() {
        const _self = this
        const {hisOrderSearchQuery,hisOrderSearchResult} = this.props
        return (
            <div columns={this.columns()}></div>
        )
    }
}
