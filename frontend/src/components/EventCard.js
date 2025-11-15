import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventCard = ({ event, onClick }) => {
  // ✅ Use a universal ID (works for both backend and frontend events)
  const eventId = event._id || event.id;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(eventId)} // ✅ Pass correct ID when clicked
      className="event-card glass-card overflow-hidden group cursor-pointer"
      data-testid={`event-card-${eventId}`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image || 'https://via.placeholder.com/400x200?text=Event+Image'} // fallback image
          alt={event.title || event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-60"></div>
        
        {/* Category Badge */}
        {event.category && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-400/90 text-[#0f0c29] rounded-full text-xs font-semibold">
              {event.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors"
          data-testid={`event-title-${eventId}`}
        >
          {event.title || event.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {event.description || 'No description available'}
        </p>

        {/* Event Info */}
        <div className="space-y-2">
          {event.date && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Calendar size={16} className="text-yellow-400" />
              <span>
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin size={16} className="text-yellow-400" />
              <span>{event.location}</span>
            </div>
          )}

          {event.department && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Tag size={16} className="text-yellow-400" />
              <span>{event.department}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            className="text-yellow-400 font-semibold group-hover:underline"
            data-testid={`view-details-btn-${eventId}`}
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
