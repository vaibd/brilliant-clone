const Error = ({ error }: { error: string }) => {
  return error ? <p className="text-red-500 text-sm text-left">{error}</p> : "";
};

export default Error;
