import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import { Dropdown } from "react-native-element-dropdown";
import { createBootcamp } from "../apis/BootcampAPI";
import { BootcampCreateDTO } from "../models/dto/BootcampCreateDTO";
import { AxiosError } from "axios";

const data = [
  { label: "Có", value: "true" },
  { label: "Không", value: "false" },
];

const AddBootcampScreen = ({ navigation }: any) => {
  const [bootcampData, setBootcampData] = useState<BootcampCreateDTO>({
    name: "",
    description: "",
    website: "",
    phone: "",
    email: "",
    address: "",
    careers: [],
    photo: "",
    housing: true,
    jobAssistance: true,
    jobGuarantee: true,
    acceptGi: false,
  });

  const handleChange = (name: string, value: any) => {
    setBootcampData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    let result = await createBootcamp(bootcampData);

    if (result instanceof AxiosError) {
      result = result.response?.data.error;
      Alert.alert("Thông báo", `${result}`, [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    }

    if (result == 201) {
      Alert.alert("Thông báo", "Tạo thành công", [
        {
          text: "OK",
          onPress: () => {
            navigation.replace("Home");
          },
        },
      ]);
    }

    return;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
          }}
        >
          Thêm mới Bootcamp
        </Text>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Ten bootcamp */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Tên Bootcamp</Text>
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
                placeholderTextColor={COLORS.black}
                value={bootcampData.name}
                onChangeText={(value) => handleChange("name", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* Mô tả */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Mô tả</Text>

            <TextInput
              style={styles.textArea}
              value={bootcampData.description}
              onChangeText={(value) => handleChange("description", value)}
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Website */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Website</Text>

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
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                value={bootcampData.website}
                onChangeText={(value) => handleChange("website", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* SDT */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>SDT</Text>

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
                placeholderTextColor={COLORS.black}
                keyboardType="phone-pad"
                value={bootcampData.phone}
                onChangeText={(value) => handleChange("phone", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* Email */}
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
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                value={bootcampData.email}
                onChangeText={(value) => handleChange("email", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* Địa chỉ */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Địa chỉ</Text>

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
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                value={bootcampData.address}
                onChangeText={(value) => handleChange("address", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* Nghề nghiệp */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Việc làm</Text>

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
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                value={bootcampData.careers.toString()}
                onChangeText={(value) => {
                  const tempArr = value.toString().trim().split(",");
                  handleChange("careers", tempArr);
                }}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* Photo */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Ảnh minh hoạ</Text>

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
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                value={bootcampData.photo}
                onChangeText={(value) => handleChange("photo", value)}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* housing */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Dạy tại nhà?</Text>
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
              value={bootcampData.housing.toString()}
              onChange={(item) => {
                handleChange("housing", item.value);
              }}
            />
          </View>

          {/* Hỗ trợ việc làm */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Hỗ trợ việc làm?</Text>
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
              value={bootcampData.jobAssistance.toString()}
              onChange={(item) => {
                handleChange("jobAssistance", item.value);
              }}
            />
          </View>

          {/* Đảm bảo việc làm */}
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.text2}>Đảm bảo việc làm?</Text>
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
              value={bootcampData.jobGuarantee.toString()}
              onChange={(item) => {
                handleChange("jobGuarantee", item.value);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
            }}
          ></View>

          {/* Tạo bootcamp */}
          <Button
            onPress={() => {
              handleCreate();
            }}
            title="Tạo"
            filled
            style={styles.button}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginTop: 16,
    marginBottom: 24,
  },
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
  // text area
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
});

export default AddBootcampScreen;
