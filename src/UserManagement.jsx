import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
function UserManagement() {
  const [users, setUsers] = useState([]); //biến trạng thái
  //state => biến trạng thái => khi thay đổi sẽ render lại giao diện
  //useState => hàm tạo biến trạng thái trong function component
  //const [tên biến, hàm set biến] = useState(giá trị khởi tạo)
  //setUsers => hàm để thay đổi giá trị của users
  //users => giá trị hiện tại của biến trạng thái
  //useEffect => hàm để thực hiện các hành động sau khi component được render

  const api = "https://684f9a81e7c42cfd179534c3.mockapi.io/api/users";
  const fetchUser = async () => {
    //Lấy dữ liệu từ back-end
    //aixos
    const response = await axios.get(api);

    console.log(response.data);
    //promise => function bất đồng bộ => cần thời gian để thực hiện
    //await => đợi tới khi api trả về kết quả
    setUsers(response.data);
    //thay đổi giá trị của biến trạng thái users
    //giao diện sẽ được render lại
    //CRUD => Create, Read, Update, Delete

    //GET => lấy dữ liệu
    //POST => thêm dữ liệu
    //PUT => sửa dữ liệu
    //DELETE => xóa dữ liệu
  };
  //[] dependency array
  useEffect(() => {
    //hanhh động sau khi component được render
    //chạy 1 cái gì đó
    //event listener
    //[] chạy khi load trang lần đầu tiên
    // [data] chạy khi data thay đổi

    fetchUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "Full Name", 
      dataIndex: "fullName",
       key: "fullName" },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    }
  ];

  return (
    <div>
      <h1>User Management</h1>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default UserManagement;
