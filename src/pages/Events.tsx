import { useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: "Religious" | "Social" | "Charity";
}

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Interfaith Dialog Session",
    date: "2024-04-15",
    location: "Community Center",
    description:
      "Join us for an evening of meaningful dialogue between different faith communities.",
    category: "Religious",
  },
  {
    id: "2",
    title: "Community Picnic",
    date: "2024-04-20",
    location: "Central Park",
    description: "A social gathering to strengthen community bonds.",
    category: "Social",
  },
  {
    id: "3",
    title: "Food Drive",
    date: "2024-04-25",
    location: "Local Food Bank",
    description: "Help us collect food for families in need.",
    category: "Charity",
  },
];

export default function Events() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [newEvent, setNewEvent] = useState<Event>({
    id: Math.random().toString(36).substring(2, 9),
    title: "",
    date: "",
    location: "",
    description: "",
    category: "Religious",
  });

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // basic form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!newEvent.title.trim()) errors.title = "Title is required";
    if (newEvent.title.length < 5)
      errors.title = "Name must have at least 5 characters";
    if (!newEvent.date) errors.date = "Date is required";
    if (!newEvent.location.trim()) errors.location = "Location is required";
    if (!newEvent.description.trim())
      errors.description = "Description is required";
    if (newEvent.description.length > 500)
      errors.description = "Description must be less than 500 characters";
    if (new Date(newEvent.date) < new Date())
      errors.date = "Date must be in the future";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({
      id: "",
      title: "",
      date: "",
      location: "",
      description: "",
      category: "Religious",
    });
    setIsFormOpen(false);
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Events</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Event
          </motion.button>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory("all")}
            className={`min-w-[100px] md:px-4 md:py-2 rounded-full px-3 ${
              selectedCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            } shadow-sm hover:shadow transition-all`}
          >
            All Events
          </motion.button>
          {["Religious", "Social", "Charity"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              } shadow-sm hover:shadow transition-all`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {format(new Date(event.date), "MMMM d, yyyy")}
                  </p>
                  <p className="text-gray-600">{event.location}</p>
                  <p className="text-gray-700 mt-4 truncate">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Dialog
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-xl w-full bg-white rounded-2xl shadow-xl">
              <div className="p-6">
                <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
                  Add New Event
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, title: e.target.value })
                      }
                      className={`mt-1 p-2 block w-full rounded-sm shadow-sm ${
                        formErrors.title
                          ? "border border-red-300 focus:border-red-500 focus:ring-red-500"
                          : " border border-gray-300  focus:ring-primary-500"
                      }`}
                    />
                    {formErrors.title && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, date: e.target.value })
                      }
                      className={`mt-1 p-2 block w-full rounded-sm shadow-sm ${
                        formErrors.title
                          ? "border border-red-300 focus:border-red-500 focus:ring-red-500"
                          : " border border-gray-300  focus:ring-primary-500"
                      }`}
                    />
                    {formErrors.date && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, location: e.target.value })
                      }
                      className={`mt-1 p-2 block w-full rounded-sm shadow-sm ${
                        formErrors.title
                          ? "border border-red-300 focus:border-red-500 focus:ring-red-500"
                          : " border border-gray-300  focus:ring-primary-500"
                      }`}
                    />
                    {formErrors.location && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      value={newEvent.description}
                      onChange={(e) =>
                        setNewEvent({
                          ...newEvent,
                          description: e.target.value,
                        })
                      }
                      className={`mt-1 p-2 block w-full rounded-sm shadow-sm ${
                        formErrors.title
                          ? "border border-red-300 focus:border-red-500 focus:ring-red-500"
                          : " border border-gray-300  focus:ring-primary-500"
                      }`}
                      rows={3}
                    />
                    {formErrors.description && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      value={newEvent.category}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setNewEvent({
                          ...newEvent,
                          category: e.target.value as Event["category"],
                        });
                      }}
                      className="mt-1 block w-full rounded-sm border-gray-400 bg-sky-100 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="Religious">Religious</option>
                      <option value="Social">Social</option>
                      <option value="Charity">Charity</option>
                    </select>
                  </div>

                  <div className="flex gap-4 justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Add Event
                    </button>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
