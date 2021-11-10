import { Field, FieldProps, Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import InputField from "../controls/inputField";
import { Colors } from "../../styles/Colors";
import { useRoute } from "@react-navigation/core";

interface AuthFormProps {
  submitForm(values: AuthFormValues): void;
}

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

const AuthForm = ({ submitForm }: AuthFormProps) => {
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
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: AuthFormValues) => {
          submitForm(values);
        }}
      >
        {({ handleSubmit }) => (
          <View>
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
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
