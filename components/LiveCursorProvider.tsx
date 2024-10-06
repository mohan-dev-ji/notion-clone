// @ts-nocheck

"use client";

import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
// import { PointerEvent } from "react";
import { PointerEvent } from "react";
import FollowPointer from "./FollowPointer";

   

function LiveCursorProvider({ children }: { children: React.ReactNode }) {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    // Update from ClientX and CLientY to PageX and Page Y for full page cursor tracking
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
    updateMyPresence({ cursor });
  }

  function handlePointerLeave() {
    updateMyPresence({ cursor: null });
  }

  return (
  <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {others
        .filter((other) => other.presence.cursor !== null)
        .map(({ connectionId, presence, info }) => {
          // Log individual cursor data
          console.log(`Rendering cursor for connection ${connectionId}:`, presence.cursor);
          return (
            <FollowPointer 
              key={connectionId}
              info={info as any}
              x={presence.cursor?.x ?? 0}
              y={presence.cursor?.y ?? 0}
            />
          );
        })}
      {children}
    {/* Render Cursors */}
    </div>
  )  
}

export default LiveCursorProvider;