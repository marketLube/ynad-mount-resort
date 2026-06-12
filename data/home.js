const u = (id, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_SLIDES = [
  {
    image: u("photo-1469474968028-56623f02e42e"),
    kicker: "Welcome to YNAD Mount Resort",
    title: "Wake Up Above the Clouds",
    sub: "A hillside sanctuary folded into the misty heart of Wayanad.",
  },
  {
    image: u("photo-1719831738921-972e0ec76337"),
    kicker: "Meppadi · Wayanad · Kerala",
    title: "Where the Hills Wear Green",
    sub: "Endless tea gardens, cardamom air and mornings that smell of rain.",
  },
  {
    image: u("photo-1448375240586-882707db888b"),
    kicker: "The Moody Climate of Wayanad",
    title: "Mist, Petrichor & Slow Mornings",
    sub: "Let the weather set the pace. You just sit back and breathe.",
  },
  {
    image: u("photo-1615880484746-a134be9a6ecf"),
    kicker: "Stay With Us",
    title: "Your Second Home in the Mountains",
    sub: "Vintage homes and refined rooms, wrapped in forest silence.",
  },
];

export const ROOMS = [
  {
    name: "Vintage Home",
    slug: "vintage-home",
    image: u("photo-1596394516093-501ba68a0ba6", 1200),
    blurb:
      "A planter's-era home with timber floors, deep verandas and old-world charm — for families and friends who want Wayanad the way it used to be.",
    details: ["Private veranda", "Ideal for families", "Garden views"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for the Vintage Home.",
  },
  {
    name: "Premium Room",
    slug: "premium-room",
    image: u("photo-1590490360182-c33d57733427", 1200),
    blurb:
      "Light-filled and serene, with a private balcony that opens straight into the mist. Made for couples chasing slow, romantic mornings.",
    details: ["Mist-view balcony", "King bed", "Perfect for couples"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for a Premium Room.",
  },
  {
    name: "Deluxe Room",
    slug: "deluxe-room",
    image: u("photo-1582719478250-c89cae4dc85b", 1200),
    blurb:
      "Understated comfort with everything in its right place — a quiet, elegant base for exploring waterfalls, peaks and plantations.",
    details: ["Garden-facing", "Cosy & elegant", "Great value"],
    wa: "Hi YNAD Mount Resort! I'd like to check availability for a Deluxe Room.",
  },
];

export const OFFERS = [
  {
    title: "Monsoon Mist",
    deal: "Stay 3 nights, pay for 2",
    note: "For the rain chasers. Valid on direct WhatsApp bookings through the monsoon season.",
    wa: "Hi YNAD Mount Resort! I'd like to know more about the Monsoon Mist offer (stay 3, pay 2).",
  },
  {
    title: "Honeymoon Hideaway",
    deal: "Candlelight dinner + room styling",
    note: "A complimentary romantic dinner and floral room décor for newly-weds on stays of 2+ nights.",
    wa: "Hi YNAD Mount Resort! We're planning our honeymoon — could you share the Honeymoon Hideaway details?",
  },
  {
    title: "Early Bird",
    deal: "Up to 20% off direct bookings",
    note: "Book 21 days ahead on WhatsApp and keep more of your budget for the journey.",
    wa: "Hi YNAD Mount Resort! I'd like to claim the Early Bird direct-booking offer.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anjali & Rohit",
    from: "Bengaluru",
    quote:
      "We woke up to a sea of clouds below our balcony. The quiet here is something you carry home with you.",
  },
  {
    name: "Meera Nair",
    from: "Kochi",
    quote:
      "The Vintage Home felt like my grandmother's house, only with better coffee. My kids didn't want to leave.",
  },
  {
    name: "Daniel & Sara",
    from: "London",
    quote:
      "Of all our stops in Kerala, YNAD was the one we extended. Mist, rain on the roof, zero noise. Perfect.",
  },
  {
    name: "Arjun Menon",
    from: "Chennai",
    quote:
      "Booked over WhatsApp in five minutes, got the warmest welcome in Wayanad. The staff treat you like family.",
  },
  {
    name: "Fatima K.",
    from: "Dubai",
    quote:
      "That moody Wayanad climate everyone talks about? It's real, and this is the place to live inside it.",
  },
];

export const REELS = [
  {
    src: "https://videos.pexels.com/video-files/15346324/15346324-hd_1080_1920_30fps.mp4",
    label: "Misty forest mornings",
  },
  {
    src: "https://videos.pexels.com/video-files/5007874/5007874-hd_1080_1920_30fps.mp4",
    label: "Rain on the leaves",
  },
  {
    src: "https://videos.pexels.com/video-files/16754842/16754842-hd_1080_1920_30fps.mp4",
    label: "Waterfalls from above",
  },
  {
    src: "https://videos.pexels.com/video-files/11897264/11897264-hd_1080_1920_25fps.mp4",
    label: "Monsoon close-up",
  },
  {
    src: "https://videos.pexels.com/video-files/9604517/9604517-hd_1080_1920_30fps.mp4",
    label: "Hidden cascades",
  },
  {
    src: "https://videos.pexels.com/video-files/5492238/5492238-hd_1080_1920_30fps.mp4",
    label: "River through the rocks",
  },
  {
    src: "https://videos.pexels.com/video-files/9389373/9389373-hd_1080_1920_30fps.mp4",
    label: "The stream below the hill",
  },
];

export const FAQS = [
  {
    q: "Where exactly is YNAD Mount Resort located?",
    a: "We are at Valathoor, Rippon, near Meppadi in Wayanad, Kerala (PIN 673577) — about 20 minutes from Kalpetta and close to Soochipara Falls, Chembra Peak and the Rippon tea estates.",
  },
  {
    q: "What is the best time to visit Wayanad?",
    a: "Wayanad is a year-round destination. October to May brings clear mountain views and pleasant weather, while June to September is monsoon season — mist, rain and the moody climate Wayanad is famous for.",
  },
  {
    q: "How do I book a room?",
    a: "The fastest way is WhatsApp. Message us at +91 99470 59008 with your dates and we'll confirm availability and our best direct rates within minutes.",
  },
  {
    q: "Is the resort suitable for families with children?",
    a: "Very much so. Our Vintage Home is designed for families and groups, with open gardens and safe spaces for children, while couples usually prefer our Premium Rooms.",
  },
  {
    q: "What attractions are near the resort?",
    a: "Soochipara (Sentinel Rock) Falls, Chembra Peak and its heart-shaped lake, Kanthanpara Falls, the 900 Kandi glass bridge and the tea gardens of Rippon and Meppadi are all a short drive away.",
  },
];
