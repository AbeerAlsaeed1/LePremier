import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL/LTR to document
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.divisions': 'Divisions',
    'nav.construction': 'Construction',
    'nav.manufacturing': 'Manufacturing',
    'nav.safety': 'Safety & Fire',
    'nav.entertainment': 'Entertainment',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Building Excellence',
    'hero.subtitle': 'Across Every Industry',
    'hero.description': 'With over 20 years of expertise, Le Premier Group delivers world-class solutions in construction, manufacturing, safety, and entertainment.',
    'hero.cta': 'Explore Our Work',
    
    'hero.main.title': 'Building Tomorrow\'s Success Today',
    'hero.main.description': 'A diversified business group with over 20 years of excellence in Construction, Manufacturing, Safety, and Entertainment',
    'hero.main.cta': 'Explore Our Divisions',
    
    // Stats
    'stats.years': 'Years of Excellence',
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Happy Clients',
    'stats.divisions': 'Business Divisions',
    
    // Divisions Section
    'divisions.title': 'Our Business Divisions',
    'divisions.subtitle': 'Delivering excellence across multiple sectors with specialized expertise and proven track record',
    'divisions.construction.name': 'Construction',
    'divisions.construction.desc': 'Building the future with precision and quality',
    'divisions.construction.fullDesc': 'World-class infrastructure and building solutions with precision, quality, and adherence to timelines.',
    'divisions.manufacturing.name': 'Industrial Manufacturing',
    'divisions.manufacturing.desc': 'Innovative solutions for modern industry',
    'divisions.manufacturing.fullDesc': 'State-of-the-art manufacturing facilities producing high-quality industrial products with cutting-edge technology.',
    'divisions.safety.name': 'Safety & Fire Protection',
    'divisions.safety.desc': 'Protecting what matters most',
    'divisions.safety.fullDesc': 'Comprehensive fire safety solutions and protection systems ensuring the highest standards of security.',
    'divisions.entertainment.name': 'Entertainment',
    'divisions.entertainment.desc': 'Creating unforgettable experiences',
    'divisions.entertainment.fullDesc': 'Creating memorable experiences through innovative entertainment venues and event management services.',
    
    // About
    'about.title': 'About Le Premier Group',
    'about.subtitle': 'Over Two Decades of Trusted Excellence',
    'about.p1': 'Since our inception, Le Premier Group has been at the forefront of innovation and excellence across multiple industries. Our diverse portfolio spans construction, industrial manufacturing, safety and fire protection, and entertainment sectors.',
    'about.p2': 'With a commitment to quality, integrity, and customer satisfaction, we have successfully delivered hundreds of projects, earning the trust of clients worldwide. Our multidisciplinary approach enables us to provide comprehensive solutions that drive success.',
    
    // Contact Section
    'contact.title': 'GET IN TOUCH',
    'contact.description': 'Ready to start your next project? Contact us today and discover how Le Premier Group can help you achieve your business goals.',
    'contact.email': 'Email',
    'contact.address': 'Our Location',
    'contact.location.title': 'OUR LOCATION',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'How can we help you?',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.brand': 'LE PREMIER GROUP',
    'footer.tagline': 'Building excellence across industries for over two decades.',
    'footer.divisions.title': 'DIVISIONS',
    'footer.divisions.construction': 'Construction',
    'footer.divisions.manufacturing': 'Industrial Manufacturing',
    'footer.divisions.safety': 'Safety & Fire Protection',
    'footer.divisions.entertainment': 'Entertainment',
    'footer.company.title': 'COMPANY',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.careers': 'Careers',
    'footer.company.news': 'News',
    'footer.connect.title': 'CONNECT',
    'footer.connect.contact': 'Contact Us',
    'footer.connect.linkedin': 'LinkedIn',
    'footer.connect.twitter': 'Twitter',
    'footer.connect.facebook': 'Facebook',
    'footer.connect.instagram': 'Instagram',
    'footer.copyright': '© 2026 Le Premier Group. All rights reserved.',
    'footer.riyadh': 'Riyadh, An Narjis 12234',
    
    // Construction Page
    'construction.hero.title': 'Construction Division',
    'construction.hero.subtitle': 'Building the Future',
    'construction.hero.description': 'Delivering world-class construction projects with precision, quality, and unwavering commitment to excellence. From residential to commercial and industrial facilities, we build the foundations of tomorrow.',
    
    'construction.mission.title': 'Our Mission',
    'construction.mission.description': 'To deliver exceptional construction solutions that exceed client expectations through innovative design, superior craftsmanship, and sustainable building practices while maintaining the highest safety standards.',
    'construction.about.title': 'About Us',
    'construction.about.description': 'Le Premier Construction brings over 20 years of expertise in delivering diverse construction projects. Our experienced team, modern equipment, and proven methodologies ensure every project is completed on time and within budget.',
    'construction.vision.title': 'Our Vision',
    'construction.vision.description': 'To be the region\'s most trusted construction partner, known for transforming architectural visions into reality through excellence, innovation, and unwavering dedication to quality.',
    
    'construction.services.title': 'Our Services',
    'construction.services.subtitle': 'Comprehensive construction solutions',
    'construction.services.general': 'General Construction',
    'construction.services.general.desc': 'Complete project delivery from concept to completion',
    'construction.services.infrastructure': 'Infrastructure Development',
    'construction.services.infrastructure.desc': 'Building essential facilities and networks',
    'construction.services.commercial': 'Commercial Projects',
    'construction.services.commercial.desc': 'State-of-the-art business facilities',
    'construction.services.residential': 'Residential Construction',
    'construction.services.residential.desc': 'Quality homes and communities',
    'construction.services.renovation': 'Renovation & Remodeling',
    'construction.services.renovation.desc': 'Transforming existing spaces',
    'construction.services.management': 'Project Management',
    'construction.services.management.desc': 'Expert oversight and coordination',
    
    'construction.serviceslist.title': 'Construction Services',
    'construction.serviceslist.hospitality': 'Hospitality Construction (Hotel & Resorts)',
    'construction.serviceslist.commercial': 'Commercial Buildings',
    'construction.serviceslist.industrial': 'Industrial Facilities',
    'construction.serviceslist.infrastructure': 'Infrastructure Development',
    'construction.serviceslist.renovation': 'Renovation & Remodeling',
    'construction.serviceslist.steel': 'Steel Structure Construction',
    'construction.serviceslist.dataroom': 'Data Room',
    'construction.serviceslist.knx': 'KNX',
    'construction.serviceslist.concrete': 'Concrete Works',
    'construction.serviceslist.mep': 'MEP Installation',
    'construction.serviceslist.interior': 'Interior Finishing',
    'construction.serviceslist.turnkey': 'Turnkey Project Execution',
    'construction.serviceslist.hotelfit': 'Hotel Fit-Out & Renovation',
    'construction.serviceslist.intfitout': 'Interior Fit-Out Works',
    'construction.serviceslist.lowcurrent': 'Low Current Systems (Le Premier For Safety)',
    'construction.serviceslist.delivery': 'Project Delivery & Site Supervision',
    'construction.serviceslist.bms': 'Building Management Systems (BMS)',
    'construction.serviceslist.grms': 'Guest Room Management System (GRMS)',
    
    'construction.ourprojects.title': 'Our Projects',
    'construction.ourclients.title': 'Our Clients',
    
    // Project Names
    'projects.novotel': 'Novotel Hotel',
    'projects.shaqra': 'Shaqra Factory',
    'projects.therock': 'The Rock',
    'projects.bestwaha': 'Best Western PLUS Al-Waha Hotel',
    'projects.alyarmook': 'Al Yarmook School',
    'projects.premium': 'Premium Private Al Riyadh Schools',
    'projects.alinma': 'Alinma Bank',
    'projects.intercontinental': 'Intercontinental IHG Hotel',
    'projects.holidayinn': 'Holiday Inn Suites Hotel',
    'projects.voco': 'VOCO Suites Hotel',
    'projects.staybridge': 'Staybridge Suites Hotel',
    'projects.rajhibank': 'Al Rajhi Bank Branches',
    'projects.rowad': 'Rowad Al Khaleej International School',
    'projects.tbc': 'TBC Schools',
    'projects.romansiah': 'Al Romansiah Branch',
    'projects.rawdah': 'Al Rawdah Commercial Building',
    'projects.mof': 'Ministry of Finance Offices',
    'projects.gasco': 'Gasco Head Office',
    'projects.raed': 'Al Raed Groove',
    'projects.rayan': 'Commercial Complex in Al Rayan',
    'projects.masif': 'Commercial Complex in Al Masif',
    'projects.monshaat': 'Monshaat Office',
    'projects.compounds': 'Private Compounds',
    'projects.luhaidan': 'Al-Luhaidan Commercial Complex & Offices',
    'projects.more': 'More Projects...',
    
    'construction.expertise.title': 'Our Expertise',
    'construction.expertise.subtitle': 'Decades of construction excellence',
    'construction.expertise.experience': 'Years of Experience',
    'construction.expertise.projects': 'Completed Projects',
    'construction.expertise.clients': 'Satisfied Clients',
    'construction.expertise.engineers': 'Expert Team',
    
    'construction.projects.title': 'Featured Projects',
    'construction.projects.subtitle': 'Showcasing our best work',
    'construction.projects.view': 'View Details',
    
    'construction.clients.title': 'Our Clients',
    
    'construction.cta.title': 'Ready to Start Your Project?',
    'construction.cta.description': 'Let\'s discuss how we can bring your vision to life with our construction expertise.',
    'construction.cta.button': 'Get in Touch',
    
    // Manufacturing Page
    'manufacturing.hero.title': 'Industrial Manufacturing',
    'manufacturing.hero.subtitle': 'Precision Engineering & Quality Production',
    'manufacturing.hero.description': 'Advanced manufacturing solutions delivering high-quality products for diverse industrial applications.',
    'manufacturing.hero.industrial.title': 'LE PREMIER INDUSTRIAL',
    'manufacturing.hero.industrial.description': 'Le Premier Industrial specializes in advanced steel structure fabrication, aluminum extrusion, and roll forming services. With over 20 years of combined expertise and innovative processes, we meet the needs of every project with efficiency and quality as our top priorities.',
    
    'manufacturing.mission.title': 'Our Mission',
    'manufacturing.mission.description': 'Our mission is to deliver superior industrial manufacturing solutions through innovation, precision engineering, and unwavering commitment to quality. We aim to exceed client expectations while maintaining sustainable and ethical business practices.',
    
    'manufacturing.about.title': 'About Us',
    'manufacturing.about.description': 'With advanced facilities and a highly skilled workforce, we offer comprehensive manufacturing services that include steel forming, aluminum casting, and specialized industrial solutions for various sectors.',
    
    'manufacturing.vision.title': 'Our Vision',
    'manufacturing.vision.description': 'To be the region\'s leading industrial manufacturer recognized for excellence, innovation, and reliability in every project we undertake, setting new standards in the industry.',
    
    'manufacturing.services.aluminum.title': 'Aluminum & Steel Works',
    'manufacturing.services.aluminum.item1': 'Wall Cladding',
    'manufacturing.services.aluminum.item2': 'Doors & Windows',
    'manufacturing.services.aluminum.item3': 'Curtain Wall',
    'manufacturing.services.aluminum.item4': 'Glass Structures',
    'manufacturing.services.aluminum.item5': 'Skylights',
    'manufacturing.services.aluminum.item6': 'Stainless Steel Works',
    'manufacturing.services.aluminum.item7': 'Decorative Metal Works',
    'manufacturing.services.aluminum.item8': 'Handrails & Balustrades',
    'manufacturing.services.aluminum.item9': 'Decorative Panels & Architectural Details',
    'manufacturing.services.aluminum.item10': 'Custom Aluminum Fabrication',
    'manufacturing.services.aluminum.description': 'We provide high-quality aluminum and steel works including curtain walls, cladding, doors and windows, glass structures, skylights, handrails, balustrades, and decorative metal elements. Our team focuses on precise execution, durable materials, and reliable project delivery.',
    
    'manufacturing.services.wooden.title': 'Wooden Industries',
    'manufacturing.services.wooden.item1': 'Wall cladding',
    'manufacturing.services.wooden.item2': 'Kitchen Cabinet',
    'manufacturing.services.wooden.item3': 'Dressing & walk-in closet',
    'manufacturing.services.wooden.item4': 'Doors & Windows',
    'manufacturing.services.wooden.item5': 'Fixed Furniture',
    'manufacturing.services.wooden.item6': 'Event Utilities',
    'manufacturing.services.wooden.description': 'We can provide you with planning and support services, no matter what size of project you are working on or where you are located. Our dedicated team will even provide you with a detailed list of materials for the project so you will know exactly what is needed to get the job done right.',
    
    'manufacturing.services.grc.title': 'Glass Reinforced Concrete (GRC) & Glass Reinforced Basalt (GRB)',
    'manufacturing.services.grc.item1': 'Building Facades',
    'manufacturing.services.grc.item2': 'Architectural Columns',
    'manufacturing.services.grc.item3': 'Decorative Panels',
    'manufacturing.services.grc.item4': 'Interior Wall & Ceiling Surfaces',
    'manufacturing.services.grc.item5': 'Sculptures & Architectural Details',
    'manufacturing.services.grc.item6': 'Fences & Barriers',
    'manufacturing.services.grc.description': 'Our GRC and GRB solutions provide high-performance architectural elements for both exterior and interior applications, combining durability, precision, and aesthetic quality for modern construction projects',
    
    'manufacturing.services.acrylic.title': 'Acrylic Solid Surface (Industrial Marble)',
    'manufacturing.services.acrylic.item1': 'Ceiling',
    'manufacturing.services.acrylic.item2': 'Countertop',
    'manufacturing.services.acrylic.item3': 'Vanity top',
    'manufacturing.services.acrylic.item4': 'Cladding',
    'manufacturing.services.acrylic.item5': 'Kitchen top',
    'manufacturing.services.acrylic.item6': 'Handmade sink',
    'manufacturing.services.acrylic.item7': 'Columns',
    'manufacturing.services.acrylic.description': 'Fabricate industrial marble and convert it to exquisite designs for kitchens, hotels, toilets. Le Premier owns a workshop for the fabrication, and installation of Acrylic Solid Surface with great quality and high skill.',
    
    'manufacturing.projects.title': 'OUR PROJECTS',
    'manufacturing.clients.title': 'OUR CLIENTS',
    
    'manufacturing.industrial.title': 'INDUSTRIAL SERVICES',
    
    'manufacturing.services.title': 'Manufacturing Capabilities',
    'manufacturing.services.subtitle': 'Comprehensive industrial solutions',
    'manufacturing.services.metal': 'Metal Fabrication',
    'manufacturing.services.metal.desc': 'Precision metalworking and custom fabrication',
    'manufacturing.services.machinery': 'Machinery & Equipment',
    'manufacturing.services.machinery.desc': 'Industrial machinery manufacturing and assembly',
    'manufacturing.services.quality': 'Quality Control',
    'manufacturing.services.quality.desc': 'Rigorous testing and quality assurance',
    'manufacturing.services.custom': 'Custom Solutions',
    'manufacturing.services.custom.desc': 'Tailored manufacturing for unique requirements',
    'manufacturing.services.maintenance': 'Maintenance Services',
    'manufacturing.services.maintenance.desc': 'Ongoing support and equipment maintenance',
    'manufacturing.services.consulting': 'Industrial Consulting',
    'manufacturing.services.consulting.desc': 'Expert guidance for manufacturing optimization',
    
    'manufacturing.stats.title': 'Manufacturing Excellence',
    'manufacturing.stats.subtitle': 'Industry-leading capabilities',
    'manufacturing.stats.capacity': 'Production Capacity',
    'manufacturing.stats.products': 'Product Lines',
    'manufacturing.stats.certification': 'Quality Certifications',
    'manufacturing.stats.delivery': 'On-Time Delivery',
    
    'manufacturing.products.title': 'Product Showcase',
    'manufacturing.products.subtitle': 'High-quality products for industrial applications',
    
    'manufacturing.cta.title': 'Need Manufacturing Solutions?',
    
    'manufacturing.cta.description': 'Contact us to discuss your industrial manufacturing requirements.',
    
    'manufacturing.cta.button': 'Request Quote',
    
    // Safety Page
    'safety.hero.title': 'Safety & Fire Protection',
    'safety.hero.subtitle': 'Protecting Lives and Property',
    'safety.hero.description': 'Comprehensive safety and fire protection solutions for commercial, industrial, and residential applications.',
    
    'safety.mission.title': 'Our Mission',
    'safety.mission.description': 'To deliver comprehensive safety and fire protection solutions that ensure the protection of lives and property through cutting-edge technology, specialized expertise, and unwavering commitment to excellence in safety standards.',
    
    'safety.about.title': 'About Us',
    'safety.about.description': 'Le Premier Safety & Fire Protection specializes in the design, installation, and maintenance of advanced fire protection systems. Our team of certified professionals ensures compliance with the highest international safety standards.',
    
    'safety.vision.title': 'Our Vision',
    'safety.vision.description': 'To be the region\'s most trusted safety partner, setting new standards in fire protection through innovation, reliability, and proactive safety management.',
    
    'safety.services.title': 'Our Services',
    'safety.services.subtitle': 'Complete safety systems',
    'safety.services.fire': 'Fire Alarm Systems',
    'safety.services.fire.desc': 'Advanced fire detection and alarm systems',
    'safety.services.sprinkler': 'Sprinkler Systems',
    'safety.services.sprinkler.desc': 'Automatic fire suppression systems',
    'safety.services.equipment': 'Firefighting Equipment',
    'safety.services.equipment.desc': 'Professional firefighting equipment',
    'safety.services.safety': 'Personal Safety Equipment',
    'safety.services.safety.desc': 'Personal protective equipment and safety gear',
    'safety.services.inspection': 'Inspection and Testing',
    'safety.services.inspection.desc': 'Regular safety system inspections',
    'safety.services.training': 'Safety Training',
    'safety.services.training.desc': 'Professional safety and emergency training',
    
    'safety.maintenance.title': 'Maintenance and Support',
    'safety.maintenance.inspections': 'Annual System Inspections',
    'safety.maintenance.preventive': 'Preventive Maintenance',
    'safety.maintenance.upgrades': 'System Upgrades and Enhancements',
    'safety.maintenance.certification': 'Annual Certification',
    'safety.maintenance.documentation': 'Documentation and Reporting',
    
    'safety.protection.title': 'Fire Protection Systems',
    'safety.protection.alarm': 'Fire Alarm Systems',
    'safety.protection.sprinkler': 'Sprinkler Systems',
    'safety.protection.suppression': 'Fire Suppression Systems',
    'safety.protection.lighting': 'Emergency Lighting',
    'safety.protection.extinguisher': 'Fire Extinguishers Supply and Maintenance',
    'safety.protection.hydrant': 'Fire Hydrant Systems',
    
    'safety.projects.title': 'Our Projects',
    
    'safety.stats.title': 'Safety Performance',
    'safety.stats.subtitle': 'Commitment to protection',
    'safety.stats.installations': 'Installed Systems',
    'safety.stats.inspections': 'Annual Inspections',
    'safety.stats.response': 'Response Time',
    'safety.stats.compliance': 'Compliance Rate',
    
    'safety.products.title': 'Safety Products',
    'safety.products.subtitle': 'Professional safety equipment',
    
    'safety.clients.title': 'Safety Partners',
    'safety.clients.subtitle': 'Protecting diverse facilities',
    
    'safety.cta.title': 'Protect Your Facility',
    'safety.cta.description': 'Get a comprehensive safety and fire protection assessment today.',
    'safety.cta.button': 'Schedule Assessment',
    
    // Safety Equipment Services
    'safety.equipment.risk': 'Risk Assessment',
    'safety.equipment.supply': 'Safety Equipment Supply',
    'safety.equipment.audits': 'Compliance Audits',
    'safety.equipment.elv': 'Extra Low Voltage Systems (ELV) - CCTV, Access Control, Video Intercom',
    'safety.equipment.data': 'Data Networks - Structured Cabling',
    'safety.equipment.sound': 'Sound Systems',
    
    // Entertainment Page
    'entertainment.hero.title': 'Entertainment Division',
    'entertainment.hero.subtitle': 'Creating Unforgettable Experiences',
    'entertainment.hero.description': 'From event management to entertainment venues, we bring joy and excitement to every occasion.',
    
    'entertainment.about.title': 'About KAB Entertainment',
    'entertainment.about.p1': 'KAB Entertainment is the newest division of Le Premier Group, created to develop premium lifestyle and recreational destinations. Built on the Group\'s legacy of quality, professionalism, and long-term vision, this division marks Le Premier\'s strategic expansion into the entertainment and leisure sector.',
    'entertainment.about.p2': 'KAB Entertainment focuses on creating premium, high-quality experiences that combine modern facilities, thoughtful design, and professional management. Launching with an exclusive equestrian center, this division reflects the Group\'s commitment to excellence and establishes a strong foundation for future projects in entertainment and lifestyle.',
    
    'entertainment.kab.title': 'KAB Equestrian Center',
    'entertainment.kab.subtitle': 'A Premium Equestrian Lifestyle Destination',
    'entertainment.kab.description': 'Kab Equestrian Center is a purpose-built facility dedicated to horse care, training, and the equestrian lifestyle. Designed in accordance with international standards, the center offers a safe, professional, and welcoming environment for riders, horse owners, and enthusiasts.',
    
    'entertainment.kab.services.title': 'Services Offered',
    'entertainment.kab.services.boarding': 'Horse boarding and daily care',
    'entertainment.kab.services.training': 'Professional equestrian training programs',
    'entertainment.kab.services.lessons': 'Riding lessons for different skill levels',
    'entertainment.kab.services.private': 'Private riding sessions',
    'entertainment.kab.services.events': 'Future equestrian events and activities',
    
    'entertainment.kab.facilities.title': 'Facilities & Features',
    'entertainment.kab.facilities.stables': 'Modern and well-designed horse stables',
    'entertainment.kab.facilities.outdoor': 'Professional outdoor training arena',
    'entertainment.kab.facilities.indoor': 'Dedicated indoor training arena (Coming Soon)',
    'entertainment.kab.facilities.care': 'Dedicated horse care and maintenance areas',
    'entertainment.kab.facilities.environment': 'Secure, clean, and well-managed environment',
    'entertainment.kab.facilities.comfort': 'Comfortable facilities for riders and visitors',
    
    'entertainment.kab.vision.title': 'Our Vision',
    'entertainment.kab.vision.description': 'Kab Equestrian Center represents the first step in Le Premier Group\'s broader entertainment vision. The Group aims to expand into additional lifestyle, leisure, and entertainment projects that deliver premium experiences while maintaining the highest standards of quality, safety, and innovation.',
    
    'entertainment.kab.gallery.title': 'Photo Gallery',
    'entertainment.kab.gallery.description': 'Discover the comfort of horse care and the equestrian lifestyle at Kab Equestrian Center through our carefully selected photo gallery, which showcases horses, observations, and training environments.',
    
    'entertainment.services.title': 'Entertainment Services',
    'entertainment.services.subtitle': 'Comprehensive entertainment solutions',
    'entertainment.services.events': 'Event Management',
    'entertainment.services.events.desc': 'Professional planning and execution',
    'entertainment.services.venues': 'Venue Management',
    'entertainment.services.venues.desc': 'Operating entertainment venues',
    'entertainment.services.production': 'Production Services',
    'entertainment.services.production.desc': 'Video, audio, and production technologies',
    'entertainment.services.catering': 'Food and Beverage Services',
    'entertainment.services.catering.desc': 'Luxury food and beverage solutions',
    'entertainment.services.decoration': 'Event Decoration',
    'entertainment.services.decoration.desc': 'Creative design and coordination',
    'entertainment.services.coordination': 'Event Coordination',
    'entertainment.services.coordination.desc': 'Smooth event management',
    
    'entertainment.stats.title': 'Entertainment Excellence',
    'entertainment.stats.subtitle': 'Creating Unforgettable Moments',
    'entertainment.stats.events': 'Hosted Events',
    'entertainment.stats.guests': 'Happy Guests',
    'entertainment.stats.venues': 'Managed Venues',
    'entertainment.stats.satisfaction': 'Customer Satisfaction',
    
    'entertainment.gallery.title': 'Event Gallery',
    'entertainment.gallery.subtitle': 'Moments We Created',
    
    'entertainment.clients.title': 'Entertainment Clients',
    'entertainment.clients.subtitle': 'Trusted Event Partners',
    
    'entertainment.cta.title': 'Plan Your Next Event',
    'entertainment.cta.description': 'Let us make your next event unforgettable.',
    'entertainment.cta.button': 'Contact Us',
    
    // Common
    'common.backToHome': 'Back to Home',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.divisions': 'الأقسام',
    'nav.construction': 'الإنشاءات',
    'nav.manufacturing': 'التصنيع',
    'nav.safety': 'السلامة والحريق',
    'nav.entertainment': 'الترفيه',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'بناء التميز',
    'hero.subtitle': 'في كل صناعة',
    'hero.description': 'مع أكثر من 20 عاماً من الخبرة، تقدم مجموعة لو بريميير حلولاً عالمية المستوى في البناء والتصنيع والسلامة والترفيه.',
    'hero.cta': 'استكشف أعمالنا',
    
    'hero.main.title': 'نبني نجاح الغد اليوم',
    'hero.main.description': 'مجموعة أعمال متنوعة تمتلك أكثر من 20 عامًا من التميّز في مجالات الإنشاءات والتصنيع والسلامة والترفيه.',
    'hero.main.cta': 'استكشف أقسامنا',
    
    // Stats
    'stats.years': 'سنوات من التميز',
    'stats.projects': 'المشاريع المنجزة',
    'stats.clients': 'عملاء راضون',
    'stats.divisions': 'قطاعات الأعمال',
    
    // Divisions Section
    'divisions.title': 'أقسام أعمالنا',
    'divisions.subtitle': 'نقدّم التميّز عبر قطاعات متعددة من خلال خبرات متخصصة وسجل حافل بالإنجازات.',
    'divisions.construction.name': 'مقاولات',
    'divisions.construction.desc': 'بناء المستقبل بدقة وجودة',
    'divisions.construction.fullDesc': 'حلول عالمية المستوى للبنية التحتية والمباني تتميز بالدقة والجودة والالتزام بالجداول الزمنية.',
    'divisions.manufacturing.name': 'الصناعة',
    'divisions.manufacturing.desc': 'حلول مبتكرة للصناعة الحديثة',
    'divisions.manufacturing.fullDesc': 'مرافق تصنيع متطورة تنتج منتجات صناعية عالية الجودة باستخدام أحدث التقنيات المتقدمة.',
    'divisions.safety.name': 'السلامة',
    'divisions.safety.desc': 'حماية ما يهم أكثر',
    'divisions.safety.fullDesc': 'حلول شاملة للسلامة من الحرائق وأنظمة حماية تضمن أعلى معايير الأمان.',
    'divisions.entertainment.name': 'الترفية',
    'divisions.entertainment.desc': 'خلق تجارب لا تُنسى',
    'divisions.entertainment.fullDesc': 'صناعة تجارب لا تُنسى من خلال وجهات ترفيهية مبتكرة وخدمات إدارة الفعاليات.',
    
    // About
    'about.title': 'عن مجموعة لو بريميير',
    'about.subtitle': 'أكثر من عقدين من التميز الموثوق به',
    'about.p1': 'منذ تأسيسنا، كانت مجموعة أول تصميم في طليع الابتكار والتميّز عبر العديد من القطاعات. تمتد محفظتنا المتنوعة لتشمل مالات الإنشاءات، والتصنيع الصناعي، للسلامة و الحماية من الحرائق، وقطاع الترفيه.',
    'about.p2': 'وبفضل التزامنا بالجودة والنزاهة ورضا العملاء، نجحنا في تنفيذ مئات المشاريع، مما أكسبنا ثقة العملاء حول العالم. ويُمكّننا نهجنا متعدد التخصصات من تقديم حلول متكاملة تسهم في تحقيق النجاح.',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.description': 'هل أنت مسعد بء مشروعك القادم؟ تواصل معنا اليوم واكتشف كيف يمكن لمجموعة أول تصميم مساعدتك على تحقيق أهدافك التجارية.',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'عنواننا',
    'contact.location.title': 'عنواننا',
    'contact.form.name': 'الاسم',
    'contact.form.namePlaceholder': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'بريدك الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'كيف يمكننا مساعدتك؟',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Footer
    'footer.brand': 'مجموعة أول تصميم',
    'footer.tagline': 'نُجسّد التميّز عبر مختلف القطاعات لأكثر من عقدين',
    'footer.divisions.title': 'الأقسام',
    'footer.divisions.construction': 'الإنشاءات',
    'footer.divisions.manufacturing': 'التصنيع الصناعي',
    'footer.divisions.safety': 'للسلامة و الحماية من الحرائق',
    'footer.divisions.entertainment': 'الترفيه',
    'footer.company.title': 'الشركة',
    'footer.company.about': 'من نحن',
    'footer.company.team': 'فريقنا',
    'footer.company.careers': 'الوظائف',
    'footer.company.news': 'الأخبار',
    'footer.connect.title': 'تواصل معنا',
    'footer.connect.contact': 'اتصل بنا',
    'footer.connect.linkedin': 'لينكدإن',
    'footer.connect.twitter': 'تويتر',
    'footer.connect.facebook': 'فيسبوك',
    'footer.connect.instagram': 'إنستقرام',
    'footer.copyright': '© 2026 مجموعة لي بريميير. جميع الحقوق محفوظة',
    'footer.riyadh': 'الرياض, النرجس 12234',
    
    // Construction Page
    'construction.hero.title': 'قسم الإنشاءات',
    'construction.hero.subtitle': 'بناء المستقبل',
    'construction.hero.description': 'تقديم مشاريع إنشائية عالمية المستوى بدقة وجودة والتزام راسخ بالتميّز. من المباني السكنية إلى التجارية والمنشآت الصناعية، نحن نبني أسس الغد.',
    
    'construction.mission.title': 'رسالتنا',
    'construction.mission.description': 'تقديم حلول إنشائية استثنائية تتجاوز توقعات العملاء من خلال التصميم المبتكر، والحرفية العالية، وممارسات البناء المستدامة، مع الحفاظ على أعلى معايير السلامة.',
    'construction.about.title': 'من نحن',
    'construction.about.description': 'تقدّم شركة أول تصميم للإنشاءات أكثر من 20 عامًا من الخبرة في تنفيذ مشاريع إنشائية متنوعة. يضمن فريقنا ذو الخبرة، ومعداتنا الحديثة، ومنهجيات العمل المثبتة، إنجاز كل مشروع في الوقت المحدد وضمن الميزانية.',
    'construction.vision.title': 'رؤيتنا',
    'construction.vision.description': 'أن نكون الشريك الأكثر ثقة في قطاع الإنشاءات على مستوى المنطقة، معروفين بتحويل الرؤى المعمارية إلى واقع من خلال التميّز والابتكار والالتزام الراسخ بالجودة.',
    
    'construction.services.title': 'خدماتنا',
    'construction.services.subtitle': 'حلول إنشائية شاملة',
    'construction.services.general': 'الإنشاءات العامة',
    'construction.services.general.desc': 'تسليم المشروع الكامل من المفهوم إلى الإنجاز',
    'construction.services.infrastructure': 'تطوير البنية التحتية',
    'construction.services.infrastructure.desc': 'بناء المرافق والشبكات الأساسية',
    'construction.services.commercial': 'المشاريع التجارية',
    'construction.services.commercial.desc': 'مرافق أعمال حديثة',
    'construction.services.residential': 'البناء السكني',
    'construction.services.residential.desc': 'منازل ومجتمعات عالية الجودة',
    'construction.services.renovation': 'التجديد وإعادة التصميم',
    'construction.services.renovation.desc': 'تحويل المساحات الموجودة',
    'construction.services.management': 'إدارة المشاريع',
    'construction.services.management.desc': 'إشراف وتنسيق خبير',
    
    'construction.serviceslist.title': 'خدمات الإنشاءات',
    'construction.serviceslist.hospitality': 'إنشاءات الضيافة (الفنادق والمنتجعات)',
    'construction.serviceslist.commercial': 'المباني التجارية',
    'construction.serviceslist.industrial': 'المنشآت الصناعية',
    'construction.serviceslist.infrastructure': 'تطوير البنية التحتية',
    'construction.serviceslist.renovation': 'أعمال التجديد وإعادة التأهيل',
    'construction.serviceslist.steel': 'إنشاء الهياكل الحديدية',
    'construction.serviceslist.dataroom': 'غرف البيانات (Data Room)',
    'construction.serviceslist.knx': 'أنظمة KNX',
    'construction.serviceslist.concrete': 'أعمال الخرسانة',
    'construction.serviceslist.mep': 'تركيب أنظمة الأعمال الكهروميكانيكية (MEP)',
    'construction.serviceslist.interior': 'التشطيبات الداخلية',
    'construction.serviceslist.turnkey': 'تنفيذ المشاريع بنظام تسلي مفتاح',
    'construction.serviceslist.hotelfit': 'تجهيز وتجديد الفنادق',
    'construction.serviceslist.intfitout': 'أعمال تجهيز الديكور الداخلي (Interior Fit-Out)',
    'construction.serviceslist.lowcurrent': 'أنظمة التيار الخفيف (لو بريميير للسلامة)',
    'construction.serviceslist.delivery': 'إدارة تسليم المشاريع والإشراف على الموقع',
    'construction.serviceslist.bms': 'أنظمة إدارة المباني (BMS)',
    'construction.serviceslist.grms': 'نظام إدارة غرف النزلاء (GRMS)',
    
    'construction.ourprojects.title': 'مشاريعنا',
    'construction.ourclients.title': 'عملائنا',
    
    // Project Names
    'projects.novotel': 'هوتيل نوڤوتيل',
    'projects.shaqra': 'مصنع شقراء',
    'projects.therock': 'الصخرة',
    'projects.bestwaha': 'بست ويسترن بلاس',
    'projects.alyarmook': 'مدرسة ايرموك',
    'projects.premium': 'مدارس الرياض',
    'projects.alinma': 'بنك الأنماء',
    'projects.intercontinental': 'فندق الانتركونتننتال',
    'projects.holidayinn': 'فندق الهوليدي إن',
    'projects.voco': 'فندق فوكو',
    'projects.staybridge': 'فندق ستايبريدج',
    'projects.rajhibank': 'فروع بنك الراجحي',
    'projects.rowad': 'مدارس رواد الخليج العالمية',
    'projects.tbc': 'مدارس TBC',
    'projects.romansiah': 'مطاعم الرومانسية',
    'projects.rawdah': 'الروضة مبنى تجاري',
    'projects.mof': 'مكاتب وزارة المالية',
    'projects.gasco': 'المقر الرئيسي لشركة غازكو',
    'projects.raed': 'الرائد قروڤ',
    'projects.rayan': 'الريان مبنى تجاري',
    'projects.masif': 'المصيف مبنى تجاري',
    'projects.monshaat': 'مكاتب المنشآت',
    'projects.compounds': 'كامباوند خاص',
    'projects.luhaidan': 'اللحيدان مكاتب و مبنى تجاري',
    'projects.more': 'مشاريع أخرى...',
    
    'construction.expertise.title': 'خبرتنا',
    'construction.expertise.subtitle': 'عقود من التميز في البناء',
    'construction.expertise.experience': 'سنوات الخبرة',
    'construction.expertise.projects': 'المشاريع المنجزة',
    'construction.expertise.clients': 'العملاء الراضون',
    'construction.expertise.engineers': 'فريق الخبراء',
    
    'construction.projects.title': 'مشاريع مميزة',
    'construction.projects.subtitle': 'عرض أفضل أعمالنا',
    'construction.projects.view': 'عرض التفاصيل',
    
    'construction.clients.title': 'عملائنا',
    
    'construction.cta.title': 'مستعد لبدء مشروعك؟',
    'construction.cta.description': 'دعنا نناقش كيف يمكننا تحقيق رؤيتك من خلال خبرتنا في البناء.',
    'construction.cta.button': 'تواصل معنا',
    
    // Manufacturing Page
    'manufacturing.hero.title': 'التصنيع الصناعي',
    'manufacturing.hero.subtitle': 'الهندسة الدقيقة والإنتاج عالي الجودة',
    'manufacturing.hero.description': 'حلول تصنيعية متقدمة تقدم منتجات عالية الجودة تطبيقات صناعية متنوعة.',
    'manufacturing.hero.industrial.title': 'أول تصميم للصناعة',
    'manufacturing.hero.industrial.description': 'تتخصص شركة أول تصميم للصناعة في تصنيع الهياكل الحديدية المتقدمة، وبثق الألمنيوم، وخدمات التشكيل بالدرفلة. وبفضل أكثر من 20 عامًا من الخبرة المتراكمة والعميات المبتكرة، نلبّي احتياجات كل مشروع بكفاءة وجودة باعتبارهما أولويتنا القصوى.',
    
    'manufacturing.mission.title': 'رسالتنا',
    'manufacturing.mission.description': 'رسالتنا هي تقديم حلول تصنيع صناعي متفوقة من خلال الابتكار، والهندسة الدقيقة، والالتزام الراسخ بالجودة. نسعى إلى تجاوز توقعات عملائنا مع الحفاظ على ممارسات أعمال مستدامة وأخلاقية.',
    
    'manufacturing.about.title': 'من نحن',
    'manufacturing.about.description': 'بفضل مرافقنا المتطورة وقوتنا العاملة عالية الكفاءة، نقدم خدمات تصنيع شاملة تشمل تشكيل الحديد، وبثق الألمنيوم، والحلول الصناعية المخصصة لمختلف القطاعات.',
    
    'manufacturing.vision.title': 'رؤيتنا',
    'manufacturing.vision.description': 'أن نكون الشركة الرائدة في المنطقة في مجال التصنيع الصناعي معروفة بالتميز والابتكار والموثوقية في كل مشروع نقوم به، وتحديد معايير جديدة في الصناعة.',
    
    'manufacturing.services.aluminum.title': 'أعمال الألمنيوم والحديد',
    'manufacturing.services.aluminum.item1': 'تكسية الواجهات',
    'manufacturing.services.aluminum.item2': 'الأبواب والنوافذ',
    'manufacturing.services.aluminum.item3': 'الواجهات الزجاجية (Curtain Wall)',
    'manufacturing.services.aluminum.item4': 'الهياكل الزجاجية',
    'manufacturing.services.aluminum.item5': 'القباب والسقوف الزجاجية (Skylights)',
    'manufacturing.services.aluminum.item6': 'أعمال الستانلس ستيل',
    'manufacturing.services.aluminum.item7': 'الأعمال المعدنية الزخرفية',
    'manufacturing.services.aluminum.item8': 'الدرابزينات والحواجز (Handrails & Balustrades)',
    'manufacturing.services.aluminum.item9': 'الألواح الزخرفية والتفاصيل المعمارية',
    'manufacturing.services.aluminum.item10': 'تصنيع الألمنيوم حسب الطلب',
    'manufacturing.services.aluminum.description': 'نقدّم أعمال ألمنيوم وحديد عالية الجودة تشمل الواجهات الزجاجية، وتكسية الواجهات، والأبواب والنوافذ، والهياكل الزجاجية، والسقوف الزجاجية، والدرابزينات، والعناصر المعدنية الزخرفية. يركّز فريقنا على التنفيذ الدقيق، واستخدام مواد متينة، وضمان تسليم المشاريع بجودة موثوقة.',
    
    'manufacturing.services.wooden.title': 'الصناعات الخشبية',
    'manufacturing.services.wooden.item1': 'تكسية الجدران',
    'manufacturing.services.wooden.item2': 'خزائن المطابخ',
    'manufacturing.services.wooden.item3': 'غرف الملابس والخزائن (Walk-in Closet)',
    'manufacturing.services.wooden.item4': 'الأبواب والنوافذ',
    'manufacturing.services.wooden.item5': 'الأثاث الثابت',
    'manufacturing.services.wooden.item6': 'تجهيزات الفعاليات',
    'manufacturing.services.wooden.description': 'نوفّر لك خدمات التخطيط والدعم مهما كان حجم مشروعك أو موقعك. كما يقدّم لك فريقنا المتخصص قائمة تفصيلية بالمواد المطلوبة للمشروع، لتكون على دراية كاملة بكل ما يلزم لتنفيذ العمل بالشكل الصحيح.',
    
    'manufacturing.services.grc.title': 'الخرسانة المسلحة بالألياف الزجاجية (GRC) والخرسانة المسلحة بألياف البازلت (GRB)',
    'manufacturing.services.grc.item1': 'واجهات المباني',
    'manufacturing.services.grc.item2': 'الأعمدة المعمارية',
    'manufacturing.services.grc.item3': 'الألواح الزخرفية',
    'manufacturing.services.grc.item4': 'أسطح الجدران والأسقف الداخلية',
    'manufacturing.services.grc.item5': 'المنحوتات والتفاصيل المعمارية',
    'manufacturing.services.grc.item6': 'الأسوار والحواجز',
    'manufacturing.services.grc.description': 'توفّر حلول GRC وGRB لدينا عناصر معمارية عالية الأداء للاستخدامات الخارجية والداخلية على حد سواء، حيث تجمع بين المتانة والدقة والجودة الجمالية لتلبية متطلبات مشاريع البناء الحديثة.',
    
    'manufacturing.services.acrylic.title': 'الأسطح الأكريليكية الصلبة (الرخام الصناعي)',
    'manufacturing.services.acrylic.item1': 'الأسقف',
    'manufacturing.services.acrylic.item2': 'أسطح الكاونترات',
    'manufacturing.services.acrylic.item3': 'أسطح المغاسل (Vanity Top)',
    'manufacturing.services.acrylic.item4': 'التكسية',
    'manufacturing.services.acrylic.item5': 'أسطح المطابخ',
    'manufacturing.services.acrylic.item6': 'مغاسل مصنوعة يدويًا',
    'manufacturing.services.acrylic.item7': 'الأعمدة',
    'manufacturing.services.acrylic.description': 'نقوم بتصنيع الرخام الصناعي وتحويله إلى تصاميم راقية للمطابخ والفنادق ودورات المياه. تمتلك شركة لي بريميير ورشة متخصصة في تصنيع وتركيب الأسطح الأكريليكية الصلبة بجودة عالية ومهارة احترافية.',
    
    'manufacturing.projects.title': 'مشاريعنا',
    'manufacturing.clients.title': 'عملائنا',
    
    'manufacturing.industrial.title': 'الخدمات الصناعية',
    
    'manufacturing.services.title': 'قدرات التصنيع',
    'manufacturing.services.subtitle': 'حلول صناعية شاملة',
    'manufacturing.services.metal': 'تشكيل العادن',
    'manufacturing.services.metal.desc': 'تشكيل معادن بدقة وتصنيع مخصص',
    'manufacturing.services.machinery': 'آلات ومعدات صناعية',
    'manufacturing.services.machinery.desc': 'تصنيع وتركيب آلات صناعية',
    'manufacturing.services.quality': 'مراقبة الجودة',
    'manufacturing.services.quality.desc': 'اختبارات دقيقة وضمان الجودة',
    'manufacturing.services.custom': 'حلول مخصصة',
    'manufacturing.services.custom.desc': 'تصنيع مخصص لاحتياجات فريدة',
    'manufacturing.services.maintenance': 'خدمات الصيانة',
    'manufacturing.services.maintenance.desc': 'دعم مستمر وصيانة المعدات',
    'manufacturing.services.consulting': 'استشارات صناعية',
    'manufacturing.services.consulting.desc': 'نصائح متخصصة لتحسين التصنيع',
    
    'manufacturing.stats.title': 'التميز في التصنيع',
    'manufacturing.stats.subtitle': 'قدرات رائدة في الصناعة',
    'manufacturing.stats.capacity': 'القدرة الإنتاجية',
    'manufacturing.stats.products': 'خطوط الإنتاج',
    'manufacturing.stats.certification': 'شهادات الجودة',
    'manufacturing.stats.delivery': 'التسليم في الوقت المحدد',
    
    'manufacturing.products.title': 'عرض المنتجات',
    'manufacturing.products.subtitle': 'منتجات عالية الجودة للتطبيقات الصناعية',
    
    'manufacturing.cta.title': 'هل تحتاج حلول تصنيع؟',
    
    'manufacturing.cta.description': 'اتصل بنا لمناقشة متطلبات التصنيع الصناعي الخاصة بك.',
    
    'manufacturing.cta.button': 'طلب عرض أسعار',
    
    // Safety Page
    'safety.hero.title': 'للسلامة و الحماية من الحرائق',
    'safety.hero.subtitle': 'حماية الأرواح والممتلكات',
    'safety.hero.description': 'حلول شاملة للسلامة و الحماية من الحرائق للتطبيقات التجارية والصناعية والسكنية.',
    
    'safety.mission.title': 'رسالتنا',
    'safety.mission.description': 'تقديم حلول شاملة للسلامة و الحماية من الحرائق تضمن حماية الأرواح والممتلكات من خلال أحدث التقنيات، والخبرة المتخصصة، والالتزام الراسخ بالتميّز في معايير السلامة.',
    
    'safety.about.title': 'من نحن',
    'safety.about.description': 'تتخصص شركة أول تصميم للسلامة و الحماية من الحرائق في تصميم وتركيب وصيانة أنظمة الحماية من الحرائق المتقدمة. ويضمن فريقنا من المتخصصين المعتمدين الالتزام بأعلى معايير السلامة الدولية.',
    
    'safety.vision.title': 'رؤيتنا',
    'safety.vision.description': 'أن نكون الشريك الأكثر ثقة في مجال السلامة على مستوى المنطقة، وأن نضع معايير جديدة في الحماية من الحرائق من خلال الابتكار والموثوقية والإدارة الاستباقية للسلامة.',
    
    'safety.services.title': 'خدماتنا',
    'safety.services.subtitle': 'أنظمة السلامة الكاملة',
    'safety.services.fire': 'أنظمة إنذار الحريق',
    'safety.services.fire.desc': 'أنظمة كشف وإنذار الحريق المتقدمة',
    'safety.services.sprinkler': 'أنظمة الرش الآلي',
    'safety.services.sprinkler.desc': 'أنظمة إخماد الحرائق الأوتوماتيكية',
    'safety.services.equipment': 'معدات مكافحة الحريق',
    'safety.services.equipment.desc': 'معدات مكافحة حريق احترافية',
    'safety.services.safety': 'معدات السلامة الشخصية',
    'safety.services.safety.desc': 'معدات الحماية الشخصية وتجهيزات السلامة',
    'safety.services.inspection': 'الفحص والاختبار',
    'safety.services.inspection.desc': 'فحوصات دورية لأنظمة السلامة',
    'safety.services.training': 'التدريب على السلامة',
    'safety.services.training.desc': 'تدريب احترافي على السلامة والطوارئ',
    
    'safety.maintenance.title': 'الصيانة والدعم',
    'safety.maintenance.inspections': 'الفحص الدوري للأنظمة',
    'safety.maintenance.preventive': 'الصيانة الوقائية',
    'safety.maintenance.upgrades': 'تحديث وتطوير الأنظمة',
    'safety.maintenance.certification': 'الاعتماد السنوي',
    'safety.maintenance.documentation': 'التوثيق وإعداد التقارير',
    
    'safety.protection.title': 'أنظمة الحماية من الحرائق',
    'safety.protection.alarm': 'أنظمة إنذار الحريق',
    'safety.protection.sprinkler': 'أنظمة الرش الآلي (Sprinkler)',
    'safety.protection.suppression': 'أنظمة إخماد الحريق',
    'safety.protection.lighting': 'الإضاءة الطارئة',
    'safety.protection.extinguisher': 'توفير وصيانة خامات الحريق',
    'safety.protection.hydrant': 'أنظمة مياه الحريق',
    
    'safety.projects.title': 'مشاريعنا',
    
    'safety.stats.title': 'أداء السلامة',
    'safety.stats.subtitle': 'الالتزام بالحماية',
    'safety.stats.installations': 'الأنظمة المُثبتة',
    'safety.stats.inspections': 'الفحوصات السنوية',
    'safety.stats.response': 'وقت الاستجابة',
    'safety.stats.compliance': 'معدل الامتثال',
    
    'safety.products.title': 'منتجات السلامة',
    'safety.products.subtitle': 'معدات سلامة احترافية',
    
    'safety.clients.title': 'شركاء السلامة',
    'safety.clients.subtitle': 'حماية المنشآت المتنوعة',
    
    'safety.cta.title': 'احمِ منشأتك',
    'safety.cta.description': 'احصل على تقييم شامل للسلامة والحماية من الحرائق اليوم.',
    'safety.cta.button': 'جدولة التقييم',
    
    // Safety Equipment Services
    'safety.equipment.risk': 'تقييم المخاطر',
    'safety.equipment.supply': 'توريد معدات السلامة',
    'safety.equipment.audits': 'تدقيق الامتثال',
    'safety.equipment.elv': 'أنظمة التيار المنخفض (ELV) - كاميرات المراقبة، التحكم في الوصول، الاتصال المرئي',
    'safety.equipment.data': 'شبكات البيانات - التكبيل المهيكل',
    'safety.equipment.sound': 'أنظمة الصوت',
    
    // Entertainment Page
    'entertainment.hero.title': 'قسم الترفيه',
    'entertainment.hero.subtitle': 'خلق تجارب لا تُنسى',
    'entertainment.hero.description': 'من إدارة الأحداث إلى مرافق الترفيه، نجلب الفرح والحماس إلى كل مناسبة.',
    
    'entertainment.about.title': 'عن KAB للترفيه',
    'entertainment.about.p1': 'تُعد KAB للترفيه أحدث أقسام مجموعة لي بريميير، وقد أُنشئت لتطوير وجهات أسلوب حياة وترفيه راقية. وانطلاقًا من إرث المجموعة في الجودة والاحترافية والرؤية طويلة المدى، يمثّل هذا القسم التوسّع الاستراتيجي للمجموعة في قطاع الترفيه ونمط الحياة.',
    'entertainment.about.p2': 'تركّز KAB للترفيه على ابتكار تجارب راقية عالية الجودة تجمع بين المرافق الحديثة والتصميم المدروس والإدارة الاحترافية. ومع انطلاقتها من خلال مركز فروسية حصري، يعكس هذا القسم التزام المجموعة بالتميّز ويؤسس لقاعدة قوية لمشاريع مستقبلية في مجالات الترفيه ونمط الحياة.',
    
    'entertainment.kab.title': 'مركز KAB للفروسية',
    'entertainment.kab.subtitle': 'وجهة راقية لأسلوب حياة الفروسية',
    'entertainment.kab.description': 'يُعد مركز KAB للفروسية منشأة متكاملة صُممت خصيصًا للعناية بالخيول وتدريبها وتعزيز أسلوب حياة الفروسية. وقد تم تصميم المركز وفقًا للمعايير الدولية، ليقدّم بيئة آمنة واحترافية ومرحّبة للفرسان ومُلّاك الخيول ومحبي الفروسية.',
    
    'entertainment.kab.services.title': 'الخدمات المقدَّمة',
    'entertainment.kab.services.boarding': 'إيواء الخيول والعناية اليومية بها',
    'entertainment.kab.services.training': 'برامج تدريب فروسية احترافية',
    'entertainment.kab.services.lessons': 'دروس ركوب الخيل لمختلف المستويات',
    'entertainment.kab.services.private': 'جلسات ركوب خاصة',
    'entertainment.kab.services.events': 'فعاليات وأنشطة فروسية مستقبلية',
    
    'entertainment.kab.facilities.title': 'المرافق والمميزات',
    'entertainment.kab.facilities.stables': 'إسطبلات خيول حديثة ومصممة بعناية',
    'entertainment.kab.facilities.outdoor': 'ميدان تدريب خارجي احترافي',
    'entertainment.kab.facilities.indoor': 'ميدان تدريب داخلي مخصص (قريبًا)',
    'entertainment.kab.facilities.care': 'مناطق مخصصة للعناية بالخيول وصيانتها',
    'entertainment.kab.facilities.environment': 'بيئة آمنة ونظيفة وتدار باحترافية',
    'entertainment.kab.facilities.comfort': 'مرافق مريحة للفرسان والزوار',
    
    'entertainment.kab.vision.title': 'رؤيتنا',
    'entertainment.kab.vision.description': 'يمثّل مركز KAB للفروسية الخطوة الأولى في رؤية مجموعة بريميير الأوسع لقطاع الترفيه. وتسعى المجموعة إلى التوسّع في مشاريع إضافية في مجالات أسلوب الحياة والترفيه والتسلية، لتقديم تجارب راقية مع الحفاظ على أعلى معايير الجودة والسلامة والابتكار.',
    
    'entertainment.kab.gallery.title': 'معرض الصور',
    'entertainment.kab.gallery.description': 'اكتشف راحة العناية بالخيول وأسلوب حياة الفروسية في مركز KAB للفروسية من خلال معرض صورنا المُختار بعناية، والذي يُبرز الخيول والمشاهدات وبيئات التدريب.',
    
    'entertainment.services.title': 'خدمات الترفيه',
    'entertainment.services.subtitle': 'حلول ترفيهية شاملة',
    'entertainment.services.events': 'إدارة الأحداث',
    'entertainment.services.events.desc': 'تخطيط وتنفيذ محترف',
    'entertainment.services.venues': 'إدارة المرافق',
    'entertainment.services.venues.desc': 'تشغيل مرافق الترفيه',
    'entertainment.services.production': 'خدمات الإنتاج',
    'entertainment.services.production.desc': 'إنتاج فيديو وصوت وتقنيات إنتاجية',
    'entertainment.services.catering': 'خدمات تقديم الطعام',
    'entertainment.services.catering.desc': 'حلول طعام ومشروبات فاخرة',
    'entertainment.services.decoration': 'ديكور الأحداث',
    'entertainment.services.decoration.desc': 'تصميم وتنسيق خلاق',
    'entertainment.services.coordination': 'تنسيق الأحداث',
    'entertainment.services.coordination.desc': 'تنظيم الأحداث بسلاسة',
    
    'entertainment.stats.title': 'تميز الترفيه',
    'entertainment.stats.subtitle': 'خلق لحظات لا تُنسى',
    'entertainment.stats.events': 'الأحداث المضيفة',
    'entertainment.stats.guests': 'ضيوف سعداء',
    'entertainment.stats.venues': 'مرافق مدارة',
    'entertainment.stats.satisfaction': 'رضا العملاء',
    
    'entertainment.gallery.title': 'معرض الأحداث',
    'entertainment.gallery.subtitle': 'اللحظات التي خلقناها',
    
    'entertainment.clients.title': 'عملاء الترفيه',
    'entertainment.clients.subtitle': 'شركاء أحداث موثوق بهم',
    
    'entertainment.cta.title': 'خطط لحدثك القادم',
    'entertainment.cta.description': 'دعنا نجعل حدثك القادم تجربة لا تُنسى.',
    'entertainment.cta.button': 'اتصل بنا',
    
    // Common
    'common.backToHome': 'العودة للرئيسية',
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.contactUs': 'اتصل بنا',
    'common.readMore': 'قراءة المزيد',
  }
};