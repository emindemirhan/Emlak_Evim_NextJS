import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
const Banner = ({
  purpose,
  imageUrl,
  buttonText,
  linkName,
  title1,
  title2,
  desc1,
  desc2,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5" >
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        fontWeight="medium"
      >
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.800" color="black">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <h1>Emlak Evim</h1>

      <Banner
        purpose="Ev Kirala"
        title1="Kiralık Evler"
        title2="Herkes için"
        desc1="Daireleri keşfedin"
        desc2="ve daha fazlası"
        buttonText="Kiralık Evleri keşfet"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="Ev Satın Al"
        title1="Bul ve Satın Al"
        title2="Hayalinizdeki Evinizi Bulun"
        desc1="Daireleri, Villaları, Yazlıkları keşfedin"
        desc2="ve daha fazlası"
        buttonText="Satılık Evleri keşfet"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
     <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
     {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
     </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
