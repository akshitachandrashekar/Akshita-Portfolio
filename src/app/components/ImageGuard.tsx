"use client";

import { useEffect } from "react";

export default function ImageGuard() {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("img, picture, [data-guard-image]")) {
        e.preventDefault();
      }
    };

    const blockDrag = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("img, picture, [data-guard-image]")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return null;
}
