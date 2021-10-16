import { CartItemType, SharedProps } from 'modules';
import {
  Wrapper,
  Buttons,
  StyledButton,
  StyledImage,
  InfoContainer,
} from './style';

type Props = SharedProps & {
  item: CartItemType;
};

export const Item: React.FunctionComponent<Props> = ({
  item,
  showAsCartItem,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <StyledImage src={item.image} alt={item.title} />
    <InfoContainer>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
      {showAsCartItem && <p>Total: ${(item.amount * item.price).toFixed(2)}</p>}
    </InfoContainer>
    {!showAsCartItem ? (
      <StyledButton onClick={() => addToCart(item)}>Add to cart</StyledButton>
    ) : (
      <Buttons>
        {removeFromCart && (
          <StyledButton
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </StyledButton>
        )}
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
