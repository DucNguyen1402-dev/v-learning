type ErrorMessageProps = {
  message?: string;
};
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  console.log("ErrorMessage", message);

  return (
    <div className="error-message-spacing">
      <p className="error-message">{message}</p>
    </div>
  );
};
