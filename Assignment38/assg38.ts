function describe_city(
  city: string = "Karachi",
  country: string = "Pakistan"
) {
  console.log(city, "is in", country);
}

describe_city();
describe_city("Lahore");
describe_city("Faislabad");
describe_city("Islamabad");
describe_city(undefined, "Turkey");
