import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ashim Pathak',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: '“The QR ordering system made our dining experience so smooth! No waiting for servers to take our order, and we could pay right from our phones when we were ready to leave.”',
  },
  {
    id: 2,
    name: 'Shubraj Pathak',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    text: '“I love being able to see photos of every dish before ordering. The interface is intuitive and the ability to customize my meal directly through the app is fantastic!”',
  },
  {
    id: 3,
    name: 'Ashim Pathak',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    text: '“Great system that speeds up the whole dining process. I appreciate being able to order at my own pace without feeling rushed. The only improvement would be adding more photos.”',
  },
];

const Star = () => (
  <svg
    className="w-5 h-5 text-orange-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="relative  py-16 px-4 sm:px-6 lg:px-20">
      {/* Leaf background images */}
      <img
        src="/Images/leaf.png"
        alt="Leaf decoration"
        className="hidden md:block absolute right-0 top-10 w-32 opacity-20 pointer-events-none select-none"
      />
      <img
        src="/Images/leaf2.png"
        alt="Leaf decoration"
        className="hidden md:block absolute right-10 top-40 w-40 opacity-20 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto text-center">
        <button className="inline-block border border-orange-500 text-orange-500 rounded-full px-8 py-2 font-semibold mb-12 hover:bg-orange-50 transition">
          Testimonials
        </button>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, image, rating, text }) => (
            <div
              key={id}
              className="bg-[#fff9f7] rounded-lg p-6 shadow-md flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">{name}</h3>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
