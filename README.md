# Parallax Carousel

A React Native carousel component with a parallax effect.

## Installation

```bash
npm install parallax-carousel
```

## Usage

```javascript
import ParallaxCarousel from "parallax-carousel";

<ParallaxCarousel
  data={data}
  renderItem={renderItem}
  initialIndex={0}
  itemWidth={300}
  itemSpacing={30}
/>;
```

## Props

data: Array of items to display in the carousel.
renderItem: Function to render each item.
initialIndex: Index of the initial item to display.
itemWidth: Width of each carousel item.
itemSpacing: Space between carousel items.

MIT License
