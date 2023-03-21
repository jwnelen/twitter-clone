import React, {forwardRef} from "react";
import clsx from "clsx";

type Ref = HTMLButtonElement;

interface ButtonOptions {
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement> & ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {className, children, ...rest} = props;

  const merged = clsx(
    "bg-blue-400 py-2 px-4 rounded-full text-white font-bold",
    className
  )

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;