import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import {
  changeForm,
  modalToggle,
  rowData,
} from "../../redux/reducers/dashboardSlice";
import { deleteProduct } from "../../api/deleteProduct";
import { updateTable } from "../../redux/reducers/productsSlice";

const CrmTable = () => {
  const dispatch = useDispatch();
  let count=0;
  const productData = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const newProduct = useSelector((state) => state.product.newProduct);
  const updatedProduct = useSelector((state) => state.product.updatedProduct);

  useEffect(() => {
    if (newProduct) {
      const newProductArray = [...productData?.products, newProduct];
      dispatch(updateTable(newProductArray))
    }
  }, [newProduct]);

  useEffect(() => {
    if (updatedProduct) {
      const newProductArray = productData?.products?.map((key) => {
        if (key.id === updatedProduct?.id) {
          return (key = updatedProduct);
        }
        return key;
      });
      dispatch(updateTable(newProductArray))
    }
  }, [updatedProduct]);

  const handleEdit = (e, row) => {
    e.preventDefault();
    dispatch(rowData(row));
    dispatch(modalToggle(true));
    dispatch(changeForm("edit"));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productData?.products &&
          productData?.products.map((row, i) => {
            if (row.isDeleted) return;
            count++;
            return (
              <tr key={row.id}>
                <td>{count}</td>
                <td>{row.brand}</td>
                <td>{row.title}</td>
                <td>$ {row.price}</td>
                <td>
                  <div className="table-action">
                    <div onClick={(e) => handleEdit(e, row)}>
                      <CiEdit />
                    </div>
                    <div onClick={(e) => handleDelete(e, row.id)}>
                      <MdDelete />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CrmTable;
