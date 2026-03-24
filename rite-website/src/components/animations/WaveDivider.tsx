export default function WaveDivider({
    fill = "#F3F4F6",
    flip = false,
}: {
    fill?: string;
    flip?: boolean;
}) {
    return (
        <div
            className="wave-divider"
            style={flip ? { transform: "rotate(180deg)" } : undefined}
        >
            <svg
                viewBox="0 0 2880 60"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,30 C480,0 960,60 1440,30 C1920,0 2400,60 2880,30 L2880,60 L0,60 Z"
                    fill={fill}
                />
            </svg>
        </div>
    );
}
