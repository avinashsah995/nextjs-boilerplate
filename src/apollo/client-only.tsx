import { useEffect, useState } from "react";

export default function ClientOnly(props: any) {
  const { children, ...delegated } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
