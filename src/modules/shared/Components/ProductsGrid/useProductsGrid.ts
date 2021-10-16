import React from 'react';
import type { Nullable, CartItemType } from 'modules';

export type ProductsGridParams = {
  products: Array<CartItemType>;
};

const useProductsGrid = ({ products }: ProductsGridParams) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(
    products.length > 3 ? Math.ceil(products.length / 3) : products.length
  );
  const [page, setPage] = React.useState(0);

  const handleChangePage = (
    _: Nullable<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event?.target.value, 10));
    setPage(0);
  };

  const calculateTotal = (items: Array<CartItemType>) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return {
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    calculateTotal,
  };
};

export default useProductsGrid;
