type TypeOf =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function"
  | "null"
  | "array";

export default function hasProps(
  props: Record<string, TypeOf[]>,
  object: Record<string, unknown>,
): boolean {
  const propsEntries = Object.entries(props);

  const index = propsEntries.findIndex(function noType(prop) {
    const [key, value] = prop;

    let type: TypeOf;

    if (Array.isArray(object[key])) {
      type = "array";
    } else if (object[key] == null) {
      type = "null";
    } else {
      type = typeof object[key];
    }

    return !value.includes(type);
  });

  return index == -1;
}
