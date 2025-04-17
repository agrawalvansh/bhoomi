const colors = {
  primary: '#2d5a27',
  secondary: '#D4B982', 
  tertiary: '#2d5a27',
  background: '#f5f5f0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB',
  warm: '#E6BAA3'
};
  
// Categories for sidebar
const categories = [
  { name: 'Indoor Plants', slug: 'indoor-plants', image: '/imgs/landingPage/Categories/1.svg', 
    description: 'Discover our diverse collection of indoor plants to brighten your home or office. From easy-care varieties to statement pieces, find the perfect green companion for your space.' },
  { name: 'Flowering Plants', slug: 'flowering-plants', image: '/imgs/landingPage/Categories/2.svg',
    description: 'Add vibrant colors and delightful fragrances to your garden with our selection of flowering plants. From seasonal bloomers to year-round flowering varieties.' },
  { name: 'Low Maintenance Plants', slug: 'low-maintenance-plants', image: '/imgs/landingPage/Categories/3.svg',
    description: 'Perfect for busy schedules or beginners, these plants thrive on minimal care while still looking beautiful. Enjoy greenery without the guesswork.' },
  { name: 'Air Purifying Plants', slug: 'air-purifying-plants', image: '/imgs/landingPage/Categories/4.svg',
    description: 'Breathe easier with our collection of NASA-approved air purifying plants that help remove toxins and improve indoor air quality naturally.' },
  { name: 'Low Light Plants', slug: 'low-light-plants', image: '/imgs/landingPage/Categories/5.svg',
    description: 'Specially selected varieties that thrive in shadier spots with minimal sunlight, perfect for north-facing rooms or offices with limited natural light.' },
  { name: 'Cacti and Succulents', slug: 'cacti-and-succulents', image: '/imgs/landingPage/Categories/6.svg',
    description: 'Explore our drought-tolerant collection of unique shapes and textures. These water-wise plants add character to any space with minimal maintenance.' },
  { name: 'Herbs and Edibles', slug: 'herbs-and-edibles', image: '/imgs/landingPage/Categories/7.svg',
    description: 'Grow your own culinary herbs and edible plants at home. Fresh flavors at your fingertips, perfect for kitchen gardens, balconies, or sunny windowsills.' },
  { name: 'Plant Bundles', slug: 'plant-bundles', image: '/imgs/landingPage/Categories/8.svg',
    description: 'Curated collections of complementary plants at special bundle prices. Perfect for instantly transforming spaces or gifting to plant lovers.' }
];
  
// Complete product data with all attributes for each product
const products = [
  {
    id: '1',
    name: 'Snake Plant',
    description: 'The Snake Plant, or Sansevieria trifasciata, is one of the most popular and hardy species of houseplants. With striking upright, sword-like leaves featuring green bands and yellow or white edges, they add architectural interest to any space. Native to West Africa, these plants are virtually indestructible and will thrive in almost any condition, making them perfect for beginners or those with busy lifestyles. Beyond their aesthetic appeal, Snake Plants are renowned for their air-purifying abilities, converting CO2 to oxygen at night, making them ideal bedroom companions.',
    shortDescription: 'Air Purifying Indoor Plant Set',
    price: 499,
    originalPrice: 549,
    discount: 9,
    category: 'indoor-plants',
    categories: ['indoor-plants', 'low-maintenance-plants', 'air-purifying-plants', 'low-light-plants'],
    image: '/imgs/landingPage/Products/1.png',
    quantity: '1 plant',
    featured: 'Popular',
    features: [
      'Air purifying - removes benzene, formaldehyde, trichloroethylene, xylene and toluene',
      'Low maintenance - perfect for beginners',
      'Drought tolerant - can go 3-4 weeks without water',
      'Can tolerate low light conditions',
      'NASA recommended air-purifying plant',
      'Produces oxygen at night'
    ],
    specifications: {
      height: '30-40 cm',
      pot: 'Eco-friendly ceramic, 15 cm diameter',
      light: 'Indirect sunlight, tolerates low light',
      water: 'Once every 2-3 weeks, less in winter'
    },
    care: 'Snake plants prefer bright, indirect light but can tolerate low light conditions and even some direct sun. Allow soil to dry completely between waterings - overwatering is the most common issue. Fertilize 2-3 times during the growing season with a balanced houseplant fertilizer. Repot every 2-3 years or when roots become crowded. Wipe leaves occasionally to remove dust.',
    stock: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Peace Lily',
    description: 'The Peace Lily (Spathiphyllum) is a popular indoor plant known for its elegant white "flowers" (actually modified leaves called spathes) and lush green foliage. Native to tropical regions of the Americas and southeastern Asia, this plant symbolizes peace, prosperity, and tranquility. Beyond its striking appearance, the Peace Lily is one of the best air-purifying houseplants identified by NASA\'s Clean Air Study, effectively removing common household toxins. Its ability to thrive in low light makes it perfect for brightening up dim corners of your home or office.',
    shortDescription: 'Elegant Flowering Indoor Plant',
    price: 399,
    originalPrice: 499,
    discount: 22,
    category: 'indoor-plants',
    categories: ['indoor-plants', 'flowering-plants', 'air-purifying-plants', 'low-light-plants'],
    image: '/imgs/landingPage/Products/2.png',
    quantity: '1 plant',
    features: [
      'Air purifying - removes ammonia, benzene, formaldehyde and xylene',
      'Produces elegant white blooms throughout the year',
      'Thrives in low to medium light conditions',
      'Humidity loving - perfect for bathrooms',
      'Indicates when it needs water by drooping slightly',
      'NASA recommended air-purifying plant'
    ],
    specifications: {
      height: '40-50 cm',
      pot: 'Recycled plastic inner pot with ceramic outer pot, 18 cm diameter',
      light: 'Low to medium indirect light, no direct sunlight',
      water: 'Keep soil moist but not soggy, water once a week'
    },
    care: 'Peace Lilies enjoy consistent moisture but not soggy soil. They will dramatically droop when thirsty, making them excellent communicators. Keep away from direct sunlight which can scorch leaves. They prefer high humidity environments like bathrooms. Feed with diluted liquid fertilizer every 6-8 weeks during growing season. Trim yellowing leaves at the base and remove spent flowers to encourage new blooms.',
    stock: 8,
    rating: 4.6,
    reviews: 98
  },
  {
    id: '3',
    name: 'Monstera',
    description: 'The Monstera, also known as the Swiss Cheese Plant or Split-Leaf Philodendron, is famous for its distinctively perforated leaves that develop unique splits and holes as they mature. Native to the tropical forests of southern Mexico and Panama, this climbing evergreen can become a stunning focal point in any interior space. The name "Deliciosa" refers to its pineapple-like fruit produced in the wild (though rarely when grown indoors). This statement plant brings a touch of jungle exoticism to modern interiors and has become an iconic symbol in contemporary interior design.',
    shortDescription: 'Swiss Cheese Plant - Easy Care Indoor Plant',
    price: 499,
    originalPrice: 999,
    discount: 50,
    category: 'indoor-plants',
    categories: ['indoor-plants', 'air-purifying-plants'],
    image: '/imgs/landingPage/Products/3.png',
    quantity: '1 plant',
    featured: 'Trending',
    features: [
      'Unique fenestrated foliage that matures with distinctive holes',
      'Statement tropical plant with impressive large leaves',
      'Moderate care needed - good for intermediate plant parents',
      'Air purifying properties help clean indoor air',
      'Fast growing under optimal conditions',
      'Can climb or trail with proper support'
    ],
    specifications: {
      height: '60-80 cm',
      pot: 'Eco-friendly ceramic pot, 20 cm diameter',
      light: 'Bright, indirect light - avoid direct sun',
      water: 'Weekly, allow top 1-2 inches of soil to dry between waterings'
    },
    care: 'Monstera plants thrive in bright, indirect light but can tolerate some shade. Water thoroughly when the top 1-2 inches of soil feel dry, typically once a week, reducing in winter. Enjoys higher humidity but adapts to normal home conditions. Regular misting benefits growth. Provide support for climbing as the plant matures. Wipe leaves occasionally with a damp cloth to keep them dust-free and glossy. Repot every 2 years or when roots become visible at drainage holes.',
    stock: 5,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    name: 'Pothos Golden',
    description: 'Pothos Golden, scientifically known as Epipremnum aureum, is an easy-care indoor vine with heart-shaped leaves featuring beautiful golden-yellow variegation. Native to the Solomon Islands in the South Pacific, this tropical vine is renowned for its hardiness and adaptability. The trailing stems can grow several feet long, making it perfect for hanging baskets, shelves, or training up a moss pole. Its air-purifying abilities and tolerance for neglect have earned it the nickname "Devil\'s Ivy" because it\'s so hard to kill, making it an ideal choice for beginners and busy plant parents.',
    shortDescription: 'Trailing Vine Plants for Home',
    price: 299,
    originalPrice: 455,
    discount: 34,
    category: 'indoor-plants',
    categories: ['indoor-plants', 'low-maintenance-plants', 'air-purifying-plants', 'low-light-plants'],
    image: '/imgs/landingPage/Products/4.png',
    quantity: '1 plant',
    features: [
      'Extremely easy to grow - perfect for beginners',
      'Beautiful trailing vine with golden variegated leaves',
      'Air purifying - removes formaldehyde, benzene and carbon monoxide',
      'Tolerates low light to bright indirect light',
      'Drought tolerant - can go weeks without water',
      'Easily propagated from stem cuttings'
    ],
    specifications: {
      height: '20-30 cm (trailing vines up to 2m)',
      pot: 'Recycled plastic hanging pot, 12 cm diameter',
      light: 'Versatile - thrives in low to bright indirect light',
      water: 'When soil is dry to touch, approximately every 7-10 days'
    },
    care: 'Pothos can adapt to a wide range of light conditions but grows best and maintains stronger variegation in medium to bright indirect light. Allow soil to dry between waterings and reduce watering in winter. Yellow leaves often indicate overwatering, while brown edges may signal underwatering. Trim occasionally to encourage bushier growth. Can be easily propagated from stem cuttings placed in water until roots develop. Repot every 1-2 years or when roots become crowded.',
    stock: 20,
    rating: 4.7,
    reviews: 85
  },
  {
    id: '5',
    name: 'Hibiscus',
    description: 'Hibiscus Rosa-sinensis, commonly known as Chinese Hibiscus or Tropical Hibiscus, is renowned for its large, showy blooms that can measure 4-8 inches across. Native to East Asia, this evergreen shrub produces flowers in vibrant shades of red, orange, yellow, pink, and white, often with contrasting centers. The trumpet-shaped blossoms typically last only a day but are produced abundantly throughout the growing season. Beyond its ornamental value, hibiscus flowers are used in traditional medicine and can be brewed into a tangy, cranberry-like tea rich in vitamin C and antioxidants. This tropical beauty adds a touch of exotic flair to gardens, patios, or sunny indoor spaces.',
    shortDescription: 'Tropical Flowering Plant with Bright Blooms',
    price: 599,
    originalPrice: 899,
    discount: 33,
    category: 'flowering-plants',
    categories: ['flowering-plants'],
    image: '/imgs/landingPage/Products/5.png',
    quantity: '1 plant',
    features: [
      'Vibrant flowers in shades of red, pink, orange, yellow or white',
      'Tropical plant that blooms throughout warm months',
      'Attracts pollinators like butterflies and hummingbirds',
      'Regular bloomer with proper care',
      'Flowers can measure 4-8 inches across',
      'Edible flowers can be used for tea or garnish'
    ],
    specifications: {
      height: '50-70 cm (can grow to 3m in ideal conditions)',
      pot: 'Terracotta pot with drainage, 20 cm diameter',
      light: 'Full sun to partial shade - at least 6 hours of sunlight daily',
      water: 'Regular watering, keep soil consistently moist but not waterlogged'
    },
    care: 'Hibiscus plants need plenty of sunlight (at least 6 hours daily) and regular watering to support blooming. They thrive in humid conditions and benefit from daily misting in dry climates. Fertilize every 2 weeks during the growing season with a high-potassium fertilizer. Prune after flowering to encourage bushier growth and more blooms. Protect from temperatures below 10°C (50°F). Watch for pests like aphids and spider mites. Bring indoors during winter in colder climates.',
    stock: 7,
    rating: 4.5,
    reviews: 42
  },
  {
    id: '6',
    name: 'Jasmine',
    description: 'The Jasmine Plant (Jasminum polyanthum), also known as Pink Jasmine or Chinese Jasmine, is celebrated for its clusters of star-shaped white flowers that emerge from pink buds, filling the air with a sweet, intoxicating fragrance. Native to China and Myanmar, this twining vine can grow 15-20 feet in ideal conditions. Traditionally associated with love, happiness, and purity, jasmine has been used in perfumes, teas, and religious ceremonies across cultures for centuries. The powerful scent is strongest in the evening, designed to attract nocturnal pollinators. This versatile plant can be grown as a climber on trellises, in hanging baskets, or as a fragrant addition to gardens and patios.',
    shortDescription: 'Fragrant White Flowers - Perfect for Gardens',
    price: 425,
    originalPrice: 599,
    discount: 29,
    category: 'flowering-plants',
    categories: ['flowering-plants', 'air-purifying-plants'],
    image: '/imgs/landingPage/Products/6.png',
    quantity: '1 plant',
    featured: 'Popular',
    features: [
      'Highly fragrant white star-shaped flowers',
      'Blooms emerge from pink buds in late winter to spring',
      'Vigorous climbing variety that can be trained on trellises',
      'Attracts butterflies and beneficial insects',
      'Evergreen foliage provides year-round interest',
      'Can be grown indoors near a sunny window'
    ],
    specifications: {
      height: '30-45 cm (can grow 15-20 feet as mature climber)',
      pot: 'Ceramic pot with attached trellis, 16 cm diameter',
      light: 'Full sun to partial shade - needs at least 4 hours of direct sun for best flowering',
      water: 'Regular watering, keep soil slightly moist during growing season'
    },
    care: 'Jasmine plants prefer a sunny location with morning sun and afternoon shade in hot climates. Water regularly, especially during flowering periods and hot weather. Allow soil to partly dry between waterings but never completely dry out. Provide support for climbing varieties to grow on. Prune after flowering to control size and encourage bushy growth. Feed with a balanced fertilizer every 4-6 weeks during spring and summer. Protect from frost in colder regions.',
    stock: 12,
    rating: 4.7,
    reviews: 68
  },
  {
    id: '7',
    name: 'Fiddle Leaf Fig',
    description: 'The Fiddle Leaf Fig (Ficus lyrata) is a stunning indoor tree with large, violin-shaped leaves that can grow up to 18 inches long. Native to the lowland tropical rainforests of western Africa, this plant has become an interior design icon, featured in countless home décor magazines and social media posts. In its natural habitat, it can grow up to 40 feet tall, though indoor specimens typically reach 6-10 feet. The distinctive leaves are heavily veined and leathery in texture, growing in an upright pattern that creates a dramatic silhouette. While it has a reputation for being somewhat finicky, with consistent care, this architectural plant can be a magnificent focal point in your home for years.',
    shortDescription: 'Statement Plant with Dramatic Foliage',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    category: 'indoor-plants',
    categories: ['indoor-plants'],
    image: '/imgs/landingPage/Products/7.png',
    quantity: '1 plant',
    featured: 'Luxury',
    features: [
      'Dramatic violin-shaped foliage with prominent veining',
      'Interior design statement plant and Instagram favorite',
      'Needs consistent care for best results',
      'Improves air quality and adds humidity',
      'Can grow to impressive heights indoors',
      'Architectural specimen that creates visual impact'
    ],
    specifications: {
      height: '90-120 cm (can grow to 3m indoors)',
      pot: 'Premium ceramic planter, 25 cm diameter',
      light: 'Bright, filtered light - some morning direct sun beneficial',
      water: 'Once a week, on consistent schedule when top inch of soil is dry'
    },
    care: 'Fiddle Leaf Figs need bright, filtered light with some morning direct sunlight ideal but protected from harsh afternoon sun. They prefer consistent watering - once a week when the top inch of soil feels dry. They don\'t like to be moved and prefer stable conditions away from drafts, heating vents or air conditioners. Rotate quarterly for even growth. Wipe leaves regularly with a damp cloth to remove dust and increase humidity by misting or using a humidifier. Feed monthly during growing season with a diluted liquid fertilizer.',
    stock: 3,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '8',
    name: 'ZZ Plant',
    description: 'The ZZ Plant (Zamioculcas zamiifolia) is an exceptionally hardy houseplant with glossy, dark green leaves arranged on upright stems. Native to Eastern Africa, from Kenya to South Africa, it has evolved to thrive in drought conditions by storing water in its thick rhizomes beneath the soil. This plant gained popularity for its nearly indestructible nature, tolerating low light, infrequent watering, and neglect that would kill most other houseplants. Its attractive, naturally shiny leaves grow in a feather-like pattern and rarely need dusting due to their waxy coating. Perfect for offices, dorm rooms, or homes with minimal natural light, the ZZ Plant adds a touch of elegant greenery to any space with minimal effort.',
    shortDescription: 'Virtually Indestructible Low-Light Houseplant',
    price: 379,
    originalPrice: 599,
    discount: 37,
    category: 'low-maintenance-plants',
    categories: ['indoor-plants', 'low-maintenance-plants', 'low-light-plants'],
    image: '/imgs/landingPage/Products/8.png',
    quantity: '1 plant',
    featured: 'Easy Care',
    features: [
      'Extremely drought tolerant - can go months without water',
      'Thrives in low light conditions - perfect for offices',
      'Virtually pest and disease resistant',
      'Naturally glossy leaves that rarely need cleaning',
      'Air purifying - removes xylene, toluene, and benzene',
      'Slow growing - maintains its shape for long periods'
    ],
    specifications: {
      height: '40-60 cm',
      pot: 'Minimalist ceramic pot, 15 cm diameter',
      light: 'Can tolerate low light to bright indirect light',
      water: 'Allow to dry completely between waterings, every 2-4 weeks'
    },
    care: 'ZZ Plants thrive on neglect and are perfect for those who forget to water. Allow soil to dry completely between waterings - every 2-4 weeks depending on light and season. They can survive in low light but grow faster in medium indirect light. Avoid direct sunlight which can scorch the leaves. No need for high humidity or frequent fertilizing (2-3 times per year is sufficient). Toxic if ingested, so keep away from pets and children. Repot only when extremely root-bound, every 2-3 years.',
    stock: 11,
    rating: 4.9,
    reviews: 103
  },
  {
    id: '9',
    name: 'Echeveria Assortment',
    description: 'This curated collection features three different Echeveria varieties, known for their stunning rosette formations and pastel hues. Native to semi-desert regions of Central America, these succulents have adapted to store water in their thick, fleshy leaves. Each plant develops its own unique coloration based on light exposure, ranging from soft blues and purples to pinks and oranges. Echeverias are popular for their ornamental value in rock gardens, container arrangements, and even wedding bouquets. Their symmetrical growth pattern has earned them the nickname "hens and chicks" as they produce offsets around the mother plant. This low-maintenance assortment brings variety and geometric beauty to any sunny windowsill.',
    shortDescription: 'Colorful Rosette Succulent Collection',
    price: 349,
    originalPrice: 499,
    discount: 30,
    category: 'cacti-and-succulents',
    categories: ['cacti-and-succulents', 'low-maintenance-plants'],
    image: '/imgs/landingPage/Products/9.png',
    quantity: '3 plants',
    featured: 'Best Seller',
    features: [
      'Beautiful symmetrical rosette formations',
      'Variety of colors in one collection',
      'Drought tolerant - perfect for forgetful waterers',
      'Produces "pups" that can be propagated into new plants',
      'Compact size ideal for windowsills and small spaces',
      'Changes color based on sun exposure'
    ],
    specifications: {
      height: '8-12 cm diameter rosettes',
      pot: 'Terracotta pots, 8 cm diameter (set of 3)',
      light: 'Bright light with some direct sun - south or west-facing window ideal',
      water: 'Sparingly, when soil is completely dry (every 2-3 weeks)'
    },
    care: 'Echeverias need bright light with some direct sun to maintain their compact shape and vibrant colors. Water thoroughly but infrequently, allowing soil to dry completely between waterings. Use well-draining cactus/succulent soil mix. Protect from frost and avoid getting water on leaves which can cause rot. Reduce watering significantly in winter. Watch for mealy bugs in leaf joints. Easy to propagate from leaves or offsets. Ideal for indoor cultivation in bright locations.',
    stock: 15,
    rating: 4.6,
    reviews: 75
  },
  {
    id: '10',
    name: 'Basil Plant',
    description: 'Fresh Basil (Ocimum basilicum) is a versatile culinary herb with a distinctive sweet, slightly peppery flavor with notes of anise and mint. Native to tropical regions of Asia and Africa, this aromatic member of the mint family has been cultivated for over 5,000 years. Our Italian Large Leaf variety produces abundant, bright green leaves perfect for adding fresh flavor to countless dishes. Beyond its culinary uses, basil has traditional medicinal properties and is considered sacred in some cultures. Growing your own ensures you\'ll always have this essential herb on hand for cooking, garnishing, or making fresh pesto. The plant will continue producing leaves for months with proper care.',
    shortDescription: 'Fresh Culinary Herb for Kitchen Gardens',
    price: 199,
    originalPrice: 249,
    discount: 20,
    category: 'herbs-and-edibles',
    categories: ['herbs-and-edibles'],
    image: '/imgs/landingPage/Products/10.png',
    quantity: '1 plant',
    features: [
      'Fresh organic Italian Large Leaf variety',
      'Harvest leaves continuously for months',
      'Sweet, aromatic flavor essential for Italian cuisine',
      'Grow indoors on a sunny windowsill year-round',
      'Repels some garden pests when planted outdoors',
      'Flowers attract beneficial pollinators'
    ],
    specifications: {
      height: '20-30 cm at maturity',
      pot: 'Biodegradable planter, 12 cm diameter',
      light: 'Full sun - at least 6 hours of direct light daily',
      water: 'Keep soil consistently moist but not waterlogged'
    },
    care: 'Basil needs plenty of sunlight - at least 6 hours daily. Water when the surface of the soil feels dry, typically every 1-2 days in hot weather. Harvest regularly by pinching off leaves from the top to encourage bushier growth. Remove flower buds as they appear to extend the production of flavorful leaves. Feed with diluted organic fertilizer every 4-6 weeks. Protect from temperatures below 10°C (50°F). For continuous harvest, pick leaves from the top down, never removing more than 1/3 of the plant at once.',
    stock: 25,
    rating: 4.8,
    reviews: 93
  },
  {
    id: '11',
    name: 'Aloe Vera',
    description: 'Aloe Vera (Aloe barbadensis miller) is a succulent plant species with plump, spiny-edged leaves containing a clear gel known for its medicinal properties. Native to the Arabian Peninsula but now cultivated worldwide, this plant has been used for thousands of years to treat skin conditions, burns, and digestive issues. The thick, fleshy leaves grow in a rosette pattern and can reach up to 2 feet long in optimal conditions. Beyond its practical uses, Aloe Vera makes an attractive, low-maintenance houseplant that purifies the air while serving as a living first aid kit. Keep this useful plant in your kitchen or bathroom for quick access to its soothing gel for minor burns, cuts, or sunburn.',
    shortDescription: 'Medicinal Succulent for Home and Health',
    price: 279,
    originalPrice: 349,
    discount: 20,
    category: 'cacti-and-succulents',
    categories: ['cacti-and-succulents', 'low-maintenance-plants', 'herbs-and-edibles'],
    image: '/imgs/landingPage/Products/11.png',
    quantity: '1 plant',
    features: [
      'Natural remedy for minor burns, cuts, and skin irritations',
      'Drought tolerant succulent - perfect for beginners',
      'Air purifying abilities improve indoor air quality',
      'Produces offsets (pups) that can be separated into new plants',
      'Decorative and practical addition to any home',
      'Can live for decades with proper care'
    ],
    specifications: {
      height: '30-40 cm',
      pot: 'Terracotta pot, 15 cm diameter',
      light: 'Bright indirect light with some direct morning sun',
      water: 'Deeply but infrequently, when soil is completely dry (every 3 weeks)'
    },
    care: 'Aloe Vera thrives in bright, indirect light with some morning sun. Water deeply but infrequently, allowing soil to dry completely between waterings - typically every 3 weeks, less in winter. Use well-draining cactus/succulent soil mix. Protect from frost and avoid cold drafts. Repot when crowded, separating offsets to propagate new plants. To harvest gel, cut an outer leaf close to the stem, slice open, and apply the transparent gel to skin as needed. The cut leaf end will seal naturally.',
    stock: 18,
    rating: 4.8,
    reviews: 112
  },
  {
    id: '12',
    name: 'Air Plant Collection',
    description: 'Our Air Plant Collection features a curated selection of three different Tillandsia species, fascinating epiphytes that grow without soil. Native to forests, mountains, and deserts of Central and South America, these unusual plants absorb moisture and nutrients through specialized scales on their leaves called trichomes. Each variety offers unique shapes ranging from silvery tendrils to bulbous forms, creating a diverse mini-collection. Air plants produce colorful blooms once in their lifetime, after which they produce offsets called "pups." Their soil-free nature makes them incredibly versatile for creative displays - mount them on driftwood, place in terrariums, or display in decorative holders. This low-maintenance collection adds botanical interest to any space.',
    shortDescription: 'Soil-Free Plants for Creative Displays',
    price: 249,
    originalPrice: 399,
    discount: 38,
    category: 'low-maintenance-plants',
    categories: ['low-maintenance-plants', 'air-purifying-plants'],
    image: '/imgs/landingPage/Products/12.png',
    quantity: '3 plants',
    features: [
      'Grows without soil - display anywhere in your home',
      'Variety of shapes and textures in one collection',
      'Minimal care required - perfect for busy lifestyles',
      'Can be mounted, hung, or displayed in glass terrariums',
      'Produces colorful blooms once in lifecycle',
      'Multiplies by producing offsets after flowering'
    ],
    specifications: {
      height: 'Varies by species, 5-15 cm',
      container: 'No pot needed - includes display ideas guide',
      light: 'Bright indirect light, no direct sun',
      water: 'Submerge in water for 20-30 minutes every 1-2 weeks'
    },
    care: 'Air plants thrive in bright, indirect light - avoid direct sun which can burn leaves. To water, submerge completely in room temperature water for 20-30 minutes every 1-2 weeks (more often in dry environments, less in humid conditions). Shake off excess water and allow to dry completely within 4 hours to prevent rot. Mist 1-2 times weekly between soakings. Provide good air circulation. Feed monthly with air plant-specific fertilizer at 1/4 strength. After flowering, the mother plant will gradually decline while producing offsets that can be separated when they reach 1/3 the size of the parent.',
    stock: 14,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '13',
    name: 'Lavender Plant',
    description: 'Lavender (Lavandula angustifolia), also known as English Lavender, is a fragrant flowering herb with silvery-green foliage and iconic purple flower spikes. Native to the Mediterranean region, this aromatic perennial has been cultivated for centuries for its essential oils, culinary uses, and ornamental value. The distinctive scent comes from oils in both the flowers and foliage, known for promoting relaxation and sleep. Our variety produces abundant blooms that attract bees and butterflies, making it beneficial for the ecosystem. This versatile plant can be grown indoors in bright conditions or outdoors in containers or garden beds where it adds sensory appeal with its color, texture, and fragrance.',
    shortDescription: 'Fragrant Herb with Purple Blooms',
    price: 299,
    originalPrice: 399,
    discount: 25,
    category: 'herbs-and-edibles',
    categories: ['herbs-and-edibles', 'flowering-plants'],
    image: '/imgs/landingPage/Products/13.png',
    quantity: '1 plant',
    features: [
      'Aromatic purple flower spikes with calming fragrance',
      'Attracts pollinators like bees and butterflies',
      'Drought tolerant once established',
      'Deer and rabbit resistant',
      'Usable in cooking, potpourri, and home remedies',
      'Can be dried for long-lasting fragrance'
    ],
    specifications: {
      height: '30-40 cm (can reach 60 cm when flowering)',
      pot: 'Terracotta pot, 15 cm diameter',
      light: 'Full sun - at least 6 hours daily',
      water: 'Allow soil to dry between waterings, drought tolerant'
    },
    care: 'Lavender requires full sun and well-draining soil - it dislikes wet feet. Water when the top inch of soil is dry and ensure good air circulation to prevent fungal issues. Prune lightly after flowering to maintain shape and promote new growth. For indoor cultivation, place in your brightest window and consider moving outdoors during summer months. Harvest flower spikes when they\'re just beginning to open for the strongest fragrance. Feed sparingly - lavender prefers lean soil. Protect from extreme winter cold in northern regions.',
    stock: 16,
    rating: 4.7,
    reviews: 82
  },
  {
    id: '14',
    name: 'Calathea Medallion',
    description: 'The Calathea Medallion (Calathea veitchiana) is a stunning tropical plant prized for its large, circular leaves with intricate patterns. The top surface displays alternating light and dark green patterns resembling a medallion, while the undersides are a rich burgundy purple. Native to the tropical Americas, particularly Brazil, this member of the prayer plant family gets its nickname from its fascinating daily movements - the leaves rise during the day and fold upward at night as if in prayer. This natural rhythm, called nyctinasty, is controlled by a small joint between the leaf and stem. Though somewhat finicky about its care requirements, the Calathea Medallion rewards attentive plant parents with some of the most visually striking foliage in the houseplant world.',
    shortDescription: 'Stunning Patterned Prayer Plant',
    price: 599,
    originalPrice: 799,
    discount: 25,
    category: 'indoor-plants',
    categories: ['indoor-plants', 'air-purifying-plants'],
    image: '/imgs/landingPage/Products/14.png',
    quantity: '1 plant',
    features: [
      'Stunning circular leaves with intricate medallion pattern',
      'Purple undersides create dramatic contrast',
      'Leaves move throughout the day (nyctinasty)',
      'Air purifying properties improve indoor air quality',
      'Non-toxic to pets and children',
      'Adds tropical jungle feel to interiors'
    ],
    specifications: {
      height: '40-60 cm',
      pot: 'Plastic nursery pot, 15 cm diameter',
      light: 'Medium to bright indirect light, no direct sun',
      water: 'Keep soil consistently moist but not soggy'
    },
    care: 'Calathea Medallion thrives in medium to bright indirect light - never direct sun which will fade the patterns. Keep soil consistently moist but not waterlogged, using room temperature or filtered water as they are sensitive to chemicals in tap water. High humidity is essential - mist frequently, use a humidifier, or place on a pebble tray with water. Keep away from drafts, heaters, and air conditioners. Wipe leaves occasionally with a damp cloth to remove dust and maintain humidity. Feed monthly with diluted houseplant fertilizer during growing season.',
    stock: 9,
    rating: 4.5,
    reviews: 58
  },
  {
    id: '15',
    name: 'Urban Jungle Bundle',
    description: 'Transform your space into a lush urban jungle with our carefully curated starter collection featuring four easy-care plants. This bundle includes: a trailing Pothos Golden with variegated heart-shaped leaves; an architectural Snake Plant with upright structural form; a compact ZZ Plant that thrives on neglect; and a full Peperomia Obtusifolia with glossy rounded leaves. Selected specifically to thrive in average home conditions, these plants offer varying heights, textures, and growth habits while all being suitable for beginners. Together they create an instant green collection that purifies your air, enhances your décor, and boosts your wellbeing. Perfect for first-time plant parents or as a thoughtful housewarming gift.',
    shortDescription: 'Four Easy-Care Plants for Beginners',
    price: 999,
    originalPrice: 1399,
    discount: 29,
    category: 'plant-bundles',
    categories: ['plant-bundles', 'indoor-plants', 'low-maintenance-plants', 'air-purifying-plants'],
    image: '/imgs/landingPage/Products/15.png',
    quantity: '4 plants',
    featured: 'Best Value',
    features: [
      'Perfect starter collection for beginners',
      'Variety of leaf shapes, textures and growth habits',
      'All plants are low-maintenance and resilient',
      'Combined air purifying benefits',
      'Instant coordinated collection for visual impact',
      'Detailed care guide included'
    ],
    specifications: {
      contents: 'Pothos Golden, Snake Plant, ZZ Plant, Peperomia Obtusifolia',
      pots: 'Coordinated ceramic pots in natural tones, 12-15 cm diameter',
      light: 'Low to bright indirect light - versatile placement options',
      water: 'Varies by plant - detailed care card included'
    },
    care: 'Each plant in this collection has slightly different care needs, but all are selected for their adaptability and resilience. The bundle includes a detailed care guide for each plant. Generally, place in medium indirect light (though all can tolerate lower light), and water when the top 1-2 inches of soil feels dry. All plants in this collection are drought-tolerant and forgiving of occasional neglect. Perfect for busy lifestyles or those new to plant parenthood.',
    stock: 10,
    rating: 4.9,
    reviews: 96
  },
  {
    id: '16',
    name: 'String of Pearls',
    description: 'String of Pearls (Senecio rowleyanus) is a fascinating succulent vine with unusual bead-like leaves that cascade gracefully from hanging planters. Native to the arid regions of southwestern Africa, this plant has evolved its spherical leaves to minimize surface area and maximize water storage in its native desert environment. Each "pearl" contains a tiny translucent "window" that allows light to penetrate deep into the leaf tissue for photosynthesis. When happy, this plant can grow trailing stems up to 3 feet long, creating a dramatic waterfall effect. In summer, it may produce tiny white flowers with a sweet cinnamon-like scent. This conversation-starting succulent adds whimsical texture to any bright spot in your home.',
    shortDescription: 'Trailing Succulent with Bead-like Foliage',
    price: 349,
    originalPrice: 499,
    discount: 30,
    category: 'cacti-and-succulents',
    categories: ['cacti-and-succulents', 'low-maintenance-plants'],
    image: '/imgs/landingPage/Products/16.png',
    quantity: '1 plant',
    features: [
      'Distinctive bead-like succulent leaves',
      'Creates dramatic trailing cascades up to 3 feet long',
      'Drought tolerant - perfect for infrequent watering',
      'Unique textural element for shelves or hanging displays',
      'May produce small fragrant white flowers in summer',
      'Fast growing under ideal conditions'
    ],
    specifications: {
      height: 'Trails up to 90 cm (3 feet)',
      pot: 'Hanging ceramic planter, 15 cm diameter',
      light: 'Bright indirect light with some direct morning sun',
      water: 'Allow to dry out completely between waterings (every 2-3 weeks)'
    },
    care: 'String of Pearls thrives in bright light with some direct morning sun, though protect from intense afternoon sun which can scorch the pearls. Water thoroughly but infrequently, allowing soil to dry completely between waterings. Use well-draining cactus/succulent soil mix. Low humidity is preferred. Watch for shriveled pearls as a sign of underwatering. This plant is toxic if ingested, so keep away from pets and children. Propagate easily by placing stem sections on soil surface. Extremely sensitive to overwatering - when in doubt, wait another week.',
    stock: 8,
    rating: 4.7,
    reviews: 64
  },
  {
    id: '17',
    name: 'Mint Plant Collection',
    description: 'Our Mint Collection features three distinct varieties of this versatile culinary herb: classic Spearmint with its sweet flavor perfect for teas and mojitos; Peppermint with its higher menthol content ideal for desserts and digestive teas; and Chocolate Mint with its surprising cocoa undertones perfect for desserts and unique beverages. Belonging to the Lamiaceae family, mint is native to regions across Europe, Asia, and Africa. These aromatic perennials are characterized by their square stems, opposite leaves, and small flower spikes. Beyond their culinary uses, mints have traditional medicinal properties for digestion and breath freshening. This collection allows you to experiment with different mint flavors in your cooking, cocktails, and teas while adding fragrant greenery to your kitchen or garden.',
    shortDescription: 'Three Flavorful Varieties for Cooking & Teas',
    price: 299,
    originalPrice: 399,
    discount: 25,
    category: 'herbs-and-edibles',
    categories: ['herbs-and-edibles'],
    image: '/imgs/landingPage/Products/17.png',
    quantity: '3 plants',
    featured: 'Popular',
    features: [
      'Three distinct mint varieties with different flavor profiles',
      'Fresh herbs ready for harvesting immediately',
      'Continuous harvest for months with proper care',
      'Aromatic foliage that adds fragrance to your space',
      'Natural pest repellent for kitchen or garden',
      'Can be used fresh or dried for different applications'
    ],
    specifications: {
      contents: 'Spearmint, Peppermint, and Chocolate Mint',
      pots: 'Biodegradable pots, 10 cm diameter',
      light: 'Full sun to partial shade',
      water: 'Keep soil consistently moist, never dried out'
    },
    care: 'Mint thrives with regular watering - keep soil consistently moist but not waterlogged. Place in a location with at least 4-6 hours of sun daily, though they can tolerate partial shade. Harvest regularly by cutting stems just above a leaf node to encourage bushy growth. Contain plants in pots even when planting in gardens, as mint spreads aggressively through underground runners. Feed monthly with diluted organic fertilizer during growing season. For best flavor, harvest just before flowering. These varieties can be grown indoors year-round on a sunny windowsill or outdoors in containers.',
    stock: 15,
    rating: 4.8,
    reviews: 77
  },
  {
    id: '18',
    name: 'Office Plant Bundle',
    description: 'Transform your workspace with our Office Plant Bundle, thoughtfully curated to thrive in typical office environments while maximizing air-purifying benefits. This collection includes: a Snake Plant to remove toxins even in low light; a compact ZZ Plant that thrives with minimal care; a Peace Lily to add elegant white blooms; and a Pothos Golden with trailing vines perfect for shelves or elevated surfaces. These plants have been specifically selected for their ability to tolerate office conditions including fluorescent lighting, air conditioning, and occasional neglect during busy periods or weekends. Studies show that incorporating plants into work environments can reduce stress, increase productivity, and improve air quality, making this bundle an investment in wellbeing as well as aesthetics.',
    shortDescription: 'Low-Maintenance Set for Workplace Environments',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    category: 'plant-bundles',
    categories: ['plant-bundles', 'indoor-plants', 'low-maintenance-plants', 'air-purifying-plants', 'low-light-plants'],
    image: '/imgs/landingPage/Products/18.png',
    quantity: '4 plants',
    features: [
      'Specifically selected to thrive in office environments',
      'Superior air-purifying qualities for workplace wellness',
      'Tolerant of artificial lighting and air conditioning',
      'Survives weekend periods without attention',
      'Variety of heights and growth habits for visual interest',
      'Includes desktop and shelf/cabinet plants'
    ],
    specifications: {
      contents: 'Snake Plant, ZZ Plant, Peace Lily, Pothos Golden',
      pots: 'Modern minimalist ceramic pots in neutral colors, 12-15 cm diameter',
      light: 'Tolerates fluorescent lighting and low natural light',
      water: 'Varies by plant - detailed care card included'
    },
    care: 'All plants in this collection have been selected for their resilience in office conditions. Generally, water only when the top inch of soil is dry to the touch. Most offices are dry environments, so occasional misting is beneficial but not essential. Place near windows if possible, though all can tolerate artificial lighting. This collection includes plants that actually prefer to dry out between waterings, making them perfect for busy professionals or weekend absences. A detailed care guide is included.',
    stock: 7,
    rating: 4.8,
    reviews: 52
  }
];
  
// Function to get products by category slug
const getProductsByCategory = (categorySlug) => {
  if (!categorySlug) return products;
  
  return products.filter(product => 
    product.categories.includes(categorySlug) || product.category === categorySlug
  );
};

// Function to get a product by ID
const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

// Function to get related products (same category but not the same product)
const getRelatedProducts = (productId, limit = 3) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

// Function to get featured products
const getFeaturedProducts = (limit = 4) => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

// Function to get discounted products (those with highest discount percentage)
const getDiscountedProducts = (limit = 6) => {
  return [...products]
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
};

// Function to get best selling products (highest rated)
const getBestSellingProducts = (limit = 4) => {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Function to get category by slug
const getCategoryBySlug = (slug) => {
  return categories.find(category => category.slug === slug);
};

// Function to search products by name or description
const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.shortDescription.toLowerCase().includes(searchTerm)
  );
};

export {
  colors,
  categories,
  products,
  getProductsByCategory,
  getProductById,
  getRelatedProducts,
  getCategoryBySlug,
  getFeaturedProducts,
  getDiscountedProducts,
  getBestSellingProducts,
  searchProducts
};