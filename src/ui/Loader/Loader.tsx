import { FC } from "react";
import { LoaderContainer, LoaderItem } from "./Loader.style";

const Loader: FC = () => {
  return (
    <LoaderContainer>
      <LoaderItem />
      Loading...
    </LoaderContainer>
  );
};

export default Loader;
