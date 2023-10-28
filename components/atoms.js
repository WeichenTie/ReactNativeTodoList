import {
  Text as Text_,
  Button as Button_,
  H1 as H1_,
  H2 as H2_,
  Label as Label_,
  Input as Input_,
  TextArea as TextArea_,
  styled,
  Switch as Switch_,
} from "tamagui";
import { Platform } from "react-native";

export const FontFamily = Platform.OS === "ios" ? "Helvetica" : "Roboto";

export const H1 = styled(H1_, {
  fontFamily: FontFamily,
  fontSize: 24,
  lineHeight: 24 * 2,
  fontWeight: "bold",
  color: "#111827",
});

export const H2 = styled(H2_, {
  fontFamily: FontFamily,
  fontSize: 16,
  fontWeight: "bold",
  color: "#111827",
  lineHeight: 32,
});

export const Text = styled(Text_, {
  fontFamily: FontFamily,
  color: "#111827",
  fontSize: 16,
});

export const BoldText = styled(Text, {
  fontWeight: "bold",
});

export const SmallText = styled(Text, {
  fontFamily: FontFamily,
  fontSize: 12,
});

export const TextButton = styled(Button_, {
  unstyled: true,
  fontFamily: FontFamily,
  fontSize: 16,
  fontWeight: "bold",
  color: "royalblue",
  pressStyle: {
    backgroundColor: "white",
    opacity: 0.5,
  },
});

export const Button = styled(Button_, {
  fontFamily: FontFamily,
  fontSize: 16,
  fontWeight: "bold",
  pressStyle: {
    backgroundColor: "white",
    opacity: 0.5,
  },
});

export const Label = styled(Label_, {
  fontFamily: FontFamily,
  color: "#111827",
  fontSize: 16,
});

export const TextArea = styled(TextArea_, {
  fontFamily: FontFamily,
  multiline: true,
  minHeight: 96,
  color: "#111827",
  fontSize: 16,
});

export const Input = styled(Input_, {
  fontFamily: FontFamily,
  color: "#111827",
  fontSize: 16,
});

export const Switch = styled(Switch_, {
  size: "$3",
  backgroundColor: "#D8D8DC",
  borderColor: "#D8D8DC",
  variants: {
    checked: {
      true: {
        backgroundColor: "#02D46A",
        borderColor: "#02D46A",
      },
      false: {
        backgroundColor: "#D8D8DC",
        borderColor: "#D8D8DC",
      },
    },
  },
});
