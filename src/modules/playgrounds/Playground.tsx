import { ENTITIES } from "@shared/domain";
import { Modal } from "@shared/overlays";

export const Playground = () => {
  const { open } = Modal.use();

  const onConfirm = () => {
    console.log("Confirmed");
  };
  return (
    <button
      className="button-primary solid button-base"
      onClick={() =>
        open({
          ...Modal.config.delete(ENTITIES.USER),
          onConfirm,
        })
      }
    >
      Open Modal
    </button>
  );
};
