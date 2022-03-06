import { Dispatch, SetStateAction, useCallback, useState } from "react";

export type ReturnType = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export default function useBoolean(defaultValue?: boolean): ReturnType {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(function setTrue() {
    setValue(true);
  }, []);

  const setFalse = useCallback(function setFalse() {
    setValue(false);
  }, []);

  const toggle = useCallback(function toggle() {
    setValue((x) => !x);
  }, []);

  return { value, setValue, setTrue, setFalse, toggle };
}
