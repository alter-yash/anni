# 💕 Anniversary Web App - 6 Years of Love

A beautiful, interactive multi-page web application celebrating 6 years of love. Built with React, Framer Motion, and Tailwind CSS with a "Soft Arcade" aesthetic—pixel-art graphics meets romantic pastel colors.

## 🎨 Features

### 🏠 Home Page - "Run to Hug" Animation
- Scroll-based animation where two pixel characters (bride in red lehenga, groom in white sherwani) run toward each other
- As you scroll, they get closer and eventually hug
- Floating background elements (photos, love quotes, hearts) with parallax effect
- Smooth, cinematic experience

### 📅 Calendar Page - Interactive Timeline
- Full calendar view of February 2026
- Past days marked with dark pink (dimmed)
- Present day (Feb 15) highlighted with pulsing animation
- Special dates marked with hand-drawn red circles (irregular border-radius for authentic look)
- Hover tooltips showing event details
- Legend explaining different date types

### 💌 Letter Page - Audio Experience
- Long-form love letter in elegant typography
- Background music player (auto-plays romantic lo-fi track)
- Paper-like texture with soft pink shadows
- Clean, readable layout perfect for intimate reading
- Music controls (play/pause/mute) in top-right corner

### 📸 Journey Page - Instax Flip Gallery
- Grid of Polaroid-style photo cards
- Each card represents one year (6 cards total)
- Click to flip: front shows photo with caption, back shows handwritten-style memory
- 3D flip animation using CSS transform
- Hover effects and smooth transitions

### 🧭 Floating Navigation Dock
- Bottom-center floating menu
- Navigate between Home, Calendar, Letter, and Journey
- Active page indicator
- Smooth animations and hover effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd anniversary-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
anniversary-app/
├── src/
│   ├── components/
│   │   └── Navigation.jsx          # Floating navigation dock
│   ├── pages/
│   │   ├── Home.jsx                # Scroll animation page
│   │   ├── Calendar.jsx            # Timeline/calendar page
│   │   ├── Letter.jsx              # Love letter with audio
│   │   └── Journey.jsx             # Flip card photo gallery
│   ├── assets/
│   │   ├── images/                 # Your photos go here
│   │   └── audio/                  # Your music files go here
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles + custom animations
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization Guide

### 1. Adding Your Photos

#### For the Home Page Floating Photos:
Replace placeholder emojis in `Home.jsx` (line ~45):

```javascript
// Before:
{ type: 'photo', top: '10%', delay: 0 }

// After: Add imageUrl property
{ type: 'photo', top: '10%', delay: 0, imageUrl: '/assets/images/photo1.jpg' }
```

Then update the rendering code (around line 75):

```javascript
{element.type === 'photo' && (
  <div className="inline-block w-32 h-32 md:w-40 md:h-40 bg-white p-2 shadow-lg transform rotate-3">
    <img 
      src={element.imageUrl} 
      alt="Memory" 
      className="w-full h-full object-cover"
    />
  </div>
)}
```

#### For the Journey Page Cards:
Update the `memories` array in `Journey.jsx` (starting around line 12):

```javascript
{
  id: 1,
  year: 'Year 1',
  caption: 'Where It All Began',
  imageUrl: '/assets/images/year1.jpg',  // ← Change this!
  backText: 'Your custom memory text here...'
}
```

### 2. Adding Custom Characters (Pixel Sprites)

Replace the placeholder character divs in `Home.jsx`:

```javascript
// Find these sections and replace with your pixel art images:

// Bride sprite (around line 117)
<img 
  src="/assets/images/bride-sprite.png" 
  alt="Bride" 
  className="w-40 h-56"
/>

// Groom sprite (around line 142)
<img 
  src="/assets/images/groom-sprite.png" 
  alt="Groom" 
  className="w-40 h-56"
/>

// Hugging sprite (around line 167)
<img 
  src="/assets/images/hug-sprite.png" 
  alt="Hugging" 
  className="w-56 h-64"
/>
```

**Creating Pixel Sprites:**
- Use tools like Piskel, Aseprite, or Pixilart
- Recommended size: 64x96 pixels (or larger multiples)
- Export as PNG with transparent background
- Save in `/public/assets/images/`

### 3. Changing Background Music

Update the audio source in `Letter.jsx` (around line 25):

```javascript
<audio
  ref={audioRef}
  src="/assets/audio/your-romantic-song.mp3"  // ← Change this!
  loop
/>
```

**Music Recommendations:**
- Lo-fi romantic instrumentals
- Acoustic love songs
- Classical piano pieces
- Your special song together!

### 4. Customizing Special Dates

Edit the `specialDates` object in `Calendar.jsx` (around line 12):

```javascript
const specialDates = {
  '2026-02-15': { 
    label: 'Our 6th Anniversary! 💕', 
    type: 'anniversary',
    description: 'Six magical years together'
  },
  '2026-03-20': {  // Add your own dates!
    label: 'Your Birthday 🎂',
    type: 'special',
    description: 'Celebrating you!'
  },
  // Add more dates...
};
```

### 5. Personalizing the Love Letter

Edit the letter content in `Letter.jsx` (starting around line 92):

- Update the greeting
- Rewrite the body paragraphs with your own words
- Add personal anecdotes and inside jokes
- Customize the P.S. section
- Change the date at the top

**Pro Tips for Writing:**
- Be authentic and specific
- Include memorable moments
- Reference inside jokes
- Express gratitude
- Look toward the future

### 6. Updating Colors

The color palette is defined in `tailwind.config.js`. To change the theme:

```javascript
colors: {
  'romantic': {
    cream: '#FFF5F5',    // Background
    blush: '#FFE4E6',    // Light accents
    rose: '#FFB3BA',     // Medium pink
    coral: '#FFAAA5',    // Warm pink
    pink: '#FF8B94',     // Primary pink
    hot: '#FF6B9D',      // Accent pink
  }
}
```

**Try These Themes:**
- **Purple Romance**: Replace pinks with purples (#E9D5FF, #C084FC, #A855F7)
- **Ocean Love**: Use blues (#DBEAFE, #93C5FD, #3B82F6)
- **Sunset**: Orange to pink gradient (#FECDD3, #FB923C, #F97316)

### 7. Adjusting Animations

Animation timings can be tweaked in the component files:

```javascript
// Slower scroll effect (Home.jsx)
transition={{ duration: 1 }}  // Increase number

// Faster card flip (Journey.jsx)
transition={{ duration: 0.8 }}  // Decrease number

// Change floating speed (Home.jsx)
transition={{ duration: 20 }}  // Animation duration for floating elements
```

## 📱 Mobile Responsiveness

The app is fully responsive and works beautifully on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

Test on different devices during development!

## 🎯 Deployment Options

### Vercel (Recommended - Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

1. Connect your GitHub repo
2. Vercel auto-detects Vite
3. Deploy in 2 clicks!

### Netlify

```bash
# Build
npm run build

# Deploy dist folder via Netlify drag-and-drop
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🐛 Troubleshooting

### Audio Not Playing
- Modern browsers block autoplay
- Users must interact with page first (click "Begin Experience" button)
- Check audio file format (MP3 recommended)

### Images Not Loading
- Ensure images are in `/public/assets/images/`
- Use relative paths: `/assets/images/photo.jpg`
- Check file names match exactly (case-sensitive)

### Animations Choppy
- Test in production build (dev mode can be slower)
- Reduce number of floating elements
- Optimize image sizes

### Routing Issues (404 on Refresh)
For deployment, add `_redirects` file (Netlify) or `vercel.json` (Vercel):

**Netlify - create `public/_redirects`:**
```
/*  /index.html  200
```

**Vercel - create `vercel.json`:**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 💡 Pro Tips

1. **Test the Full Experience:**
   - Go through each page in order
   - Test on mobile device
   - Try all interactions (flips, hover effects)
   - Listen to audio quality

2. **Optimize Images:**
   - Use WebP format for smaller file sizes
   - Compress images (TinyPNG, Squoosh)
   - Recommended resolution: 1200x1200px for photos

3. **Add Personal Touches:**
   - Update quotes with your own
   - Add your favorite emojis
   - Include inside jokes in the back of cards
   - Make the letter truly personal

4. **Performance:**
   - Lazy load images on Journey page
   - Preload audio file
   - Use SVG for icons when possible

## 🎁 Launch Day Suggestions

### Before Sending:
- [ ] Replace all placeholder images
- [ ] Update all text to be personal
- [ ] Test on multiple devices
- [ ] Check all special dates are correct
- [ ] Ensure music plays properly
- [ ] Test all page transitions

### During the Reveal:
- Be there when she opens it
- Make sure she has sound on
- Watch her go through each page
- Capture her reaction (if appropriate)
- Have tissues ready (for happy tears!)

## 📞 Support & Updates

For questions or issues:
- Check the troubleshooting section above
- Review the component files for inline comments
- Test in browser console for errors

## ❤️ Final Words

This app is a labor of love, built to celebrate your beautiful relationship. Take your time customizing it, infuse it with your personalities, and most importantly—make it authentically yours.

Six years is an incredible milestone. Here's to many more! 🥂💕

---

**Built with:**
- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 10
- React Router 6

*Made with ❤️ for celebrating love*
