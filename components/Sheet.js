import { useState } from "react";
import { Sheet as TamaSheet } from "tamagui";
export function Sheet({ open, onOpenChange, children }) {
  const [position, setPosition] = useState(0);
  return (
    <TamaSheet
      forceRemoveScrollEnabled={open}
      modal
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[90]}
      dismissOnSnapToBottom
      zIndex={100_000}
      position={position}
      onPositionChange={setPosition}
    >
      <TamaSheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <TamaSheet.Handle height={8} />
      <TamaSheet.Frame paddingHorizontal={24} paddingVertical={32}>
        <TamaSheet.ScrollView>{children}</TamaSheet.ScrollView>
      </TamaSheet.Frame>
    </TamaSheet>
  );
}
