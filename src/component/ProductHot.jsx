import React, { useState } from 'react'
import './ProductHot.css'
import { categories } from '../data/category'
import { Button, Card } from 'react-bootstrap';
import { products } from '../data/product';
const ProductHot = () => {
    const [flag, setFlag] = useState(0);
    const handleClickActive = (index, categoryId) => {
        setFlag(index);
        // lấy về danh sách sản phẩm theo categoryId
        let data = products.filter((item) => item.categoryId == categoryId);
        setList(data);
    }
    const listProduct = products.filter((item) => {
        return item.categoryId == 1
    });
    const [list, setList] = useState(listProduct);
    return (
        <>
            <div className='mt-5'>
                <h2 className='text-center p-3'>Sản phẩm ưa chuộng</h2>
            </div>
            <div className='category text-center mb-5'>
                <div>
                    {categories.map((item, index) => {
                        return (
                            <a className={flag == index ? 'category-active category-btn' : 'category-btn'}
                                key={index} onClick={() => handleClickActive(index, item.id)}>{item.name}</a>
                        )
                    })}
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="row">
                        {list.map((item, index) => {
                            return (
                                <div className="col-lg-3" key={index}>
                                    <Card>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                            <Button variant="primary">Xem Ngay</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductHot