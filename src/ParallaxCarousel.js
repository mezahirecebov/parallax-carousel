import React, { useRef, useEffect } from "react";
import { View, Dimensions, StyleSheet, Animated } from "react-native";

const { width } = Dimensions.get("window");

const ParallaxCarousel = ({
  data,
  renderItem,
  initialIndex = 0,
  onSelect,
  itemWidth = width * 0.5,
  itemSpacing = (width - width * 0.5) / 2,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: initialIndex * itemWidth - itemSpacing,
        animated: false,
      });
    }
  }, [initialIndex, itemWidth, itemSpacing]);

  const handleScrollEnd = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / itemWidth);

    if (onSelect) {
      onSelect(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScrollEnd}
        contentContainerStyle={{ paddingHorizontal: itemSpacing }}
      >
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * itemWidth,
            index * itemWidth,
            (index + 1) * itemWidth,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp",
          });

          return (
            <View key={index} style={{ width: itemWidth }}>
              <Animated.View
                style={[
                  styles.itemContainer,
                  { transform: [{ scale }], opacity },
                ]}
              >
                {renderItem({ item, index })}
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default ParallaxCarousel;
