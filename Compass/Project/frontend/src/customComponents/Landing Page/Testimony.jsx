export default function Testimony() {
  const testimonials = [
    {
      id: 1,
      name: "Emma Wilson",
      text: "This platform helped me find amazing travel companions and create unforgettable memories!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "David Thompson",
      text: "The trips I've joined through this platform have been life-changing experiences.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
