import { ToggleGroup } from "tamagui";
import { SmallText } from "./atoms";

export function ImportanceSelector({ value, onValueChange }) {
  return (
    <ToggleGroup
      type="single"
      onValueChange={onValueChange}
      value={value}
      disableDeactivation
    >
      <ToggleGroup.Item
        backgroundColor={"#0ABE1B"}
        style={{ opacity: value === "Routine" ? 1 : 0.6 }}
        pressStyle={{ backgroundColor: "#0ABE1B", opacity: 0.6 }}
        value="Routine"
        flex={1}
      >
        <SmallText fontWeight={"bold"} color={"white"}>
          Routine
        </SmallText>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        backgroundColor={"#FF9500"}
        style={{ opacity: value === "Moderate" ? 1 : 0.6 }}
        pressStyle={{ backgroundColor: "#FF9500", opacity: 0.6 }}
        value="Moderate"
        flex={1}
      >
        <SmallText fontWeight={"bold"} color={"white"}>
          Moderate
        </SmallText>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="Critical"
        backgroundColor={"#FF0531"}
        style={{ opacity: value === "Critical" ? 1 : 0.6 }}
        pressStyle={{ backgroundColor: "#FF0531", opacity: 0.6 }}
        flex={1}
      >
        <SmallText fontWeight={"bold"} color={"white"}>
          Critical
        </SmallText>
      </ToggleGroup.Item>
    </ToggleGroup>
  );
}
