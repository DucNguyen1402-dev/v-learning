export const ContainerSpinner = () => {
  return (
    <div className="relative size-9 select-none">
      <div className="absolute h-full w-full rounded-full border-4 border-border-subtle" />
      <div className="absolute h-full w-full animate-spin rounded-full border-4 border-border-muted border-t-transparent" />
    </div>
  );
};
