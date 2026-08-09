export type LoadingContextValues = {
  isVisible: boolean;
  loader: {
    show: () => void;
    hide: () => void;
  };
};

export type Loader = {
  show: () => void;
  hide: () => void;
};
