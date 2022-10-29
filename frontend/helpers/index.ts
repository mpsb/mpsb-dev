import { RefObject, useEffect } from "react";

export function useDetectOutsideClick(
  ref: RefObject<HTMLDivElement>,
  desiredAction: (() => void) | undefined,
  isOpen: boolean
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      const eventTarget = event.target as Node;

      if (ref.current && !ref.current.contains(eventTarget)) {
        if (isOpen) {
          if (
            eventTarget.parentNode?.children.namedItem(
              "first-accordion-line"
            ) ||
            eventTarget.nodeName === "BUTTON"
          ) {
          } else {
            desiredAction?.();
          }
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen]);
}
