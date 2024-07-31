import { useNode } from "@craftjs/core";

export const useApplyRef = () => {
    const {
        connectors: { connect, drag },
      } = useNode();
    
      return (tag: any) => connect(drag(tag!));
}