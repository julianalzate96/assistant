import AsyncStorage from "@react-native-community/async-storage";

export const _getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@userJWT");
    if (value !== null) {
      return true
    }else{
      return false;
    }
  } catch (e) {
    console.log("Error [_getData]: ", e)
  }
};

export const _storeData = async jwt => {
  try {
    await AsyncStorage.setItem("@userJWT", jwt);
  } catch (e) {
    console.log("ERROR [_storeDate]: ", e);
  }
};