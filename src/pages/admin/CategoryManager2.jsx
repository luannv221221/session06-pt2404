import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const CategoryManager2 = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategoryAPI();
    }, []);

    const getCategoryAPI = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/categories");
            console.log(response.data);
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    // ham xu ly xoa 
    const handlerDelete = (id) => {
        axios.delete(`http://localhost:8080/api/v1/categories/${id}`)
            .then(response => {
                console.log(response);
                getCategoryAPI();
            }).catch(e => alert('Danh mục đã tồn tại sản phẩm'));
    }
    return (
        <>

            <NavLink to={'/admin/category-add'} className='btn btn-success'>Thêm mới</NavLink>
            <div
                className="table-responsive"
            >
                <table
                    className="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => {
                            return (
                                <tr className="">
                                    <td scope="row">{index + 1}</td>
                                    <td>{item.categoryId}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.categoryStatus ? 'active' : 'inactive'}</td>
                                    <td>
                                        <NavLink to={'/admin/category-edit/' + item.categoryId} className='btn btn-primary'>Edit</NavLink>
                                        <button className='btn btn-danger' onClick={() => handlerDelete(item.categoryId)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default CategoryManager2