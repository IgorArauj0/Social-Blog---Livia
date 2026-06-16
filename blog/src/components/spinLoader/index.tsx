
type SpinLoaderProps = {
    containerClasses?: string;
    fullScreen?: boolean;
};

export function SpinLoader({containerClasses = '', fullScreen = false}: SpinLoaderProps) {

    const containerBase = 'flex items-center justify-center';
    const inlineStyle: React.CSSProperties | undefined = fullScreen
        ? {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
          }
        : undefined;

    return (
        <div className={`${containerBase} ${containerClasses}`.trim()} style={inlineStyle}>
            {/* Inline CSS keyframes + SVG fallback to ensure animation without Tailwind */}
            <style>{`@keyframes sb-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
            <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                aria-hidden="true"
                className="w-10 h-10"
                style={{ animation: 'sb-spin 1s linear infinite', transformOrigin: '25px 25px' }}
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


