import {
  Card as TamaCard,
  View,
  XStack,
  YStack,
  Image,
  Button,
  Stack,
} from "tamagui";
import { SmallText, H2 } from "./atoms";
import { Ionicons } from "@expo/vector-icons";

const blank = () => {};

export const Importance = {
  Routine: "#0ABE1B",
  Moderate: "#FF9500",
  Critical: "#FF0531",
};

export function Card({
  id,
  data,
  isEditing,
  onPress = blank,
  onDelete = blank,
  onEdit = blank,
}) {
  return (
    <TamaCard
      onPress={onPress}
      paddingHorizontal={16}
      paddingVertical={12}
      backgroundColor={"white"}
      elevation={16}
      flexDirection="row"
      gap={8}
      pressStyle={{
        transform: [{ scale: 0.98 }],
      }}
    >
      <YStack flex={1}>
        <View
          marginRight="auto"
          borderRadius={100000}
          paddingVertical={4}
          paddingHorizontal={8}
          backgroundColor={Importance[data.importance]}
        >
          <SmallText color={"white"} fontWeight="bold">
            {data.importance}
          </SmallText>
        </View>
        <H2
          textOverflow="ellipsis"
          textDecorationLine={data.complete ? "line-through" : "none"}
          textDecorationStyle="double"
          numberOfLines={1}
        >
          {data.name}
        </H2>
        {data.dueDate && (
          <SmallText>
            {new Date(data.dueDate).toLocaleDateString("en-GB")}
          </SmallText>
        )}
      </YStack>
      <XStack height={64} marginLeft="auto">
        {!isEditing ? (
          data.image && (
            <Image
              borderRadius={12}
              aspectRatio={1}
              height="100%"
              src={{ uri: data.image }}
            ></Image>
          )
        ) : (
          <XStack gap={8} justifyContent="center" alignItems="center">
            <Button paddingHorizontal={12} onPress={onEdit}>
              <Ionicons name="ios-pencil" color="#111827" size={16}></Ionicons>
            </Button>
            <Button paddingHorizontal={12} onPress={onDelete}>
              <Ionicons
                name="ios-trash-bin"
                color="#111827"
                size={16}
              ></Ionicons>
            </Button>
          </XStack>
        )}
      </XStack>
    </TamaCard>
  );
}
