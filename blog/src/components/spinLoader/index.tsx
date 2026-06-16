
type SpinLoaderProps = {
    containerClasses?: string;
};

export function SpinLoader({containerClasses = ''}: SpinLoaderProps) {

    return (
        <div className={`flex items-center justify-center ${containerClasses}`}>
            {/* SVG spinner fallback: works even if Tailwind isn't compiled */}
            <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                aria-hidden="true"
                className="w-10 h-10"
            >
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                />
                <path
                    d="M45 25a20 20 0 00-7.5-15"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
        </div>
    );

}


