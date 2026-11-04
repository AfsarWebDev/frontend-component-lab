const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
}

const sizes = {
    sm: `px-3 py-1.5 text-xs`,
    md: `px-4 py-2 text-sm`,
    lg: `px-6 py-3 text-base`,
}

function Button({ children, variant = 'primary', size = 'md'}) {
    const variantStyles = variants[variant] ?? variants.primary
    const sizeStyles = sizes[size] ?? sizes.md

    return (
        <button className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>
            {children}
        </button>
    )
}

export default Button;