import { Field, FieldProps, Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import * as React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { Button, Headline } from "react-native-paper";
import InputField from "../controls/inputField";
import { Colors } from "../../styles/Colors";
import { useRoute } from "@react-navigation/core";
import { Shared } from "../../styles/Shared";
import Logo from "../../assets/logo.png";

interface AuthFormProps {
  submitForm(values: AuthFormValues): void;
  greetingText?: string;
}

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

const AuthForm = ({ submitForm, greetingText }: AuthFormProps) => {
  const { name: routeName } = useRoute();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Should be at least 6 characters")
      .required("Required"),
    ...(routeName === "Register"
      ? {
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords mismatch")
            .required("Required"),
        }
      : {}),
  });

  const [initialValues] = React.useState<AuthFormValues>({
    email: "",
    password: "",
    ...(routeName === "Register" ? { confirmPassword: "" } : {}),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: AuthFormValues) => {
          submitForm(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <View style={Shared.formContainer}>
            <Image
              source={Logo}
              style={{ width: 70, height: 70, alignSelf: "center" }}
              resizeMode="contain"
            />
            <Headline style={Shared.formTitle}>{greetingText}</Headline>

            <Field name="email">
              {(props: FieldProps) => <InputField {...props} label="Email" />}
            </Field>

            <Field name="password">
              {(props: FieldProps) => (
                <InputField {...props} label="Password" type="password" />
              )}
            </Field>

            {routeName === "Register" && (
              <Field name="confirmPassword">
                {(props: FieldProps) => (
                  <InputField
                    {...props}
                    label="Confirm Password"
                    type="password"
                  />
                )}
              </Field>
            )}

            <Button
              mode="contained"
              dark={true}
              color={Colors.main}
              onPress={handleSubmit}
              disabled={!dirty || !isValid}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    ...Shared.mainContainer,
    flexGrow: 1,
    justifyContent: "center",
  },
});
