# 🚀 Quick Start Guide

Get your anniversary app up and running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the `anniversary-app` folder and run:

```bash
npm install
```

This will download all necessary packages. Go grab a coffee! ☕

## Step 2: Start the Development Server (30 seconds)

```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Press `Ctrl/Cmd + Click` on the Local link to open in browser!

## Step 3: First Look (1 minute)

The app will open with placeholder content. You'll see:

🏠 **Home Page**: 
- Scroll down to see characters run toward each other
- Watch them hug at the bottom!

📅 **Calendar Tab** (bottom nav):
- See February 2026 calendar
- Special dates are marked

💌 **Letter Tab**:
- Click "Begin Experience" to start music
- Read the love letter

📸 **Journey Tab**:
- Click any photo card to flip it
- See memories on the back

## Step 4: Start Customizing (Ongoing)

### Priority 1 - The Letter (5 minutes)
Make it personal first!

1. Open `src/pages/Letter.jsx`
2. Find line 92 (the letter content)
3. Replace with your own words
4. Save - it auto-refreshes!

### Priority 2 - Add Your Photos (10 minutes)

1. Create folder: `public/assets/images/`
2. Add 6 photos named: `year1.jpg` to `year6.jpg`
3. Open `src/pages/Journey.jsx`
4. Line 12: Update `imageUrl` paths:

```javascript
imageUrl: '/assets/images/year1.jpg',  // Change this!
```

5. Save and check the Journey page!

### Priority 3 - Special Dates (5 minutes)

1. Open `src/pages/Calendar.jsx`
2. Find line 12 (specialDates object)
3. Add your important dates:

```javascript
'2026-03-20': {
  label: 'Her Birthday 🎂',
  type: 'special',
  description: 'Best day of the year!'
},
```

### Priority 4 - Add Music (5 minutes)

1. Find a romantic song (MP3 format)
2. Put it in `public/assets/audio/`
3. Open `src/pages/Letter.jsx`
4. Line 25: Update the source:

```javascript
src="/assets/audio/your-song.mp3"
```

## Common First-Time Questions

### "How do I stop the development server?"
Press `Ctrl + C` in the terminal

### "The page isn't updating after I change code!"
Hard refresh: `Ctrl/Cmd + Shift + R`

### "I made a mistake and broke something!"
Just reload the page. Your changes are auto-saved.

### "Where do I edit the colors?"
`tailwind.config.js` - Look for the `romantic` colors section

### "How do I add more than 6 year cards?"
In `src/pages/Journey.jsx`, add more objects to the `memories` array (line 12)

## Next Steps

Once you're happy with the basic customization:

1. **Read the full README.md** for advanced customization
2. **Check ASSETS-GUIDE.md** for image optimization tips
3. **Test on mobile** - open on your phone to see how it looks
4. **Build for production** when ready to deploy:

```bash
npm run build
```

## Getting Help

### Something Not Working?

1. Check the browser console (F12) for errors
2. Make sure file paths are correct (case-sensitive!)
3. Verify all images are in the right folders
4. Read the Troubleshooting section in README.md

### Browser Console Basics:
- Press F12 (or Ctrl/Cmd + Shift + I)
- Click "Console" tab
- Look for red error messages
- They'll tell you what's wrong!

## Development Tips

### Best Workflow:
1. Make one change at a time
2. Check if it works
3. If broken, undo (Ctrl/Cmd + Z)
4. Commit working versions to Git

### Hot Reload:
The page automatically refreshes when you save changes. If it doesn't:
- Check terminal for errors
- Restart dev server (Ctrl+C, then `npm run dev`)

### Preview Before Sharing:
Always build and preview production version:
```bash
npm run build
npm run preview
```

This shows how it'll look when deployed!

## Ready to Deploy?

When everything looks perfect:

### Option 1: Vercel (Easiest - Free)
```bash
npm install -g vercel
vercel
```
Follow prompts - done in 2 minutes!

### Option 2: Netlify
1. Run `npm run build`
2. Go to netlify.com
3. Drag the `dist` folder to deploy
4. Get your link!

### Option 3: Share Locally (Testing Only)
```bash
npm run preview
```
Then use ngrok or similar to create temporary public URL

## Timeline Suggestion

**Week Before Anniversary:**
- Get all photos ready
- Write the letter
- Test everything

**3 Days Before:**
- Deploy to hosting
- Test on multiple devices
- Share link privately with a friend to verify

**Anniversary Day:**
- Send the link in a sweet message
- Be available if she has questions
- Enjoy the moment! 💕

---

## Quick Command Reference

```bash
# Start development
npm run dev

# Stop development
Ctrl + C

# Install packages
npm install

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Check for errors
# (Look at terminal output)
```

## That's It!

You're ready to create something amazing. Take your time, make it personal, and most importantly—have fun with it!

Remember: She'll love it because YOU made it for HER. ❤️

Questions? Check the main README.md for detailed guides!
