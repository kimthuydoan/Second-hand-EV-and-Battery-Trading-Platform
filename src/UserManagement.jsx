import {Table} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';    
function UserManagement() {
  
  const api = "https://684f9a81e7c42cfd179534c3.mockapi.io/api/users";
  const fetchStudent = () => {
    //Lấy dữ liệu từ back-end
    //aixos 
    const response =  axios.get(api)

    console.log(response.data)
    //promise => function bất đồng bộ => cần thời gian để thực hiện
    //await => đợi tới khi api trả về kết quả 

    //GET => lấy dữ liệu
    //POST => thêm dữ liệu
    //PUT => sửa dữ liệu
    //DELETE => xóa dữ liệu
    
  };
   //[] 

  return (
    <div>
        <h1>User Management</h1>
        <Table/>
    </div>
  );
}

export default UserManagement;