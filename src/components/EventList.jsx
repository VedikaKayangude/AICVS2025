import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "../constants";
import { X } from "lucide-react";

// Used to offset the expanded card from the top (based on navbar height)
const NAVBAR_HEIGHT = 80;

const EventList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedEvent = eventsData.find((e) => e.id === selectedId);
  const selectedIndex = eventsData.findIndex((e) => e.id === selectedId);
  const isLeftColumn = selectedIndex % 2 === 0; // Used for directional exit animation

  return (
    <div className="relative bg-black min-h-screen text-white px-6 md:px-16 py-24">
      
      {/* Grid layout for event cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 justify-items-center"
      >
        {eventsData.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              layoutId={`card-${event.id}`}
              onClick={() => setSelectedId(event.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative cursor-pointer w-full max-w-[600px] bg-zinc-900 rounded-2xl overflow-hidden shadow-lg group 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 ${
                isLeft ? "z-[30]" : "z-[20]"
              }`}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: isLeft ? -40 : 40,
                transition: { duration: 0.35 },
              }}
            >
              {/* Thumbnail image with hover scale and brightness */}
              <motion.img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-[1.04] group-hover:brightness-75"
                layoutId={`image-${event.id}`}
              />

              {/* Title and short description overlayed on image */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-5 
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                transition-all duration-300"
                layoutId={`overlay-${event.id}`}
              >
                <motion.h2
                  className="text-2xl font-semibold mb-1"
                  layoutId={`title-${event.id}`}
                >
                  {event.title}
                </motion.h2>
                <motion.p
                  className="text-gray-300 text-sm"
                  layoutId={`shortDesc-${event.id}`}
                >
                  {event.shortDescription}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Expanded view overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Dimmed background with blur */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />

            {/* Fullscreen expanded card */}
            <motion.div
              key={`expanded-${selectedId}`}
              layoutId={`card-${selectedId}`}
              className="fixed inset-x-0 mx-auto w-[95vw] max-w-[1100px] 
              bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                top: `${NAVBAR_HEIGHT + 12}px`,
                height: `calc(100vh - ${NAVBAR_HEIGHT + 24}px)`,
                zIndex: 120,
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.985,
                x: isLeftColumn ? -30 : 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                x: isLeftColumn ? -60 : 60,
                zIndex: 120,
              }}
              transition={{
                layout: { duration: 0.55, type: "spring", damping: 18 },
                opacity: { duration: 0.35 },
                x: { duration: 0.45, ease: "easeInOut" },
              }}
            >
              <motion.div className="relative h-full flex flex-col">
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-[130] transition"
                >
                  <X size={20} />
                </button>

                {/* Banner image */}
                <motion.img
                  src={selectedEvent.banner}
                  alt={selectedEvent.title}
                  className="w-full h-72 object-cover"
                  layoutId={`image-${selectedEvent.id}`}
                />

                {/* Expanded event details */}
                <motion.div
                  className="flex-1 overflow-y-auto p-8 custom-scrollbar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <motion.h2
                    className="text-3xl font-semibold mb-3"
                    layoutId={`title-${selectedEvent.id}`}
                  >
                    {selectedEvent.title}
                  </motion.h2>
                  <p className="text-gray-400 mb-3">{selectedEvent.date}</p>
                  <motion.p
                    className="text-gray-300 text-base leading-relaxed tracking-wide"
                    layoutId={`desc-${selectedEvent.id}`}
                  >
                    {selectedEvent.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventList;