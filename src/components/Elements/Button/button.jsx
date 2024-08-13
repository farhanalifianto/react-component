const Button = (props) => {
    const {children,
      variant="bg-black",
      onClick = () => {},
      type="button"
      } = props//props and default
    return(
      <>
        
          <button className={`h-8 px-4 font-semibold rounded-md ${variant} text-white`} 
          type={type}
          onClick={onClick}
          >
                {children}
          </button>
          
      </>
    )
  }
  export default Button