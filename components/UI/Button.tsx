import React, {forwardRef} from "react";
import clsx from "clsx";

type Ref = HTMLButtonElement;

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {className, children, onClick, disabled, ...rest} = props;

  const merged = clsx(
    "bg-blue-500 py-2 px-4 rounded-full text-white font-bold",
    className
  )

  return (
    <button ref={ref} className={merged} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;