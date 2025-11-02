
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { eventsData } from "../constants/eventsData";
import { eventsData } from "../constants";
import { X } from "lucide-react";
const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <div className="relative">
      {/* Grid Layout - 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer relative overflow-hidden rounded-3xl shadow-lg group transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-[380px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-3xl">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-300">{event.shortDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Expanded modal for details */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-n-8 border border-n-6 rounded-3xl w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-n-6 hover:bg-n-5 transition-all"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={22} />
              </button>
              <img
                src={selectedEvent.banner}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-3xl font-bold mb-3 text-white">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-300 mb-2">{selectedEvent.date}</p>
              <p className="text-gray-400 leading-relaxed">
                {selectedEvent.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default EventList;
