
interface ButtonProps {
  children: string; // The text to be displayed on the button
  color?: string; // The color of the button (not used in this example, but can be used for styling)
  onClick: () => void; // Optional click handler function
}

const Button = ({children, color = "info", onClick}: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + color} // Bootstrap button class with dynamic color
      type="button" // Button type
      onClick={onClick} // Call the onClick function with the button text if provided
      style={{ cursor: 'pointer' }} // Set the cursor to pointer for better UX
    >
      {children}
    </button>
  );
}

export default Button;
// Compare this snippet from src/Components/ListGroup.tsx: