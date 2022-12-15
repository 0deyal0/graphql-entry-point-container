import { PropsWithRef, useEffect, useState } from "react";
import { EntryPoint } from "./types";

export const EntryPointContainer = <Variables, Props extends {}>({
  entrypoint: { component: Component, fetch, variables },
}: {
  entrypoint: EntryPoint<Variables, Props>;
}) => {
  const [props, setProps] = useState<Props | null>(null);

  useEffect(() => {
    fetch(variables).then((props) => {
      setProps(props);
    });
  }, [fetch, variables]);

  if (props === null) return <div>"loading..."</div>;

  // TODO: check
  return <Component {...(props as React.Attributes & PropsWithRef<Props>)} />;
};
