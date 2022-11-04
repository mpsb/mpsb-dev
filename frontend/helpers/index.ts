import { RefObject, useEffect } from "react";
import { allArticles, Article } from "@constants/types";
import qs from "qs";

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
  }, [ref, isOpen, desiredAction]);
}

export async function getPostData(queries: any) {
  console.log(`http://localhost:1337/api/articles?${qs.stringify(queries)}`);
  const res = await fetch(
    `http://localhost:1337/api/articles?${qs.stringify(queries)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occurred please try again`);
  }
  const data = res.json();

  return data;
}

// for processing grid-template-areas in the Grid component. Returns the array of classes to classify each grid area, and the grid-template-areas column when window width is <= 768px
export function processInputAreas(areas: string | undefined) {
  let classes: Array<string> = [];
  let gridAreaClasses: string = "";
  let responsiveGridTemplateAreas = "";
  let cleanAreas = areas
    ?.split('"')
    .filter((element: string) => element !== " ")
    .filter((element: string) => element !== "");

  cleanAreas?.forEach((row: string) => {
    classes = classes.concat(
      row
        .split(" ")
        .filter(
          (word: string, index: number, self: Array<string>) =>
            self.indexOf(word) === index
        )
    );
  });

  classes.forEach((className: string) => {
    gridAreaClasses += `.${className} {grid-area: ${className};}`;
  });

  classes.forEach((className: string) => {
    responsiveGridTemplateAreas += `"${className}" `;
  });

  return { gridAreaClasses, responsiveGridTemplateAreas };
}
