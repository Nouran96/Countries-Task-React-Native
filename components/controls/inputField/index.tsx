import { FieldProps } from "formik";
import * as React from "react";
import { Text, View, StyleSheet, KeyboardTypeOptions } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
}

type OwnProps = FieldProps & InputFieldProps;

const InputField: React.FC<OwnProps> = ({
  label,
  type,
  placeholder,
  field,
  keyboardType,
  disabled,
  meta,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={type === "password" ? true : false}
        autoCompleteType="off"
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        keyboardType={keyboardType}
        value={field.value}
        mode="outlined"
        error={Boolean(meta.touched && meta.error)}
        activeOutlineColor="#222"
        onBlur={field.onBlur(field.name)}
        onChangeText={field.onChange(field.name)}
        theme={{ roundness: 25 }}
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
