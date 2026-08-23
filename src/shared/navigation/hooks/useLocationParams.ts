import { useParams } from "react-router-dom";

export const useLocationParams = () => {
  const params = useParams();

  return params;
};
