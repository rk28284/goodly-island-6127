import React from 'react'
import { Tabs,TabList,Tab,TabPanel,TabPanels,Heading,Text,} from '@chakra-ui/react'
const Footer = () => {
  return (
    <div >
      <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList textAlign={"center"}>
    <Tab>ABOUT US</Tab>
    <Tab>BLOGS</Tab>
    <Tab>CAREERS</Tab>
    <Tab>HELP SUPPORTS</Tab>
  </TabList>
  <TabPanels>
    <TabPanel textAlign={'left'}>
    <Heading as='h6' size='s'  color={"red.500"}>
    About Zoomcar
  </Heading>
<p>
Zoomcar is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the 
cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.
</p>
<p>
With Zoomcar, you can experience the convenience of online booking. 
The cars listed on our platform come with all-India permits that include vehicle insurance.
 It is extremely easy to pick up the car from the host location. You can drive unlimited KMs, with 100% Free Cancellation up
  to 6 hours before the trip start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside 
  Assistance. Car rent per KM starts as low as Rs. 49/hour. From short road trips to quick
   in-city drives for groceries, supply pick-up, meeting friends and family, doctor visits,
    business trips, we have the cheapest car rental options for all your needs! A hatchback
     for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.  
</p>
<br />
<Heading as='h6' size='s' color={"teal.400"}>
Why Zoomcar?
  </Heading>
  <h3>1.Unlimited KMs</h3>
  <p>
  You must never stop exploring! That’s why you get unlimited KMs with every booking!
  </p>
  <h3>2.No Paperwork</h3>
  <p>
  Rent a car & start traveling with zero paperwork requirements! All you need in your driver’s license, national ID & a live selfie!
  </p>
  <h3>3.Short-Duration</h3>
  <p>
  Why pay for a full day when you need the car for only 8 hours? Zoomcar lets you rent a car for as low as 8 hours only!
  </p>
  <h3>4.Long-Duration</h3>
  <p>Don’t put a limit to your travel plans - our long-duration bookings are here for you. Remember, the longer you book for, the more you save!</p>
  <h3>5.Keyless Access</h3>
  <p>No need to meet the Hosts during the beginning & end of any booking! The Zoommcar smart-app allows you to lock & unlock the car directly through the app!</p>
  <p>Zoomcar gives you the freedom of self-drive! With budget car rental solutions, Zoomcar offers the best offers, the cheapest prices and a wide range of cars to choose from. Get unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges,
     and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour.</p>
     <Heading as='h6' size='s'color={"green.400"}>
     Flying Soon? We’ll Be There!
  </Heading> 
  <p>No waiting for cabs or fighting the fares anymore - Zoomcar provides Airport trip services. The airport car rent service allows you to book a car from the airport & 
    drive it home. Arrive in any city worry-free! We assure you unbeatable prices!</p>
    <p>Car Rental in Bangalore Airport | Car Rental in Hyderabad Airport |
         Car Rental in Mumbai Airport | Car Rental in Delhi-NCR Airport | Car Rental in Chennai Airport | Car Rental in Pune Airport | Car Rental in Kolkata Airport | Car Rental in Ahmedabad Airport | Car Rental in Bhubaneswar Airport | Car Rental in Chandigarh Airport | Car Rental in Coimbatore Airport | Car Rental in Jaipur Airport | Car Rental in Kochi Airport | Car Rental in Mangalore Airport | Car Rental in Mysore Airport | Car Rental in Nagpur Airport | Car Rental in Surat Airport | Car Rental in Tirupati Airport | Car Rental in Trivandrum Airport 
        | Car Rental in Vadodara Airport | Car Rental in Vijayawada Airport</p>
        <Heading as='h6' size='s'color={"blue.400"}>
        We’ve Got A Car For All Your Needs:
  </Heading>    
  <p>From long durations to short distances, book a Zoomcar for all your needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV</p>
  <Heading as='h6' size='s'color={"red.400"}>
  Anywhere, Anytime:
  </Heading>    
  <p>Cars to rent in Bangalore | Cars to rent in Mumbai | 
    Cars to rent in Delhi NCR |Cars to rent in Chennai |Cars to rent in Pune |
    Cars to rent in Hyderabad |Cars to rent in Chandigarh |Cars to rent in Kolkata 
    |Cars to rent in Ahmedabad |Cars to rent in Coimbatore |Cars to rent in Indore |
    Cars to rent in Jaipur Cars to rent in Vizag |Cars to rent in Goa 
    |Cars to rent in Nagpur |Cars to rent in Kochi |Cars to rent in Vijayawada |
    Cars to rent in Siliguri |Cars to rent in Surat |Cars to rent in Bhopal |
    Cars to rent in Bhubaneswar | Cars to rent in Lucknow |Cars to rent in Guwahati
     |Cars to rent in Vadodara |Cars to rent in Ranchi |Cars to rent in Patna | 
     Cars to rent in Raipur | Cars to rent in Jodhpur |
    Cars to rent in Nashik |Cars to rent in Trichy |Cars to rent in Madurai</p>
    </TabPanel>
    
    <TabPanel>
    <Heading as='h6' size='s'  color={"red.500"}>
    Find more information about Zoomcar Blogs here
  </Heading>
    </TabPanel>
    <TabPanel>
    <Heading as='h6' size='s'  color={"blue.500"}>
    Find more information about Zoomcar Careers here
  </Heading>
    </TabPanel>
    <TabPanel>
    <Heading as='h6' size='s'  color={"green.500"}>
    Find more information about Zoomcar Help and Support here
  </Heading>
    </TabPanel>
  </TabPanels>
</Tabs>

    </div>
  )
}

export default Footer
