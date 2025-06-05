import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppLayout } from '../components/AppLayout';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  host: string;
  participants: number;
  description: string;
}

export default function Community() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);

  // Data dummy tanpa gambar
  const events: Event[] = [
    {
      id: 1,
      title: "AI Art Workshop",
      date: "2025-06-10",
      time: "14:00",
      host: "Creative AI Club",
      participants: 45,
      description: "Join us for an interactive workshop on creating AI art!"
    },
    {
      id: 2,
      title: "Machine Learning Meetup",
      date: "2025-06-15",
      time: "18:30",
      host: "AI Enthusiasts",
      participants: 32,
      description: "Weekly meetup to discuss latest ML trends and techniques."
    },
    {
      id: 3,
      title: "Coding Challenge",
      date: "2025-06-20",
      time: "10:00",
      host: "Code Masters",
      participants: 28,
      description: "Participate in our monthly coding challenge!"
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Community Events
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedEvent(event);
                  setShowEventModal(true);
                }}
              >
                <div className="relative bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Host: {event.host}
                    </span>
                    <span className="text-sm text-gray-400">
                      {event.participants} participants
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Modal */}
          {showEventModal && selectedEvent && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div 
                className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-300">
                    <div>{selectedEvent.date}</div>
                    <div>{selectedEvent.time}</div>
                  </div>
                  <div className="text-gray-300">
                    <div>Host: {selectedEvent.host}</div>
                    <div>{selectedEvent.participants} participants</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  {selectedEvent.description}
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => setShowEventModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    Join Event
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AppLayout>
  );
}
