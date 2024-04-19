import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";
import { CiShoppingCart } from "react-icons/ci";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartDataArray, setCartDataArray } = useContext(CartContext);
  console.log("cartDataArray in Cart:", cartDataArray);

  // Check if the cartDataArray is an array and has at least one element
  if (Array.isArray(cartDataArray) && cartDataArray.length > 0) {
    // Extract the inner array from the outermost array
    const cartItems = cartDataArray[0];

    // Check if the extracted array is an array and has at least one element
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

      const purchaseHandler = () => {
        cartItems.length = 0; // Clear the cart items array
        setCartDataArray((prev) => [...prev]); // Update the state with the empty array
        alert(`Total billing amount is ${totalPrice}₹, thank you for shopping with us 😊`);
      };
     
      return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
          <h1 className="flex items-center justify-center gap-x-2 text-2xl font-semibold mb-8">
            <CiShoppingCart className="text-gray-600" /> Cart
          </h1>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 text-gray-800 mb-4">
              <h3>Item</h3>
              <h3 className="flex justify-end mr-10">Quantity</h3>
            </div>
            <div>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  url={item.url}
                  index={index}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-8">
              <h3 className="text-lg font-semibold">Total:</h3>
              <h3 className="text-lg font-semibold">${totalPrice.toFixed(2)}</h3>
            </div>
            <button
              onClick={purchaseHandler}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              PURCHASE
            </button>
          </div>
        </div>
      );
    }
  }

  // Render a fallback or loading state if the cartDataArray is empty or not an array
  return <div>Loading...</div>;
};

export default Cart;