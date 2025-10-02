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
  TrophyIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Homepage = () => {
  const stats = [
    { number: "500+", label: "Lives Transformed", icon: UserGroupIcon, color: "from-purple-500 to-purple-600" },
    { number: "15", label: "Training Programs", icon: AcademicCapIcon, color: "from-teal-500 to-teal-600" },
    { number: "85%", label: "Employment Success", icon: TrophyIcon, color: "from-rose-500 to-rose-600" },
    { number: "10", label: "Years of Impact", icon: StarIcon, color: "from-amber-500 to-amber-600" }
  ];

  const programs = [
    {
      title: "Batik & Textile Arts",
      description: "Master traditional batik techniques and modern textile design for creative expression and income generation.",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6 months",
      students: "25+ active",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Professional Tailoring",
      description: "Comprehensive tailoring program covering garment construction, pattern making, and fashion design.",
      image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "8 months",
      students: "30+ active",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Sustainable Agriculture",
      description: "Learn ecological gardening, medicinal plant cultivation, and sustainable farming practices.",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4 months",
      students: "20+ active",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Culinary Excellence",
      description: "Professional cooking skills, food safety, nutrition, and restaurant management training.",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5 months",
      students: "15+ active",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Jewelry Design",
      description: "Create beautiful ornaments and accessories using traditional and modern techniques.",
      image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4 months",
      students: "18+ active",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Eco-Craft Innovation",
      description: "Transform recycled materials into beautiful, marketable products while protecting the environment.",
      image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3 months",
      students: "12+ active",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwalimu",
      role: "Tailoring Graduate & Business Owner",
      quote: "Tunaweza didn't just teach me skills – they gave me confidence to dream bigger. Now I employ three people and support my family.",
      image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Owns successful tailoring business",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "James Kiprotich",
      role: "Agricultural Specialist",
      quote: "The sustainable farming program changed my life. I now supply medicinal plants to health centers across Mwanza.",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Supplies 3 health centers",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Grace Lupembe",
      role: "Award-Winning Artisan",
      quote: "My jewelry designs are now sold internationally. Tunaweza showed me that my disability doesn't define my potential.",
      image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "International jewelry sales",
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="gradient-mesh section-padding overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-teal-900/5"></div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center space-x-3 glass px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
                <SparklesIcon className="w-5 h-5 text-purple-600" />
                <span className="text-slate-700">Transforming Lives Since 2014</span>
              </div>
              
              <h1 className="heading-hero mb-10">
                Empowering Young People with 
                <span className="text-gradient block mt-4">Unlimited Potential</span>
              </h1>
              
              <p className="text-body-lg mb-12 max-w-2xl">
                At Tunaweza Mwanza, we believe every young person deserves the opportunity to thrive. 
                Through comprehensive vocational training and unwavering support, we're building a more inclusive future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-16">
                <Link to="/programs" className="btn-primary group">
                  <RocketLaunchIcon className="w-6 h-6 mr-3" />
                  <span>Explore Programs</span>
                  <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link to="/impact" className="btn-outline group">
                  <PlayIcon className="w-6 h-6 mr-3" />
                  <span>See Our Impact</span>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center bounce-in" style={{animationDelay: `${index * 0.2}s`}}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-custom flex items-center justify-center mb-4 mx-auto transform hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-slate-900">{stat.number}</div>
                      <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
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
                  className="rounded-3xl shadow-custom-lg w-full h-[700px] object-cover transform hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-custom-lg max-w-xs border border-white/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <TrophyIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-teal-600">85%</div>
                      <div className="text-sm text-slate-600 font-semibold">Employment Success Rate</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-custom-lg border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-4 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full border-4 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="text-sm font-black text-slate-900">500+ Students</div>
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
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-3 glass px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <AcademicCapIcon className="w-5 h-5 text-teal-600" />
              <span className="text-slate-700">Comprehensive Training Programs</span>
            </div>
            <h2 className="heading-lg mb-8">Building Skills for Life</h2>
            <p className="text-body-lg max-w-4xl mx-auto">
              Our diverse range of vocational training programs are designed to meet individual needs 
              and market demands, ensuring every graduate has the tools for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <div key={index} className="card card-hover group">
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-6 right-6 bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {program.duration}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-10">
                  <h3 className="heading-sm mb-6 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-body-sm mb-8">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2 text-sm text-slate-500 font-semibold">
                      <UserGroupIcon className="w-5 h-5" />
                      <span>{program.students}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/programs" 
                    className="btn-ghost group/btn w-full justify-center"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/programs" className="btn-primary">
              <GlobeAltIcon className="w-6 h-6 mr-3" />
              View All Programs
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20"></div>
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-8">Creating Lasting Impact</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto font-medium">
              Every day, we witness the transformation of young lives. Our graduates don't just find jobs – 
              they become entrepreneurs, community leaders, and agents of change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            <div className="text-center glass p-8 rounded-3xl border border-white/20">
              <div className="text-6xl font-black mb-4">500+</div>
              <div className="text-xl opacity-90 font-semibold">Students Trained</div>
            </div>
            <div className="text-center glass p-8 rounded-3xl border border-white/20">
              <div className="text-6xl font-black mb-4">25</div>
              <div className="text-xl opacity-90 font-semibold">New Businesses Created</div>
            </div>
            <div className="text-center glass p-8 rounded-3xl border border-white/20">
              <div className="text-6xl font-black mb-4">$50K+</div>
              <div className="text-xl opacity-90 font-semibold">Annual Economic Impact</div>
            </div>
            <div className="text-center glass p-8 rounded-3xl border border-white/20">
              <div className="text-6xl font-black mb-4">100%</div>
              <div className="text-xl opacity-90 font-semibold">Inclusion Rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/impact" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-6 px-10 rounded-2xl transition-all duration-300 shadow-custom-lg hover:shadow-2xl transform hover:scale-105">
              <BoltIcon className="w-6 h-6 inline mr-3" />
              Explore Our Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 glass px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <StarIcon className="w-5 h-5 text-amber-600" />
              <span className="text-slate-700">Success Stories</span>
            </div>
            <h2 className="heading-lg mb-8">Voices of Transformation</h2>
            <p className="text-body-lg max-w-4xl mx-auto">
              Meet some of our incredible graduates who are now thriving in their careers 
              and making positive impacts in their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-gradient p-10 text-center transform hover:scale-105 transition-all duration-500">
                <div className="relative mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-white shadow-custom"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <blockquote className="text-slate-600 italic mb-8 text-lg leading-relaxed font-medium">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mb-6">
                  <h4 className="font-black text-slate-900 text-xl">{testimonial.name}</h4>
                  <p className="text-purple-600 font-bold">{testimonial.role}</p>
                </div>
                <div className={`bg-gradient-to-r ${testimonial.color} text-white text-sm font-bold px-6 py-3 rounded-full inline-block shadow-lg`}>
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
          <div className="card-gradient p-16 lg:p-20 text-center max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-custom-lg">
              <HeartIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-lg mb-8">Join Our Mission of Empowerment</h2>
            <p className="text-body-lg mb-12 max-w-3xl mx-auto">
              Your support creates opportunities, builds confidence, and transforms lives. 
              Together, we can build a more inclusive world where everyone has the chance to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/donate" className="btn-primary group">
                <HeartIcon className="w-6 h-6 mr-3" />
                <span>Make a Donation</span>
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/get-involved" className="btn-secondary">
                <UserGroupIcon className="w-6 h-6 mr-3" />
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