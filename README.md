# LED Reaction Timing Game

## Overview
This project is an interactive reaction-based game developed using JavaScript in Adafruit MakeCode. The goal is to press a button at the correct time when a moving LED aligns with a target LED.

## Features
- Real-time LED animation
- Event-driven input handling
- Dynamic difficulty (increasing speed)
- Score tracking system
- Game-over and restart functionality

## How It Works
A red LED rotates around a ring of 10 LEDs. The player must press Button A when the red LED aligns with a fixed green LED (position 7).

- Correct input:
  - Score increases
  - Game speed increases
- Incorrect input:
  - Game ends
  - Player can restart

## Technical Concepts
- Event-driven programming
- Loops and conditionals
- State management
- Timing control using delay

## Challenges & Solutions
**Problem:** Game speed reached zero and caused freezing  
**Solution:** Implemented a minimum speed limit  

## Future Improvements
- Add multiple difficulty levels
- Randomize target position
