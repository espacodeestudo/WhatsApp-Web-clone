import P from "prop-types";

export const Cards = ({children}) => {
  return (
    <div>{children}</div>
  )
}

Cards.propTypes={
  children : P.node
}
