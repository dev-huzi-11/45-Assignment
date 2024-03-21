function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(city, "is in", country);
}
describe_city();
describe_city("Lahore");
describe_city("Faislabad");
describe_city("Islamabad");
describe_city(undefined, "Turkey");
