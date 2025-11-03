
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "../constants";
import { X } from "lucide-react"; // for close button
const NAVBAR_HEIGHT = 80; // adjust if your navbar height is different
const EventList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedEvent = eventsData.find((e) => e.id === selectedId);
  const cardTransition = {
    layout: { duration: 0.45, type: "spring" },
    opacity: { duration: 0.3 },
  };
  return (
    <div className="relative bg-black min-h-screen text-white px-6 md:px-16 py-24">
      {/* Grid of event cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
      >
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            layoutId={`card-${event.id}`}
            onClick={() => setSelectedId(event.id)}
            className="relative cursor-pointer w-full max-w-[520px] bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <motion.img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-64 object-cover"
              layoutId={`image-${event.id}`}
            />
            <motion.div className="p-5">
              <motion.h2
                className="text-2xl font-semibold mb-2"
                layoutId={`title-${event.id}`}
              >
                {event.title}
              </motion.h2>
              <motion.p
                className="text-gray-400 text-sm"
                layoutId={`shortDesc-${event.id}`}
              >
                {event.shortDescription}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* Overlay for expanded view */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            {/* Expanded card */}
            <motion.div
              key={`expanded-${selectedId}`}
              layoutId={`card-${selectedId}`}
              className="fixed inset-x-0 mx-auto z-50 w-[95vw] max-w-[1100px] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                top: `${NAVBAR_HEIGHT + 12}px`,
                height: `calc(100vh - ${NAVBAR_HEIGHT + 24}px)`,
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                layout: { duration: 0.55, type: "spring", damping: 18 },
                opacity: { duration: 0.35 },
              }}
            >
              <motion.div className="relative h-full flex flex-col">
                {/* Close button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-50 transition"
                >
                  <X size={20} />
                </button>
                <motion.img
                  src={selectedEvent.banner}
                  alt={selectedEvent.title}
                  className="w-full h-72 object-cover"
                  layoutId={`image-${selectedEvent.id}`}
                />
                <motion.div
                  className="flex-1 overflow-y-auto p-8"
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
                  <p className="text-gray-400 mb-2">{selectedEvent.date}</p>
                  <motion.p
                    className="text-gray-300 text-base leading-relaxed"
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
