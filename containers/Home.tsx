import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { Headline, Subheading, FAB } from "react-native-paper";
import { useSelector } from "react-redux";
import FloatingButton from "../components/controls/floatingBtn";
import CountryCard from "../components/country-card";
import { getAllCountries } from "../network/apiCalls";
import { RootStackParamList } from "../routes";
import { RootState } from "../store/reducers";
import { Colors } from "../styles/Colors";
import { Shared } from "../styles/Shared";
import { Country } from "../utils/Shared";

interface HomeProps {}

type countriesScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = (props: HomeProps) => {
  const [countries, setCountries] = React.useState<Array<Country>>([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const navigation = useNavigation<countriesScreenProps>();

  const {
    shared: { isLoading },
  } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    getAllCountries()
      .then((res) => {
        setCountries(res.data?.data || []);
        setRefreshing(false);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const renderItem = ({ item }: { item: Country }) => {
    return (
      <CountryCard
        country={item}
        onPress={() => {
          navigation.navigate("Details", { country: item });
        }}
        goToEdit={() => {
          navigation.navigate("EditCountry", { country: item });
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
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => {
                    setRefreshing(true);
                    getCountries();
                  }}
                />
              }
            />
            <FloatingButton
              onPress={() => navigation.navigate("AddCountry")}
              color="#fff"
              icon="plus"
            />
          </>
        ) : (
          <Subheading style={styles.centerText}>No countries found</Subheading>
        ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Shared.mainContainer,
  },
  centerText: {
    textAlign: "center",
  },
});
