import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const Homepage = () => {
  const stats = [
    { number: "500+", label: "Lives Transformed", icon: UserGroupIcon },
    { number: "15", label: "Training Programs", icon: AcademicCapIcon },
    { number: "85%", label: "Employment Success", icon: TrophyIcon },
    { number: "10", label: "Years of Impact", icon: StarIcon }
  ];

  const programs = [
    {
      title: "Batik & Textile Arts",
      description: "Master traditional batik techniques and modern textile design for creative expression and income generation.",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6 months",
      students: "25+ active"
    },
    {
      title: "Professional Tailoring",
      description: "Comprehensive tailoring program covering garment construction, pattern making, and fashion design.",
      image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "8 months",
      students: "30+ active"
    },
    {
      title: "Sustainable Agriculture",
      description: "Learn ecological gardening, medicinal plant cultivation, and sustainable farming practices.",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4 months",
      students: "20+ active"
    },
    {
      title: "Culinary Excellence",
      description: "Professional cooking skills, food safety, nutrition, and restaurant management training.",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5 months",
      students: "15+ active"
    },
    {
      title: "Jewelry Design",
      description: "Create beautiful ornaments and accessories using traditional and modern techniques.",
      image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4 months",
      students: "18+ active"
    },
    {
      title: "Eco-Craft Innovation",
      description: "Transform recycled materials into beautiful, marketable products while protecting the environment.",
      image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3 months",
      students: "12+ active"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwalimu",
      role: "Tailoring Graduate & Business Owner",
      quote: "Tunaweza didn't just teach me skills – they gave me confidence to dream bigger. Now I employ three people and support my family.",
      image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Owns successful tailoring business"
    },
    {
      name: "James Kiprotich",
      role: "Agricultural Specialist",
      quote: "The sustainable farming program changed my life. I now supply medicinal plants to health centers across Mwanza.",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Supplies 3 health centers"
    },
    {
      name: "Grace Lupembe",
      role: "Award-Winning Artisan",
      quote: "My jewelry designs are now sold internationally. Tunaweza showed me that my disability doesn't define my potential.",
      image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "International jewelry sales"
    }
  ];

  return (
    <div className="pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="gradient-hero section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircleIcon className="w-4 h-4" />
                <span>Transforming Lives Since 2014</span>
              </div>
              
              <h1 className="heading-hero mb-8">
                Empowering Young People with 
                <span className="text-gradient block mt-2">Unlimited Potential</span>
              </h1>
              
              <p className="text-body-lg mb-10 max-w-2xl">
                At Tunaweza Mwanza, we believe every young person deserves the opportunity to thrive. 
                Through comprehensive vocational training and unwavering support, we're building a more inclusive future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/programs" className="btn-primary group">
                  <span>Explore Programs</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link to="/impact" className="btn-outline group">
                  <PlayIcon className="w-5 h-5 mr-2" />
                  <span>See Our Impact</span>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3 mx-auto">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative slide-up">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Young people learning vocational skills"
                  className="rounded-3xl shadow-custom-lg w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-custom max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <TrophyIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">85%</div>
                      <div className="text-sm text-gray-600">Employment Success Rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-custom">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-sky-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-amber-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">500+ Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AcademicCapIcon className="w-4 h-4" />
              <span>Comprehensive Training Programs</span>
            </div>
            <h2 className="heading-lg mb-6">Building Skills for Life</h2>
            <p className="text-body-lg max-w-4xl mx-auto">
              Our diverse range of vocational training programs are designed to meet individual needs 
              and market demands, ensuring every graduate has the tools for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card card-hover group">
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {program.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="heading-sm mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-body-sm mb-6">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <UserGroupIcon className="w-4 h-4" />
                      <span>{program.students}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/programs" 
                    className="btn-ghost group/btn w-full justify-center"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/programs" className="btn-primary">
              View All Programs
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Creating Lasting Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every day, we witness the transformation of young lives. Our graduates don't just find jobs – 
              they become entrepreneurs, community leaders, and agents of change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-lg opacity-90">New Businesses Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$50K+</div>
              <div className="text-lg opacity-90">Annual Economic Impact</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Inclusion Rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/impact" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Our Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4" />
              <span>Success Stories</span>
            </div>
            <h2 className="heading-lg mb-6">Voices of Transformation</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Meet some of our incredible graduates who are now thriving in their careers 
              and making positive impacts in their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-gradient p-8 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6 ring-4 ring-emerald-100"
                />
                <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-emerald-600 font-medium">{testimonial.role}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full inline-block">
                  {testimonial.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="card-gradient p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <HeartIcon className="w-16 h-16 text-emerald-600 mx-auto mb-8" />
            <h2 className="heading-lg mb-6">Join Our Mission of Empowerment</h2>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto">
              Your support creates opportunities, builds confidence, and transforms lives. 
              Together, we can build a more inclusive world where everyone has the chance to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate" className="btn-primary group">
                <HeartIcon className="w-5 h-5 mr-2" />
                <span>Make a Donation</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link to="/get-involved" className="btn-secondary">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                <span>Volunteer With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;