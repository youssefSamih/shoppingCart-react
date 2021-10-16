import { CartItemType, useHandleCart } from 'modules';
import {
  Wrapper,
  Buttons,
  StyledButton,
  StyledImage,
  InfoContainer,
} from './style';

type Props = {
  item: CartItemType;
  showAsCartItem?: boolean;
};

export const Item: React.FunctionComponent<Props> = ({
  item,
  showAsCartItem,
}) => {
  const { addToCart, handleRemoveFromCart, isItemInCart } = useHandleCart();
  const itemInThCart = Boolean(isItemInCart(item.id));

  return (
    <Wrapper data-testid={`${item.id}`}>
      <StyledImage src={item.image} alt={item.title} />
      <InfoContainer>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        {showAsCartItem && (
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        )}
      </InfoContainer>
      {!showAsCartItem ? (
        <StyledButton onClick={() => addToCart(item)} disabled={itemInThCart}>
          {itemInThCart ? 'In cart' : 'Add to cart'}
        </StyledButton>
      ) : (
        <Buttons data-testid="increase-decrease-button">
          <StyledButton
            size="small"
            disableElevation
            variant="contained"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            -
          </StyledButton>
          <p>{item.amount}</p>
          <StyledButton
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </StyledButton>
        </Buttons>
      )}
    </Wrapper>
  );
};
