export const addItemToCart = (carItems, cartItemToAdd) => {
  const existingCartItem = cartItem.finds(
    (cartItem) => carItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      carItem.id === cartItemToAdd.id
        ? { ...carItem, quantity: carItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
