import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Cog,
  Wind,
  Droplets,
  Activity,
  Cpu,
  Timer,
  GaugeCircle,
  Calendar,
  Facebook,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Bike,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Image,
  Sparkles,
  ZoomIn,
} from 'lucide-react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  scooter: string;
  date: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const services: Service[] = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Periodic Maintenance',
    description: 'Complete scheduled service including oil changes, filter replacements, fluid checks, and comprehensive inspection to keep your scooter running at peak performance.',
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'CVT Cleaning',
    description: 'Thorough cleaning of the Continuous Variable Transmission system for smooth acceleration, optimal power delivery, and extended variator life.',
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: 'Throttle Body Cleaning',
    description: 'Precision cleaning of throttle body components for improved throttle response, better fuel atomization, and restored engine efficiency.',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Injector Cleaning',
    description: 'Professional ultrasonic fuel injector cleaning and flow testing to restore proper fuel atomization and eliminate rough idling.',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostic procedures using specialized equipment to accurately identify and resolve engine issues the first time.',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'ECU Scanning',
    description: 'Electronic Control Unit scanning and analysis to detect fault codes, optimize fuel maps, and restore factory performance parameters.',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Mark Anthony Reyes',
    rating: 5,
    comment: 'Excellent service! My Honda Click 125i runs like new after the throttle body cleaning. Very professional and knowledgeable technicians.',
    scooter: 'Honda Click 125i',
    date: '2 weeks ago',
  },
  {
    name: 'Jennifer Cruz',
    rating: 5,
    comment: 'Finally found a shop that truly understands EFI systems. They diagnosed and fixed my Yamaha NMAX issue that other shops couldnt figure out.',
    scooter: 'Yamaha NMAX 155',
    date: '1 month ago',
  },
  {
    name: 'Robert Santos',
    rating: 5,
    comment: 'Consistent quality service for my PCX. They use genuine parts and explain everything clearly. Highly recommended for scooter owners!',
    scooter: 'Honda PCX 160',
    date: '2 months ago',
  },
  {
    name: 'Amanda Flores',
    rating: 5,
    comment: 'Fast turnaround and fair pricing. The CVT cleaning made a huge difference in acceleration. Will definitely come back for regular maintenance.',
    scooter: 'Yamaha Aerox 155',
    date: '3 weeks ago',
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    alt: 'MCLIFE WORKS Shop Front',
    category: 'Our Shop',
  },
  {
    src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    alt: 'CVT Transmission Service',
    category: 'CVT Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engine Parts Overhaul',
    category: 'Engine Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engine Internals',
    category: 'Engine',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    alt: 'Transmission Components',
    category: 'Parts',
  },
];

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'booking', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#booking', label: 'Booking' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/98 backdrop-blur-xl shadow-2xl shadow-red-900/20 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className={`w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-red-900/30 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <Bike className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-red-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-2xl md:text-3xl text-white tracking-wider transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl' : ''}`}>
                MCLIFE
              </span>
              <span className="text-red-500 text-xs font-bold -mt-1 tracking-widest">WORKS</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-lg ${activeSection === link.href.slice(1) ? 'text-red-500 bg-red-600/10' : 'text-gray-300 hover:text-red-500 hover:bg-red-600/5'}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:09178561029" className="group relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Call Now</span>
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2 rounded-xl bg-gray-900/50 hover:bg-red-600 transition-all duration-300">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gray-950/98 backdrop-blur-xl border-t border-gray-800/50 rounded-2xl mt-2 p-4 space-y-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium uppercase tracking-wider rounded-xl transition-all duration-300 ${activeSection === link.href.slice(1) ? 'text-red-500 bg-red-600/10' : 'text-gray-300 hover:text-red-500 hover:bg-red-600/5'}`}>
                {link.label}
              </a>
            ))}
            <a href="tel:09178561029" className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl mt-3 font-semibold">
              <Phone className="w-4 h-4" />
              Call Now: 0917 856 1029
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" style={{ backgroundImage: `url('https://images.pexels.com/photos/239382/pexels-photo-239382.jpeg?auto=compress&cs=tinysrgb&w=1920')`, transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-900/20" />

      <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' } as CSSProperties} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-red-600/20 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm">
            <GaugeCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 text-sm font-semibold uppercase tracking-widest">Honda & Yamaha EFI Specialist</span>
          </div>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white mb-6 animate-fade-in-up delay-100 leading-none">
          MCLIFE
          <span className="text-gradient block mt-2">WORKS</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-4 animate-fade-in-up delay-200 font-light tracking-wide">Premium Motorcycle Service Center</p>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-300">Expert maintenance and precision diagnostics for fuel-injected Honda and Yamaha scooters. Quality service. Genuine parts. Professional care.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up delay-400">
          <a href="#booking" className="group relative flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white rounded-xl transition-all duration-500 font-bold text-lg shadow-2xl shadow-red-900/50 hover:shadow-red-800/60 hover:scale-105 active:scale-95 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="#services" className="group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 border-2 border-gray-500/50 hover:border-red-500 text-white rounded-xl transition-all duration-500 font-bold text-lg hover:bg-red-600/5 hover:scale-105 active:scale-95">
            <Cog className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
            Our Services
          </a>
        </div>

        <div className="mt-12 md:mt-20 animate-fade-in-up delay-500">
          <a href="#about" className="inline-flex flex-col items-center group">
            <span className="text-gray-400 group-hover:text-red-500 text-sm uppercase tracking-widest mb-3 transition-colors duration-300">Scroll Down</span>
            <div className="w-8 h-12 border-2 border-gray-500 group-hover:border-red-500 rounded-full flex items-start justify-center p-2 transition-colors duration-300">
              <div className="w-1.5 h-3 bg-gray-500 group-hover:bg-red-500 rounded-full animate-bounce transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 md:py-36 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-2 h-24 bg-gradient-to-b from-red-600/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-2 h-32 bg-gradient-to-b from-red-600/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
              Masters of <span className="text-gradient">Fuel-Injected</span><br />Scooters
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">At MCLIFE WORKS, we specialize exclusively in Honda and Yamaha fuel-injected scooters. Our certified technicians bring years of hands-on experience with modern EFI systems, ensuring your ride receives expert care.</p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">We don't just fix problems - we prevent them. Our precision diagnostic equipment and genuine parts ensure your scooter performs at its best for years to come.</p>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: <Award className="w-6 h-6" />, label: 'Certified Experts', value: '100%' },
                { icon: <Users className="w-6 h-6" />, label: 'Happy Clients', value: '500+' },
                { icon: <Bike className="w-6 h-6" />, label: 'Scooters Serviced', value: '2000+' },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 md:p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-gray-800 hover:border-red-600/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-900/20">
                  <div className="w-12 h-12 mx-auto mb-3 text-red-500 flex items-center justify-center bg-red-600/10 rounded-xl">{item.icon}</div>
                  <div className="font-display text-2xl md:text-3xl text-white mb-1">{item.value}</div>
                  <span className="text-gray-500 text-xs md:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl shadow-black/50">
                <img src="https://images.pexels.com/photos/163064/pexels-photo-163064.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Motorcycle Workshop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-900/40 border border-red-500/20">
                <div className="text-center">
                  <div className="font-display text-7xl text-white">10+</div>
                  <div className="text-white/90 text-sm font-semibold tracking-wider">Years Experience</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-red-600 rounded-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-red-600/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="services" className="py-24 md:py-36 bg-gradient-to-b from-black via-gray-950 to-black relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Wrench className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>Professional <span className="text-gradient">Services</span></h2>
          <p className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>Comprehensive care for your Honda and Yamaha fuel-injected scooters, from routine maintenance to advanced diagnostics.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className={`group relative p-6 md:p-8 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-3xl border border-gray-800/50 hover:border-red-600/60 transition-all duration-700 hover:-translate-y-3 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` } as CSSProperties}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-red-600/10 transition-colors duration-700" />

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:from-red-600/30 group-hover:to-red-800/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{service.description}</p>

                <div className="mt-8 flex items-center gap-2 text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold uppercase tracking-wider">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Image className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Gallery</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our <span className="text-gradient">Workshop</span></h2>
          <p className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>A glimpse into our professional workspace and the quality work we do.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)} className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-gray-800/50 hover:border-red-600/50 transition-all duration-500 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` } as CSSProperties}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-display text-lg">{image.category}</span>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer animate-fade-in">
          <div className="relative max-w-5xl w-full">
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto rounded-2xl" />
            <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Star className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>What Our <span className="text-gradient">Clients Say</span></h2>
          <p className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>Don't just take our word for it - hear from our satisfied customers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`group relative p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800/50 hover:border-red-600/40 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` } as CSSProperties}>
              <Quote className="absolute top-6 right-6 w-12 h-12 text-red-600/10 group-hover:text-red-600/20 transition-colors duration-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl">{testimonial.name.charAt(0)}</div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.scooter}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
              </div>

              <p className="text-gray-400 leading-relaxed mb-4 italic">"{testimonial.comment}"</p>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Clock className="w-4 h-4" />
                {testimonial.date}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="booking" className="py-24 md:py-36 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]" />
      </div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' } as CSSProperties} />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`bg-gradient-to-br from-red-900/20 via-gray-900 to-black rounded-[2rem] border-2 border-red-600/30 p-8 md:p-12 lg:p-16 text-center shadow-2xl shadow-red-900/20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full mb-8 border border-red-600/30">
            <Calendar className="w-12 h-12 text-red-500" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">Appointment is <span className="text-gradient">Required</span></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10">To ensure we dedicate quality time to every scooter, we operate strictly by appointment. Book ahead to secure your slot and avoid waiting.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 px-6 py-4 bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-red-600/30 transition-colors duration-300">
              <Timer className="w-6 h-6 text-red-500" />
              <div className="text-left">
                <span className="block text-white font-semibold">Mon - Sat</span>
                <span className="text-gray-400 text-sm">8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-red-600/30 transition-colors duration-300">
              <Phone className="w-6 h-6 text-red-500" />
              <div className="text-left">
                <span className="block text-white font-semibold">Call Us</span>
                <span className="text-gray-400 text-sm">0917 856 1029</span>
              </div>
            </div>
          </div>

          <a href="tel:09178561029" className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white rounded-2xl transition-all duration-500 font-bold text-xl shadow-2xl shadow-red-900/40 hover:shadow-red-800/60 hover:scale-105 active:scale-95 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Phone className="w-7 h-7 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Call to Book Now</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500 text-sm md:text-base">
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /><span>Quality Service</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /><span>Genuine Parts</span></div>
            <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-red-500" /><span>Expert Care</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="py-24 md:py-36 bg-gradient-to-b from-black to-gray-950 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-red-600/10 border border-red-600/20 rounded-full mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Visit Us</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Get in <span className="text-gradient">Touch</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800/50 hover:border-red-600/40 transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Location</h3>
                  <p className="text-gray-400 text-lg">Road 13 Nagtinig Westbank</p>
                  <p className="text-gray-500">Taytay, Rizal, Philippines</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800/50 hover:border-red-600/40 transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Phone</h3>
                  <a href="tel:09178561029" className="text-gray-400 text-lg hover:text-red-500 transition-colors duration-300">0917 856 1029</a>
                  <p className="text-gray-500 text-sm mt-1">Tap to call now</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800/50 hover:border-red-600/40 transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Business Hours</h3>
                  <p className="text-gray-400 text-lg">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px] md:min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border-2 border-gray-800/50 overflow-hidden relative group hover:border-red-600/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-12 h-12 text-red-500 animate-pulse" />
                  </div>
                  <p className="text-gray-300 text-lg mb-6 font-medium">Road 13 Nagtinig Westbank<br />Taytay, Rizal, Philippines</p>
                  <a href="https://maps.google.com/?q=Road+13+Nagtinig+Westbank+Taytay+Rizal" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:scale-105 active:scale-95">
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="absolute top-4 right-4 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800">
                <span className="text-gray-400 text-sm">Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center gap-3 justify-center md:justify-start mb-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-900/30">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-white tracking-wider">MCLIFE</span>
                <span className="text-red-500 text-xs font-bold -mt-1 tracking-widest">WORKS</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">Honda & Yamaha Fuel-Injected Scooter Specialists. Quality service you can trust.</p>
          </div>

          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-400"><MapPin className="w-4 h-4 text-red-500" /><span>Road 13 Nagtinig Westbank, Taytay, Rizal</span></div>
            <div className="flex items-center justify-center gap-2 text-gray-400"><Phone className="w-4 h-4 text-red-500" /><span>0917 856 1029</span></div>
            <div className="flex items-center justify-center gap-2 text-gray-400"><Clock className="w-4 h-4 text-red-500" /><span>Mon-Sat: 8AM - 6PM</span></div>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <a href="#" className="w-12 h-12 bg-gray-900 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-red-600 group" aria-label="Facebook"><Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
            <a href="#" className="w-12 h-12 bg-gray-900 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-red-600 group" aria-label="Instagram"><Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
            <a href="#" className="w-12 h-12 bg-gray-900 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 hover:border-red-600 group" aria-label="Messenger"><MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">© {new Date().getFullYear()} MCLIFE WORKS. All rights reserved.</p>
          <p className="text-gray-700 text-sm">Made with passion for motorcycle enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingMessenger() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <a href="https://m.me/mclifeworks" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-600/60 hover:scale-110 active:scale-95 transition-all duration-300" aria-label="Chat on Messenger">
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce"><span className="text-white text-xs font-bold">1</span></span>

        <div className="absolute right-full mr-4 whitespace-nowrap">
          <div className={`bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl border border-gray-800 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            Chat with us!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 border-r border-b border-gray-800 transform rotate-45" />
          </div>
        </div>
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="bg-black min-h-screen scrollbar-hide overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <FloatingMessenger />
    </div>
  );
}

export default App;
