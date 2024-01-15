import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { Dropdown } from "react-native-element-dropdown";

import { userSignup } from "../apis/AuthAPI";
import { AxiosError } from "axios";
import { isValidEmail } from "../utils/utils";

const data = [
  { label: "Publisher", value: "publisher" },
  { label: "User", value: "user" },
];

const Signup = ({ navigation }: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: `${data[1].value}`, // set default value for role field
  });

  const handleChange = (name: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    console.log("pressed");
    console.log(userData);

    if (userData.name.length <= 0) {
      Alert.alert("Thông báo!", "Tên không được rỗng", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    if (!isValidEmail(userData.email)) {
      Alert.alert("Thông báo!", "Nhập email đúng định dạng", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    if (userData.password.length < 6) {
      Alert.alert("Thông báo!", "Nhập mật khẩu ít nhất 6 kí tự", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    const res = await userSignup(userData);

    if (res instanceof AxiosError) {
      console.log(res.response?.status);
      const error = res.response?.data;
      console.log("e: ", error);
      Alert.alert("Lỗi", `${error.error}`, [
        {
          text: "Ok",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
      return;
    }

    Alert.alert("Thông báo!", "Tạo tài khoản thành công!", [
      { text: "OK", onPress: () => navigation.replace("Home") },
    ]);
    return;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Tạo tài khoản
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
            }}
          >
            Tìm kiếm hàng ngàn khoá học ngay hôm nay
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.text2}>Tên</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Tên"
              placeholderTextColor={COLORS.black}
              value={userData.name}
              onChangeText={(value) => handleChange("name", value)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.text2}>Email</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              value={userData.email}
              onChangeText={(value) => handleChange("email", value)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.text2}>Mật khẩu</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.black}
              value={userData.password}
              onChangeText={(value) => handleChange("password", value)}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.text2}>Role</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Chọn role"
            value={userData.role}
            onChange={(item) => {
              handleChange("role", item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        ></View>

        <Button
          onPress={() => {
            handleSignup();
          }}
          title="Đăng ký"
          filled
          style={styles.button}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        ></View>

        <View style={styles.contentBottom}>
          <Text style={styles.text2}>Đã có tài khoản?</Text>
          {/* <Pressable onPress={() => navigation.navigate("Login")}> */}
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.textButton}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 50,
    fontWeight: "800",
    color: COLORS.white,
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  textButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 6,
  },
  button: {
    marginTop: 22,
    width: "100%",
  },

  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 22,
  },
  contentBottom: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  // dropdown
  dropdown: {
    height: 50,
    borderBottomColor: "gray",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Signup;
