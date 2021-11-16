import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ImageBackground,
} from "react-native";
import { Subheading, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import FloatingButton from "../components/controls/floatingBtn";
import CountryCard from "../components/countryCard";
import { getAllCountries } from "../network/apiCalls";
import { RootStackParamList } from "../routes";
import { RootState } from "../store/reducers";
import { Shared } from "../styles/Shared";
import { Country } from "../utils/Shared";
import image from "../assets/world_map.jpg";
import useDebounce from "../components/hooks/useDebounce";
import SummarizedCountryCard from "../components/summarizedCountryCard";

interface HomeProps {}

type countriesScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = (props: HomeProps) => {
  const [countries, setCountries] = React.useState<Array<Country>>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<
    Array<Country>
  >([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);
  const navigation = useNavigation<countriesScreenProps>();

  const {
    shared: { isLoading },
  } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    getCountries();
  }, []);

  React.useEffect(() => {
    if (countries.length > 0) {
      if (debouncedSearchTerm.trim()) {
        filterCountries();
      } else {
        setFilteredCountries(countries);
      }
    }
  }, [debouncedSearchTerm, countries]);

  const filterCountries = () => {
    const filteredArr = countries.filter((country) =>
      country.name
        .toLowerCase()
        .includes(debouncedSearchTerm.trim().toLowerCase())
    );

    setFilteredCountries(filteredArr);
  };

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
      <SummarizedCountryCard
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

  return !isLoading ? (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            autoCompleteType="off"
            placeholder="Search..."
            right={
              <TextInput.Icon
                color="#ddd"
                name={() => (
                  <Ionicons name="search-outline" color="#999" size={25} />
                )}
              />
            }
            value={searchValue}
            mode="outlined"
            activeOutlineColor="#222"
            onChangeText={setSearchValue}
          />
          <Subheading style={styles.subheading}>
            {filteredCountries.length} Countries found
          </Subheading>
          <FlatList
            data={filteredCountries}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item: object, index: number) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  setSearchValue("");
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
        </View>
      </ImageBackground>
    </>
  ) : (
    <></>
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
    fontSize: 20,
    marginTop: 20,
  },
  subheading: {
    marginVertical: 10,
    fontSize: 20,
  },
  searchInput: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    height: 100,
    justifyContent: "center",
  },
});
