function Input({ type, placeholder, onChangeHandler }) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            onChange={onChangeHandler} 
            className="m-4 w-3/6 h-10 border-2 border-indigo-500/50"
        />
    )
}

export default Input;