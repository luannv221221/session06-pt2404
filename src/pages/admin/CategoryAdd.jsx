import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryAdd = () => {
    const [dataForm, setDataForm] = useState({
        categoryName: "",
        description: "",
        status: true
    });
    const navigate = useNavigate();
    const handleAdd = () => {
        console.log(dataForm);
        // call API để thêm mới
        axios.post("http://localhost:8080/api/v1/categories", dataForm)
            .then((response) => {
                console.log(response);
                // chuyển về trang danh sách 
                navigate("/admin/category2")
            }).catch(e => console.log(e));
    }
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Tên danh mục</label>
                    <input type="text" className="form-control"
                        value={dataForm.categoryName}
                        onChange={(e) => setDataForm({ ...dataForm, categoryName: e.target.value })} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Mô tả</label>
                    <input type="text" className="form-control"
                        value={dataForm.description}
                        onChange={(e) => setDataForm({ ...dataForm, description: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Trạng thái</label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name=""
                            id=""
                            value={true}
                            checked={dataForm.status}
                            onChange={() => setDataForm({ ...dataForm, status: true })}
                        />
                        <label className="form-check-label" >Active</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name=""
                            id=""
                            value={false}
                            checked={!dataForm.status}
                            onChange={() => setDataForm({ ...dataForm, status: false })}
                        />
                        <label className="form-check-label">Inactive</label>
                    </div>

                </div>


                <button type="button" onClick={handleAdd} className="btn btn-primary">Thêm mới</button>
            </form>
        </>
    )
}

export default CategoryAdd