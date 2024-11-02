import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'

const CategoryManager = () => {
    const [data, setData] = useState([]);
    // call API 
    const callAPI = () => {
        fetch("http://localhost:8080/api/v1/categories").
            then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        callAPI();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'categoryName',
            key: 'id',
        },
        {
            title: 'Status',
            key: 'id',
            dataIndex: 'categoryStatus',
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