import { Button, Modal, Space, Table, Tag, Form, Input, Switch } from 'antd';
import axios from 'axios';
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
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'Name',
            dataIndex: 'categoryName',
            key: 'categoryId',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'categoryId',
        },
        {
            title: 'Status',
            key: 'categoryId',
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
    // dog mo modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // sử lý form 
    const onFinish = (values) => {
        console.log('Success:', values);//
        // call API thuc hien chuc nang them moi 
        axios.post("http://localhost:8080/api/v1/categories", values)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err));
    };

    const [status, setStatus] = useState(true);
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm mới
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Category Name"
                        name="categoryName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your category name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Category Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Category Status"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Switch
                            checked={status}
                            onChange={() => {
                                setStatus(!status);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Thêm mới
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default CategoryManager