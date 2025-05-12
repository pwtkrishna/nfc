type StarRatingProps = {
  rating: number;
};

const Star = ({
  fill = "#E0E0E0",
  fill2 = "#04CEFA",
  fill3 = "#1F2128",
}: {
  fill?: string;
  fill2?: string;
  fill3?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={fill}
    stroke="#04CEFA"
  >
    <path
      d="M9.04096 3.24677C9.32324 2.29115 10.6768 2.29115 10.959 3.24677L12.0334 6.88409C12.159 7.30912 12.5493 7.60081 12.9925 7.60081H16.6575C17.6031 7.60081 18.0205 8.79169 17.2819 9.38199L14.1579 11.8787C13.8403 12.1325 13.708 12.5532 13.8232 12.9431L14.977 16.8494C15.2542 17.7877 14.158 18.5247 13.3936 17.9138L10.6243 15.7006C10.2592 15.4088 9.74076 15.4088 9.37569 15.7006L6.60636 17.9138C5.84204 18.5247 4.74584 17.7877 5.02301 16.8494L6.17684 12.9431C6.292 12.5532 6.15968 12.1325 5.84212 11.8787L2.71814 9.38199C1.97952 8.79169 2.39693 7.60081 3.34245 7.60081H7.00753C7.45071 7.60081 7.84102 7.30912 7.96657 6.88409L9.04096 3.24677Z"
      fill={fill2}
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_742_3710"
        x1="84"
        y1="9.5"
        x2="96"
        y2="9.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.479775" stopColor={fill2}></stop>
        <stop offset="0.57798" stopColor={fill3}></stop>
      </linearGradient>
    </defs>
  </svg>
);

const ReviewStar = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <span className="flex items-start">
      {Array.from({ length: totalStars }, (_, i) => {
        if (i < fullStars) {
          return <Star key={i} fill="#04CEFA" />;
        } else if (i === fullStars && hasHalfStar) {
          return (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              stroke="#04CEFA"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={`half-${i}`}
                  x1="0"
                  y1="0"
                  x2="20"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="50%" stopColor="#04CEFA" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                d="M9.04096 3.24677C9.32324 2.29115 10.6768 2.29115 10.959 3.24677L12.0334 6.88409C12.159 7.30912 12.5493 7.60081 12.9925 7.60081H16.6575C17.6031 7.60081 18.0205 8.79169 17.2819 9.38199L14.1579 11.8787C13.8403 12.1325 13.708 12.5532 13.8232 12.9431L14.977 16.8494C15.2542 17.7877 14.158 18.5247 13.3936 17.9138L10.6243 15.7006C10.2592 15.4088 9.74076 15.4088 9.37569 15.7006L6.60636 17.9138C5.84204 18.5247 4.74584 17.7877 5.02301 16.8494L6.17684 12.9431C6.292 12.5532 6.15968 12.1325 5.84212 11.8787L2.71814 9.38199C1.97952 8.79169 2.39693 7.60081 3.34245 7.60081H7.00753C7.45071 7.60081 7.84102 7.30912 7.96657 6.88409L9.04096 3.24677Z"
                fill={`url(#half-${i})`}
              />
            </svg>
          );
        } else {
          return <Star key={i} fill="none" fill2="none" fill3="none" />;
        }
      })}
    </span>
  );
};

export default ReviewStar;
