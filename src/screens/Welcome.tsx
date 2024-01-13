import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.linearGradient}
      >
        <View style={styles.body}>
          <View style={styles.content}>
            <Text style={styles.text}>Tìm khoá học</Text>
            <Text style={styles.text}>XDLearn</Text>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  marginVertical: 4,
                }}
              >
                Đăng ký để tìm kiếm hàng ngàn khoá học
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                đang có sẵn trên nền tảng của chúng tôi
              </Text>
            </View>
            <Button
              style={styles.button}
              title="Đăng ký"
              onPress={() => {
                navigation.navigate("Signup");
              }}
            />
            <View style={styles.contentBottom}>
              <Text style={styles.text2}>Đã có tài khoản?</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Login")
                }}
              >
                <Text style={styles.textButton}> Đăng nhập</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
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
    color: COLORS.white,
    marginVertical: 4,
  },
  textButton: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
    fontWeight: "bold",
  },
  button: {
    marginTop: 22,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    bottom: 60,
  },
  contentBottom: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
});

export default Welcome;
