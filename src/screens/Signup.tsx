import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const Signup = ({ navigation }: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
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

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        ></View>

        <Button
          onPress={() => {}}
          title="Đăng nhập"
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
});

export default Signup;
