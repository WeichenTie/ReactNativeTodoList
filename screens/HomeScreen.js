import {
  Stack,
  YStack,
  Button,
  Image,
  View,
  XStack,
  ScrollView,
  ToggleGroup,
} from "tamagui";
import { Ionicons } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import {
  H1,
  Label,
  SmallText,
  Switch,
  Text,
  TextButton,
} from "../components/atoms";
import { Card, Importance } from "../components/Card";
import { Sheet } from "../components/Sheet";

export default function HomeScreen({ navigation, route, store }) {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState("date");

  function sort(a, b) {
    if (a.complete && !b.complete) return 1;
    else if (!a.complete && b.complete) return -1;
    // Sort by status (string)
    if (group === "importance") {
      if (a.importance < b.importance) return -1;
      else if (a.importance > b.importance) return 1;
    }

    // If status is the same, sort by date (string)
    if (a.dueDate && !b.dueDate) return -1;
    else if (!a.dueDate && b.dueDate) return 1;
    else if (new Date(a.dueDate) < new Date(b.dueDate)) return -1;
    else if (new Date(a.dueDate) > new Date(b.dueDate)) return 1;

    if (group === "date") {
      if (a.importance < b.importance) return -1;
      else if (a.importance > b.importance) return 1;
    }

    // If status and date are the same, sort by name (string)
    else if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;

    // If all criteria are the same, leave the order unchanged
    return 0;
  }

  async function onDelete(id) {
    await store.removeItem(id);
  }

  function onEdit(id) {
    navigation.navigate("Edit", { id });
  }

  return (
    <>
      <Stack flex={1} backgroundColor={"#FCFCFE"}>
        <XStack alignItems="center" paddingHorizontal={24} marginTop={64}>
          <H1>Need to do</H1>
          <TextButton
            marginLeft="auto"
            unstyled
            onPress={() => setIsEditing(!isEditing)}
          >
            {!isEditing ? "Modify" : "Cancel"}
          </TextButton>
        </XStack>
        <ToggleGroup
          type="single"
          onValueChange={setGroup}
          value={group}
          disableDeactivation
          paddingHorizontal={24}
        >
          <ToggleGroup.Item
            backgroundColor={"royalblue"}
            style={{ opacity: group === "date" ? 1 : 0.6 }}
            pressStyle={{ backgroundColor: "royalblue", opacity: 0.6 }}
            value={"date"}
            flex={1}
          >
            <SmallText fontWeight={"bold"} color={"white"}>
              Sort by date
            </SmallText>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            backgroundColor={"royalblue"}
            style={{ opacity: group === "importance" ? 1 : 0.6 }}
            pressStyle={{ backgroundColor: "royalblue", opacity: 0.6 }}
            value={"importance"}
            flex={1}
          >
            <SmallText fontWeight={"bold"} color={"white"}>
              Sort by importance
            </SmallText>
          </ToggleGroup.Item>
        </ToggleGroup>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100, paddingTop: 16 }}
        >
          <YStack gap={8} paddingHorizontal={24}>
            {store.items
              .sort((a, b) => sort(a.value, b.value))
              .map(({ id, value }) => {
                return (
                  <Card
                    isEditing={isEditing}
                    data={value}
                    onPress={() => setOpen({ id, value })}
                    onDelete={() => onDelete(id)}
                    onEdit={() => onEdit(id)}
                    key={id}
                  />
                );
              })}
          </YStack>
        </ScrollView>

        <Button
          size="$6"
          position="absolute"
          bottom="$5"
          left="50%"
          transform={[{ translateX: -32 }]}
          circular
          margin={0}
          backgroundColor="royalblue"
          icon={<Ionicons color={"white"} size={48} name="add" />}
          onPress={() => {
            navigation.navigate("Create");
          }}
        ></Button>
      </Stack>
      <Sheet open={open} onOpenChange={setOpen}>
        <YStack gap={16}>
          <YStack>
            <H1>{open.value?.name}</H1>
            <XStack alignItems="center">
              <Stack
                marginRight={8}
                paddingVertical={4}
                paddingHorizontal={8}
                borderRadius={10000}
                backgroundColor={Importance[open.value?.importance] ?? "white"}
              >
                <SmallText color={"white"} fontWeight="bold">
                  {open.value?.importance}
                </SmallText>
              </Stack>
              {open.value?.dueDate && (
                <Stack
                  paddingVertical={4}
                  paddingHorizontal={8}
                  borderRadius={10000}
                  backgroundColor={"lightslategray"}
                >
                  <SmallText color={"white"} fontWeight="bold">
                    {open.value?.dueDate.split("-").reverse().join("/")}
                  </SmallText>
                </Stack>
              )}
            </XStack>
            <XStack marginVertical={16}>
              <Label marginRight={"auto"} fontWeight={"bold"}>
                Completed
              </Label>
              <Switch
                checked={open.value?.complete}
                onCheckedChange={() => {
                  const complete = open.value?.complete;
                  store.editItem(open.id, { complete: !complete });
                  setOpen((v) => {
                    return {
                      id: v.id,
                      value: {
                        ...v.value,
                        complete: !complete,
                      },
                    };
                  });
                }}
              >
                <Switch.Thumb
                  animation="bouncy"
                  backgroundColor="white"
                ></Switch.Thumb>
              </Switch>
            </XStack>
          </YStack>
          {open.value?.image && (
            <Image
              aspectRatio={1}
              borderRadius={12}
              backgroundColor={"goldenrod"}
              source={{ uri: open.value.image }}
            ></Image>
          )}
          <Text>{open.value?.description}</Text>
        </YStack>
      </Sheet>
    </>
  );
}
