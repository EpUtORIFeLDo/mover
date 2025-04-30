import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
};

const TestimonialCard = ({ quote, author, role, rating, image }: TestimonialProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}
        />
      ))}
    </div>
    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
      "{quote}"
    </blockquote>
    <div className="flex items-center gap-3 mt-auto">
      <img 
        src={image} 
        alt={author} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MoveEase transformed my moving experience. The real-time tracking feature gave me peace of mind throughout the entire process. I could see exactly where my belongings were at all times.",
      author: "Sarah Johnson",
      role: "Moved from Boston to Chicago",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The digital inventory system was a game changer. I could document all my items with photos and make sure everything arrived safely. The movers were professional and on time.",
      author: "Michael Rodriguez",
      role: "Moved across San Francisco",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As someone who's moved multiple times, I can confidently say MoveEase provides the most transparent and stress-free experience. The price calculator was spot on!",
      author: "Jennifer Chen",
      role: "Moved from NYC to Philadelphia",
      rating: 4,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The ability to communicate directly with my movers through the app made coordination so much easier. They were responsive and accommodating to last-minute changes.",
      author: "David Thompson",
      role: "Moved from Austin to Dallas",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The entire process from booking to delivery was seamless. The digital contracts made paperwork a breeze, and the price was competitive for the premium service.",
      author: "Amanda Parker",
      role: "Moved from Seattle to Portland",
      rating: 5,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2 + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join thousands of satisfied customers who have experienced the MoveEase difference.
          </p>
        </div>

        <div className="relative">
          {/* Desktop/Tablet View */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <TestimonialCard
              quote={testimonials[currentIndex].quote}
              author={testimonials[currentIndex].author}
              role={testimonials[currentIndex].role}
              rating={testimonials[currentIndex].rating}
              image={testimonials[currentIndex].image}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-end gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;