import { Stack, YStack, XStack, Form, ScrollView } from "tamagui";

import {
  H1,
  TextButton,
  Button,
  Label,
  Input,
  TextArea,
  FontFamily,
  Switch,
} from "../components/atoms";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import DatePicker from "../components/Calendar";
import { ImagePicker } from "../components/ImagePicker";
import { ImportanceSelector } from "../components/ImportanceSelector";

export default function CreateAndEditScreen({
  navigation,
  back,
  store,
  route,
}) {
  const [name, setName] = useState("New Reminder");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("Routine");

  const [dateButtonActive, setDateButtonActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [imageButtonActive, setImageButtonActive] = useState(false);
  const [file, setFile] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const data = store.getItemSync(route?.params?.id)?.value;
      setName(data?.name ?? "New Reminder");
      setDescription(data?.description ?? "");
      setImportance(data?.importance ?? "Routine");
      setDateButtonActive(!!data?.dueDate);
      setSelectedDate(data?.dueDate ?? new Date().toISOString().split("T")[0]);
      setImageButtonActive(!!data?.image);
      setFile(data?.image);
      setIsEditing(!!data);
    }, [])
  );
  async function handleFormSubmit() {
    const data = {
      name: name,
      description: description,
      importance: importance,
      dueDate: dateButtonActive ? selectedDate : null,
      image: imageButtonActive ? file : null,
      complete: false,
    };

    isEditing
      ? await store.editItem(route?.params?.id, data)
      : await store.addItem(data);

    if (back) {
      navigation.goBack();
    } else {
      navigation.navigate("Home");
    }
  }
  function getMarkedDates() {
    const ImportanceColors = {
      Routine: "#0ABE1B",
      Moderate: "#FF9500",
      Critical: "#FF0531",
    };

    const markings = {
      [selectedDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "royalblue",
      },
    };
    store.items.forEach(({ id, value }) => {
      if (value.complete) return;
      else if (!value.dueDate) return;
      if (!markings[value.dueDate]) {
        markings[value.dueDate] = {
          dots: [{ key: id, color: ImportanceColors[value.importance] }],
        };
      }
    });
    return markings;
  }
  return (
    <KeyboardAvoidingView
      style={{ minHeight: "100%", backgroundColor: "#FCFCFE" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Stack paddingHorizontal={16} marginTop={42}>
        <TextButton
          padding={0}
          onPress={
            back ? () => navigation.goBack() : () => navigation.navigate("Home")
          }
        >
          Back
        </TextButton>
      </Stack>
      <ScrollView contentContainerStyle={{ minHeight: "80%" }}>
        <Form
          paddingHorizontal={16}
          marginTop={16}
          gap={16}
          backgroundColor={"#FCFCFE"}
          flex={1}
          onSubmit={handleFormSubmit}
        >
          <H1>{isEditing ? "Edit Item" : "Create Item"}</H1>
          <Input onChangeText={setName} value={name}></Input>
          <TextArea
            placeholder="Description"
            textAlignVertical="top"
            onChangeText={setDescription}
            value={description}
          ></TextArea>
          <ImportanceSelector
            value={importance}
            onValueChange={setImportance}
          ></ImportanceSelector>
          <YStack gap={8} marginBottom={64}>
            <XStack>
              <Label htmlFor="date" marginRight="auto">
                Set due date
              </Label>
              <Switch
                id="date"
                onCheckedChange={setDateButtonActive}
                checked={dateButtonActive}
              >
                <Switch.Thumb animation="bouncy" backgroundColor="white" />
              </Switch>
            </XStack>
            {dateButtonActive && (
              <Stack
                animation="quick"
                enterStyle={{
                  opacity: 0,
                  y: 20,
                }}
              >
                <DatePicker
                  markingType={"multi-dot"}
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                  }}
                  minDate={new Date().toUTCString()}
                  markedDates={getMarkedDates()}
                ></DatePicker>
              </Stack>
            )}

            {/* ------------ */}
            <XStack marginTop={8}>
              <Label htmlFor="image" marginRight="auto">
                Set image
              </Label>
              <Switch
                id="image"
                onCheckedChange={setImageButtonActive}
                checked={imageButtonActive}
              >
                <Switch.Thumb animation="bouncy" backgroundColor="white" />
              </Switch>
            </XStack>
            {imageButtonActive && (
              <ImagePicker file={file} setFile={setFile}></ImagePicker>
            )}
          </YStack>
          <Form.Trigger asChild>
            <Button
              marginTop="auto"
              marginBottom={128}
              backgroundColor={"royalblue"}
              fontFamily={FontFamily}
              pressStyle={{ backgroundColor: "royalblue", opacity: 0.9 }}
              color={"white"}
            >
              {isEditing ? "Save" : "Create"}
            </Button>
          </Form.Trigger>
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
