import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CategoryEdit = () => {
    // lấy id 
    const { id } = useParams();
    useEffect(() => {
        getCategoryFormAPI();
    }, [])
    const [dataForm, setDataForm] = useState({
        categoryName: "",
        description: "",
        categoryStatus: true
    });
    const navigate = useNavigate();
    // call API lấy về danh mục theo id 
    const getCategoryFormAPI = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/categories/${id}`)
        console.log(response.data, "Dư lie tu API theo id");
        setDataForm(response.data);
        console.log("formData", dataForm);
    }


    const handleAdd = () => {
        console.log(dataForm);
        // call API để cập nhật
        axios.put(`http://localhost:8080/api/v1/categories/${id}`, dataForm)
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
                            checked={dataForm.categoryStatus}
                            onChange={() => setDataForm({ ...dataForm, categoryStatus: true })}
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
                            checked={!dataForm.categoryStatus}
                            onChange={() => setDataForm({ ...dataForm, categoryStatus: false })}
                        />
                        <label className="form-check-label">Inactive</label>
                    </div>

                </div>


                <button type="button" onClick={handleAdd} className="btn btn-primary">Cập nhật</button>
            </form>
        </>
    )
}

export default CategoryEdit