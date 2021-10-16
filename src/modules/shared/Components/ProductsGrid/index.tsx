import React from 'react';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';
import { Item, SharedProps } from 'modules';
import { GridContainer, Container } from './style';
import useProductsGrid, { ProductsGridParams } from './useProductsGrid';

type ProductsGridProps = SharedProps & ProductsGridParams;

export const ProductsGrid: React.FunctionComponent<ProductsGridProps> = ({
  products,
  showAsCartItem,
  addToCart,
  removeFromCart,
}) => {
  const {
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    calculateTotal,
  } = useProductsGrid({
    products,
  });

  return (
    <GridContainer>
      <Container>
        <Grid container spacing={3}>
          {products
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item
                  {...{ item, addToCart, removeFromCart, showAsCartItem }}
                />
              </Grid>
            ))}
        </Grid>
        {products.length > 0 && (
          <TablePagination
            rowsPerPageOptions={[
              Math.ceil(products.length / 3),
              Math.ceil(products.length / 2),
              products.length,
            ]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
        <div>
          {products.length === 0 ? <p>No items found</p> : null}
          {showAsCartItem && (
            <h2>Total: ${calculateTotal(products).toFixed(2)}</h2>
          )}
        </div>
      </Container>
    </GridContainer>
  );
};
