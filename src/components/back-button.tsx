type BackButtonProps = {
  itemId: number;
  setItemId: React.Dispatch<React.SetStateAction<number>>;
};
export const BackButton = ({ itemId, setItemId }: BackButtonProps) => {
  if (itemId < 1) return null;
  return (
    <div>
      <a onClick={() => setItemId(-1)} href="##">
        Back
      </a>
    </div>
  );
};
