import { motion } from "framer-motion";

const Draggable = () => {
    return (
        <motion.div 
         drag
         className="
           w-[13rem]
           p-9
           bg-teal-900
           border-2
           border-white
           flex
           justify-center
           items-center
           rounded-xl
           cursor-grab
         "
        >
          Drag me
        </motion.div>
      )
}

export default Draggable