import { useCallback, useState } from "react";

const useToggle = (
  initialValue = false
): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const open = useCallback(() => {
    setValue(true);
  }, []);

  const close = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, open, close];
};

export default useToggle;
