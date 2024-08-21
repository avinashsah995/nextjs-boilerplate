import dynamic from "next/dynamic";

/**
 * Dynamically load in index file to avoid doing it every time
 * we import it inside a component
 */
const CustomIcon: any = dynamic(() => import("./custom-icon"), {
  ssr: false,
});

export default CustomIcon;
