import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'db.json')

// Ensure the data directory and db.json exist
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true })
}

const defaultData = {
  services: [
    { id: '1', title: 'Keratin Treatment', desc: 'Transform your hair with our premium keratin treatment for smooth, frizz-free results.', price: '₹3,999/-', imageUrl: 'https://picsum.photos/seed/hair1/600/400' },
    { id: '2', title: 'Microblading', desc: 'Get perfectly shaped, natural-looking brows that frame your face beautifully.', price: '₹4,999/-', imageUrl: 'https://picsum.photos/seed/brows1/600/400' },
    { id: '3', title: 'Lash Extensions', desc: 'Wake up with flawless, voluminous lashes every single day.', price: '₹1,999/-', imageUrl: 'https://picsum.photos/seed/lashes1/600/400' },
    { id: '4', title: 'Hair Color', desc: 'Expert color formulation for a stunning, dimensional look that suits you.', price: '₹2,499/-', imageUrl: 'https://picsum.photos/seed/haircolor1/600/400' }
  ],
  courses: [
    { id: '1', title: 'NAIL COURSE', duration: '15 Days', price: '₹14,999/-', imageUrl: 'https://picsum.photos/seed/nail/400/300' },
    { id: '2', title: 'EYELASH COURSE', duration: '7 Days', price: '₹9,999/-', imageUrl: 'https://picsum.photos/seed/lash/400/300' }
  ],
  testimonials: [
    { id: '1', name: 'Neha Sharma', review: 'The best keratin treatment I\'ve ever had! My hair feels amazing and looks so healthy.', rating: 5, imageUrl: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', name: 'Pooja Verma', review: 'Microblading done perfectly! My brows look so natural. Highly recommended.', rating: 5, imageUrl: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', name: 'Priya Mehta', review: 'Lash extensions are just perfect. The team is so professional and friendly.', rating: 5, imageUrl: 'https://i.pravatar.cc/150?u=3' },
    { id: '4', name: 'Ankita Singh', review: 'Joined the nail course and it changed my career! Best academy in the city.', rating: 5, imageUrl: 'https://i.pravatar.cc/150?u=4' }
  ],
  transformations: [
    { id: '1', category: 'HAIR', beforeImage: 'https://picsum.photos/seed/hairbefore/400/400', afterImage: 'https://picsum.photos/seed/hairafter/400/400' },
    { id: '2', category: 'BROWS', beforeImage: 'https://picsum.photos/seed/browbefore/400/400', afterImage: 'https://picsum.photos/seed/browafter/400/400' },
    { id: '3', category: 'LIPS', beforeImage: 'https://picsum.photos/seed/lipbefore/400/400', afterImage: 'https://picsum.photos/seed/lipafter/400/400' }
  ]
}

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2))
}

export function getDbData() {
  try {
    const fileContents = fs.readFileSync(dbPath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error reading database:", error)
    return defaultData
  }
}

export function saveDbData(data: any) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    console.error("Error writing database:", error)
    return false
  }
}
