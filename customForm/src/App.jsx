// import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
// import React, { useState } from 'react';

// const App = () => {
//   const [items, setItems] = useState({
//     "drop-canvas": ["1"],
//     "drop-can-2": [],
//   });

//   const handleDragEnd = ({ active, over }) => {
//     if (over && active.id !== over.id) {
//       setItems((prevItems) => {
//         const sourceContainer = Object.keys(prevItems).find((key) =>
//           prevItems[key].includes(active.id)
//         );
//         const targetContainer = over.id;
//         return {
//           ...prevItems,
//           [sourceContainer]: prevItems[sourceContainer].filter(id => id !== active.id),
//           [targetContainer]: [...prevItems[targetContainer], active.id],
//         };
//       });
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <div className="flex gap-4">
//         {["drop-canvas", "drop-can-2"].map((id) => (
//           <Droppable key={id} id={id}>
//             {items[id].map((itemId) => (
//               <Draggable key={itemId} id={itemId} />
//             ))}
//           </Droppable>
//         ))}
//       </div>
//     </DndContext>
//   );
// };

// const Draggable = ({ id }) => {
//   const { attributes, transform, setNodeRef, listeners } = useDraggable({ id });

//   const style = {
//     transform: transform
//       ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
//       : undefined,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className="w-24 h-24 bg-blue-300 flex items-center justify-center m-2"
//       {...listeners}
//       {...attributes}
//     >
//       Drag {id}
//     </div>
//   );
// };

// const Droppable = ({ id, children }) => {
//   const { isOver, setNodeRef } = useDroppable({ id });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`w-72 h-72 ${
//         isOver ? 'bg-green-900' : 'bg-gray-500'
//       } flex items-center justify-center`}
//     >
//       {children}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Draggable from "./components/Draggable";

const App = () => {
  return (
     <div className="h-screen bg-black">
      <Draggable />
     </div>
  )
}

export default App
