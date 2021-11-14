import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { useSelector } from "react-redux";
import CountryCard from "../components/country-card";
import { getAllCountries } from "../network/apiCalls";
import { RootStackParamList } from "../routes";
import { RootState } from "../store/reducers";
import { Country } from "../utils/Shared";

interface HomeProps {}

type countriesScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = (props: HomeProps) => {
  const [countries, setCountries] = React.useState<Array<Country>>([]);
  const navigation = useNavigation<countriesScreenProps>();

  const {
    shared: { isLoading },
  } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    getAllCountries()
      .then((res) => {
        setCountries(res.data?.data || []);
      })
      .catch((err) => console.error(err.response.data.message));
  }, []);

  const renderItem = ({ item }: { item: Country }) => {
    return (
      <CountryCard
        country={item}
        onPress={() => {
          navigation.navigate("Details", { country: item });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {!isLoading &&
        (countries.length > 0 ? (
          <>
            <Headline>Countries</Headline>
            <FlatList
              data={countries}
              renderItem={renderItem}
              keyExtractor={(item: object, index: number) => index.toString()}
            />
          </>
        ) : (
          <Subheading style={styles.centerText}>No countries found</Subheading>
        ))}
    </View>
  );

  // <View style={styles.container}>
  //   {!isLoading &&
  //     (countries.length > 0 ? (
  //       <>
  //         <Headline>Countries</Headline>
  //         {countries.map((country, index) => (
  //           <CountryCard key={index} country={country} />
  //         ))}
  //       </>
  //     ) : (
  //       <Subheading style={styles.centerText}>No countries found</Subheading>
  //     ))}
  // </View>
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  centerText: {
    textAlign: "center",
  },
});
