import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, View } from "react-native";
import tw from "twrnc";

interface FoldableProps {
  title: string;
  height: number;
  isFirstOpen?: boolean;
  children: React.ReactNode;
}

const Foldable: React.FC<FoldableProps> = ({
  title,
  height,
  children,
  isFirstOpen,
}) => {
  const [isOpen, setIsOpen] = useState(isFirstOpen);
  const animationHeight = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animationHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(rotation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(scale, {
      toValue: isOpen ? 1.1 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const animatedHeight = animationHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const animatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedScale = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  });

  return (
    <View style={tw`items-center pt-4`}>
      <Pressable
        style={tw`flex-row items-center pb-4`}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Animated.View style={{ transform: [{ rotate: animatedRotation }] }}>
          <Ionicons name={"chevron-down-outline"} size={20} color="black" />
        </Animated.View>
        <Animated.Text
          style={[
            tw`px-4 text-xl font-bold`,
            { transform: [{ scale: animatedScale }] },
          ]}
        >
          {title}
        </Animated.Text>
        <Animated.View style={{ transform: [{ rotate: animatedRotation }] }}>
          <Ionicons name={"chevron-down-outline"} size={20} color="black" />
        </Animated.View>
      </Pressable>
      <Animated.View
        style={[
          tw`items-center w-full overflow-hidden`,
          { height: animatedHeight },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default Foldable;
