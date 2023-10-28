import { Image, Stack } from "tamagui";
import * as ImagePicker_ from "expo-image-picker";
import { Button } from "./atoms";

export function ImagePicker({ setFile, file }) {
  async function pickImage() {
    const { status } = await ImagePicker_.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
                   roll permission to upload images.`
      );
    } else {
      const result = await ImagePicker_.launchImageLibraryAsync();
      console.log(result);
      if (!result.canceled) {
        setFile(result.assets[0].uri);
      }
    }
  }
  return (
    <Stack
      gap={16}
      animation="quick"
      enterStyle={{
        opacity: 0,
        y: 20,
      }}
    >
      {file && (
        <Stack
          borderWidth={1}
          borderColor={"lightgrey"}
          borderRadius={16}
          overflow="hidden"
        >
          <Image source={{ uri: file }} width="100%" aspectRatio={1} />
        </Stack>
      )}
      <Button onPress={!file ? pickImage : () => setFile(null)}>
        {!file ? "Choose Image" : "Delete Image"}
      </Button>
    </Stack>
  );
}
