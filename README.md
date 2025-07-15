# Drum Machine App

A React-based drum machine application that replicates the functionality of the FreeCodeCamp drum machine project. This app allows users to play drum sounds by clicking on drum pads or pressing corresponding keyboard keys.

## Features

- **9 Drum Pads**: Each pad corresponds to a specific drum sound
- **Keyboard Controls**: Press Q, W, E, A, S, D, Z, X, C to trigger drum sounds
- **Visual Display**: Shows the name of the currently playing sound
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Sleek, professional design with animations and visual feedback

## Drum Sounds

The app includes the following drum sounds:
- **Q**: Heater-1
- **W**: Heater-2  
- **E**: Heater-3
- **A**: Heater-4
- **S**: Clap
- **D**: Open-HH
- **Z**: Kick-n'-Hat
- **X**: Kick
- **C**: Closed-HH

## User Stories Implemented

✅ **User Story #1**: Outer container with id="drum-machine" containing all elements
✅ **User Story #2**: Element with id="display" within the drum machine
✅ **User Story #3**: 9 clickable drum pad elements with class "drum-pad" and unique IDs
✅ **User Story #4**: HTML5 audio elements within each drum pad with class "clip"
✅ **User Story #5**: Audio clips trigger when drum pads are clicked
✅ **User Story #6**: Audio clips trigger when corresponding keyboard keys are pressed
✅ **User Story #7**: Display shows the name of the triggered audio clip

## Installation and Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Open in Browser**:
   The app will open automatically at `http://localhost:3000`

## Usage

- **Click** on any drum pad to play the corresponding sound
- **Press** the keyboard keys (Q, W, E, A, S, D, Z, X, C) to trigger sounds
- The display will show the name of the currently playing sound
- Each sound has a unique identifier that appears in the display

## Technologies Used

- **React 18**: Frontend framework
- **CSS3**: Styling with modern features like Grid, Flexbox, and animations
- **HTML5 Audio API**: For playing drum sounds
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
src/
├── DrumMachine.js      # Main drum machine component
├── DrumMachine.css     # Styles for the drum machine
├── index.js           # React app entry point
└── index.css          # Global styles

public/
└── index.html         # HTML template

package.json           # Project dependencies and scripts
README.md             # Project documentation
```

## Audio Sources

All audio files are sourced from FreeCodeCamp's drum machine project and are hosted on AWS S3:
- Heater-1, Heater-2, Heater-3, Heater-4
- Clap
- Open-HH, Closed-HH
- Kick-n'-Hat
- Kick

## Browser Compatibility

This app works on all modern browsers that support:
- React 18
- CSS Grid and Flexbox
- HTML5 Audio API
- ES6+ JavaScript features

## Development

To run tests:
```bash
npm test
```

To build for production:
```bash
npm run build
```

## License

This project is created for educational purposes as part of the FreeCodeCamp curriculum. 