import { Space, Table, Tag } from 'antd';
import React from 'react'

const CategoryManager = () => {
    const data = [
        { id: 1, name: 'danh mục 1', description: 'Mô tả', status: true },
        { id: 2, name: 'danh mục 2', description: 'Mô tả', status: true },
        { id: 3, name: 'danh mục 3', description: 'Mô tả', status: false },
        { id: 4, name: 'danh mục 4', description: 'Mô tả', status: true },
    ];
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'id',
        },
        {
            title: 'Status',
            key: 'id',
            dataIndex: 'status',
            render: (status) => (
                <Tag color={status ? 'success' : 'red'}>
                    {status ? 'active' : 'inactive'}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'id',
            render: (_,) => (
                <Space size="middle">
                    <a className='btn btn-primary'>Edit</a>
                    <a className='btn btn-danger'>Delete</a>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default CategoryManager