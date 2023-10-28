import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { FontFamily } from "./atoms";
import { Stack } from "tamagui";

export default function DatePicker({ ...props }) {
  return (
    <Calendar
      theme={{
        textDayFontFamily: FontFamily,
        textMonthFontFamily: FontFamily,
        textDayHeaderFontFamily: FontFamily,
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        dayTextAtIndex6: {
          color: "blue",
        },
      }}
      style={{
        borderColor: "#D8D8DC",
        borderWidth: 1,
        borderRadius: 12,
      }}
      arrowsHitSlop={0}
      renderArrow={(dir) => {
        return (
          <Stack
            overflow="visible"
            width={0}
            height={0}
            justifyContent="center"
            alignItems="center"
          >
            {dir === "left" ? (
              <Ionicons
                name="ios-chevron-back-sharp"
                size={16}
                style={{ width: 16, height: 16 }}
              ></Ionicons>
            ) : (
              <Ionicons
                name="ios-chevron-forward-sharp"
                size={16}
                style={{ width: 16, height: 16 }}
              ></Ionicons>
            )}
          </Stack>
        );
      }}
      {...props}
    />
  );
}
