import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useStore() {
  const [items, setItems] = useState([]);

  async function update() {
    const keyList = await AsyncStorage.getAllKeys();
    const _items = await AsyncStorage.multiGet(keyList);
    setItems(
      _items?.map(([id, value]) => {
        return { id, value: JSON.parse(value) };
      })
    );
  }

  async function addItem(data) {
    const id = "id" + Math.floor(Math.random() * 1000000).toString();
    await AsyncStorage.setItem(id, JSON.stringify(data), update);
  }

  async function editItem(id, data) {
    return await AsyncStorage.mergeItem(id, JSON.stringify(data), update);
  }

  async function removeItem(id) {
    return await AsyncStorage.removeItem(id, update);
  }

  function getItemSync(id) {
    const data = items.find(({ id: id_ }) => id_ === id);
    return data;
  }

  // AsyncStorage.clear();
  useEffect(() => {
    update();
  }, []);
  return { items: items, addItem, editItem, removeItem, getItemSync };
}
