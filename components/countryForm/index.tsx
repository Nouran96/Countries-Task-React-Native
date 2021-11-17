import { Field, FieldProps, Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import * as React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Button, Headline } from "react-native-paper";
import InputField from "../controls/inputField";
import { Colors } from "../../styles/Colors";
import { useRoute } from "@react-navigation/core";
import { Country } from "../../utils/Shared";
import { Shared } from "../../styles/Shared";

interface CountryFormProps {
  submitForm(values: Country): void;
  country?: Country;
  title?: string;
}

interface CountryFormValues {
  name: string;
  population: string;
  numberOfStates: string;
}

const CountryForm = ({ submitForm, country, title }: CountryFormProps) => {
  const { name: routeName } = useRoute();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    population: Yup.string()
      .matches(/^\d+$/, "The field should have digits only")
      .required("Required"),
    numberOfStates: Yup.string()
      .matches(/^\d+$/, "The field should have digits only")
      .required("Required"),
  });

  const [initialValues, setInitialValues] = React.useState<CountryFormValues>({
    name: "",
    population: "",
    numberOfStates: "",
  });

  React.useEffect(() => {
    if (country) {
      setInitialValues({
        ...country,
        population: country.population.toString(),
        numberOfStates: country.numberOfStates.toString(),
      });
    }
  }, [country]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: CountryFormValues, actions) => {
          submitForm({
            ...values,
            population: +values.population,
            numberOfStates: +values.numberOfStates,
          });
        }}
        enableReinitialize
      >
        {({ handleSubmit, isValid, dirty }) => (
          <View>
            {title && <Headline style={Shared.formTitle}>{title}</Headline>}

            <Field name="name">
              {(props: FieldProps) => (
                <InputField
                  {...props}
                  label="Name"
                  {...(routeName === "EditCountry" ? { disabled: true } : {})}
                />
              )}
            </Field>

            <Field name="population">
              {(props: FieldProps) => (
                <InputField
                  {...props}
                  label="Population"
                  keyboardType="numeric"
                />
              )}
            </Field>

            <Field name="numberOfStates">
              {(props: FieldProps) => (
                <InputField
                  {...props}
                  label="Number of states"
                  keyboardType="numeric"
                />
              )}
            </Field>

            <Button
              mode="contained"
              dark={true}
              color={Colors.main}
              onPress={handleSubmit}
              disabled={
                routeName === "EditCountry" ? !isValid : !dirty || !isValid
              }
              style={Shared.button}
              labelStyle={Shared.buttonText}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default CountryForm;

const styles = StyleSheet.create({
  container: {
    ...Shared.mainContainer,
    flexGrow: 1,
    justifyContent: "center",
  },
});
