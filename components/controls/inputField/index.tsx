import { FieldProps } from "formik";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

type OwnProps = FieldProps & InputFieldProps;

const InputField: React.FC<OwnProps> = ({
  label,
  type,
  placeholder,
  field,
  meta,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={type === "password" ? true : false}
        autoCompleteType="off"
        label={label}
        placeholder={placeholder}
        value={field.value}
        mode="outlined"
        error={Boolean(meta.touched && meta.error)}
        activeOutlineColor="#222"
        onBlur={field.onBlur(field.name)}
        onChangeText={field.onChange(field.name)}
      />

      <HelperText type="error" visible={Boolean(meta.touched && meta.error)}>
        {meta.error}
      </HelperText>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
