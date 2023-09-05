


function Input({type, name, placeholder, value, inputId, defaultValue, label, helperText, error , onChange}) {

    return (
        <div>
            {label && (<label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>)}

            {helperText && (<label className="block text-sm text-gray-600">{helperText}</label>)}

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={inputId}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <p className="mt-2 text-red-600 text-sm ">{error}</p>
        </div>

    );
}
export default Input