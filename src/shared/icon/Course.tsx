type CourseIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};
export function Course({ size = 26, ...props }: CourseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Open book */}
      <path
        d="M12 5.5C10.5 4.3 8.4 3.5 5.5 3.5H4.5C3.67 3.5 3 4.17 3 5V17C3 17.83 3.67 18.5 4.5 18.5H5.5C8.4 18.5 10.5 19.3 12 20.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 5.5C13.5 4.3 15.6 3.5 18.5 3.5H19.5C20.33 3.5 21 4.17 21 5V17C21 17.83 20.33 18.5 19.5 18.5H18.5C15.6 18.5 13.5 19.3 12 20.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 5.5V20.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
