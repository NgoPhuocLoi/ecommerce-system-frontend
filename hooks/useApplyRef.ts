import { useNode } from "@craftjs/core";

export const useApplyRef = () => {
    const {
        connectors: { connect, drag }, isActive, actions
      } = useNode(node => {
        return {
          isActive: node.events.selected
        }
      });
      const applyRef = (tag: any) => connect(drag(tag!))
      return {applyRef, isActive, actions} ;
}