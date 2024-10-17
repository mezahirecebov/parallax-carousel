# Parallax Carousel

A React Native carousel component with a parallax effect.

## Installation

```bash
npm install react-native-parallax-carousel
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

### Props

- **data**: `Array` of items to display in the carousel.
- **renderItem**: `Function` to render each item.
- **initialIndex**: `Number` representing the index of the initial item to display.
- **itemWidth**: `Number` representing the width of each carousel item.
- **itemSpacing**: `Number` representing the space between carousel items.

## License

This project is licensed under the MIT License.
