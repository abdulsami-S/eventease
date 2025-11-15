// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Calendar, MapPin, Tag, Clock } from 'lucide-react';
// import { toast } from 'sonner';

// export const AddEventModal = ({ isOpen, onClose, onAddEvent }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Workshop',
//     date: '',
//     time: '',
//     location: '',
//     department: '',
//     organizer: '',
//     description: '',
//     image: 'https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=srgb&fm=jpg&q=85'
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.title || !formData.date || !formData.location) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     const newEvent = {
//       id: Date.now(),
//       ...formData,
//       registrationLink: '#',
//       highlights: ['New event', 'Limited seats', 'Register now']
//     };

//     onAddEvent(newEvent);
//     toast.success('Event created successfully!');
//     onClose();

//     // Reset form
//     setFormData({
//       title: '',
//       category: 'Workshop',
//       date: '',
//       time: '',
//       location: '',
//       department: '',
//       organizer: '',
//       description: '',
//       image: 'https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=srgb&fm=jpg&q=85'
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//             data-testid="add-event-modal-backdrop"
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
//             data-testid="add-event-modal"
//           >
//             <div className="glass-card p-8 w-full max-w-2xl relative my-8">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//                 data-testid="close-add-event-modal"
//               >
//                 <X size={24} />
//               </button>

//               {/* Header */}
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold mb-2">Create New Event</h2>
//                 <p className="text-gray-400">Fill in the details to create a new campus event</p>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Title */}
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-2">Event Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={formData.title}
//                       onChange={handleChange}
//                       placeholder="Enter event title"
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                       data-testid="add-event-title-input"
//                     />
//                   </div>

//                   {/* Category */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Category</label>
//                     <div className="relative">
//                       <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors appearance-none cursor-pointer"
//                         data-testid="add-event-category-select"
//                       >
//                         <option value="Workshop" className="bg-[#0f0c29]">Workshop</option>
//                         <option value="Tech Talk" className="bg-[#0f0c29]">Tech Talk</option>
//                         <option value="Festival" className="bg-[#0f0c29]">Festival</option>
//                         <option value="Competition" className="bg-[#0f0c29]">Competition</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Date */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Date *</label>
//                     <div className="relative">
//                       <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
//                         data-testid="add-event-date-input"
//                       />
//                     </div>
//                   </div>

//                   {/* Time */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Time</label>
//                     <div className="relative">
//                       <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="text"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         placeholder="e.g., 10:00 AM - 5:00 PM"
//                         className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                         data-testid="add-event-time-input"
//                       />
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Location *</label>
//                     <div className="relative">
//                       <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         placeholder="Event location"
//                         className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                         data-testid="add-event-location-input"
//                       />
//                     </div>
//                   </div>

//                   {/* Department */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Department</label>
//                     <input
//                       type="text"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                       placeholder="Department name"
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                       data-testid="add-event-department-input"
//                     />
//                   </div>

//                   {/* Organizer */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Organizer</label>
//                     <input
//                       type="text"
//                       name="organizer"
//                       value={formData.organizer}
//                       onChange={handleChange}
//                       placeholder="Organizer name"
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
//                       data-testid="add-event-organizer-input"
//                     />
//                   </div>

//                   {/* Description */}
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-2">Description</label>
//                     <textarea
//                       name="description"
//                       value={formData.description}
//                       onChange={handleChange}
//                       placeholder="Describe your event..."
//                       rows="4"
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
//                       data-testid="add-event-description-input"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex gap-4">
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="flex-1 btn-secondary"
//                     data-testid="cancel-add-event-btn"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 btn-primary"
//                     data-testid="submit-add-event-btn"
//                   >
//                     <span>Create Event</span>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default AddEventModal;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Tag, Clock, Image } from "lucide-react";
import { toast } from "sonner";

// ✅ Default images for each category
const categoryImages = {
  "Workshop": "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  "Tech Talk": "https://images.unsplash.com/photo-1581091215367-59ab6e3652b3?auto=format&fit=crop&w=800&q=80",
  "Festival": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "Competition": "https://images.unsplash.com/photo-1606761568499-6f6bdfb89c4c?auto=format&fit=crop&w=800&q=80",
  "Hackathon": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  "Seminar": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "Webinar": "https://images.unsplash.com/photo-1581093588401-22c9b6b74c56?auto=format&fit=crop&w=800&q=80",
  "Guest Lecture": "https://images.unsplash.com/photo-1590608897129-79da98d159c7?auto=format&fit=crop&w=800&q=80",
  "Cultural Event": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  "Music Show": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
  "Sports Meet": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  "Conference": "https://images.unsplash.com/photo-1573497019951-6c9476d1039d?auto=format&fit=crop&w=800&q=80",
};

const AddEventModal = ({ isOpen, onClose, onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Workshop",
    date: "",
    time: "",
    location: "",
    department: "",
    organizer: "",
    description: "",
    image: categoryImages["Workshop"],
  });

  // ✅ Update form values dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-update the image when category changes
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "category" && { image: categoryImages[value] }),
    });
  };

  // ✅ Submit new event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...formData,
      registrationLink: "#",
      highlights: ["New event", "Limited seats", "Register now"],
    };

    onAddEvent(newEvent);
    toast.success("Event created successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="glass-card p-8 w-full max-w-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-center">
                Create New Event
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter event title"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Category */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Category
                    </label>
                    <div className="relative">
                      <Tag
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      >
                        {Object.keys(categoryImages).map((cat) => (
                          <option key={cat} value={cat} className="bg-[#0f0c29]">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">Date *</label>
                    <div className="relative">
                      <Calendar
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">Time</label>
                    <div className="relative">
                      <Clock
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        placeholder="e.g. 9:00 AM - 5:00 PM"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Event location"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Department name"
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>

                  {/* Organizer */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Organizer
                    </label>
                    <input
                      type="text"
                      name="organizer"
                      value={formData.organizer}
                      onChange={handleChange}
                      placeholder="Organizer name"
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Event Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your event..."
                    rows="4"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
                  />
                </div>

                {/* Image URL (auto-updated) */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Image URL (auto-updated with category)
                  </label>
                  <div className="relative">
                    <Image
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    Add Event
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddEventModal;
