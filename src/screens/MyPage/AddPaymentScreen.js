import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { theme } from "../../theme";

const AddPaymentScreen = ({ navigation }) => {
  const [cardNum, setCardNum] = useState("");
  const [validationDate, setValidtaionDate] = useState("");
  const [birth, setBirth] = useState("");
  const [cardPw, setCardPw] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={page.Container}>
        <View style={page.Input}>
          <Input
            label="카드번호"
            placeholder=" 1111 2222 3333 4444"
            onChangeText={(text) => setCardNum(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={19}
          />
          <Input
            label="유효기간"
            placeholder=" MM/YY"
            onChangeText={(text) => setValidtaionDate(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={5}
          />
          <Input
            label="생년월일"
            placeholder=" YYMMDD"
            onChangeText={(text) => setBirth(text)}
            onSubmitEditing={() => {}}
            returnKeyType="next"
            maxLength={6}
          />
          <Input
            label="비밀번호"
            placeholder=" password"
            onChangeText={(text) => setCardPw(text)}
            onSubmitEditing={() => {}}
            returnKeyType="done"
            isPassword
          />
        </View>

        <View style={page.Button}>
          <Button
            title="등록하기"
            onPress={() => navigation.navigate("Payment")}
          ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const page = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.background,
  },
  Input: {
    // flex: 5,
    width: "90%",
    marginTop: 10,
  },
  Button: {
    // flex: 1,
    marginTop: 110,
    width: "80%",
  },
});

export default AddPaymentScreen;
