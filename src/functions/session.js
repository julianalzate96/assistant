import AsyncStorage from "@react-native-community/async-storage";

export const _getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@userJWT");
    if (value !== null) {
      // value previously stored
      return true
    }else{
        return false;
    }
  } catch (e) {
    // error reading value
  }
};

export const _storeData = async jwt => {
  try {
    await AsyncStorage.setItem("@userJWT", jwt);
  } catch (e) {
    // saving error
    console.log("ERROR STORAGE: ", e);
  }
};