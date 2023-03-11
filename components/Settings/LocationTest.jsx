import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {updateLocation} from "../../redux/querySettings"
import * as Location from 'expo-location';

export default function App() {
const dispatch = useDispatch();

const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest, });
    let address = await Location.reverseGeocodeAsync(location.coords)
      let city
      let state
        address.find( a => {
          city = a.city
          state = a.region
        });
      dispatch(updateLocation({
        city: city,
        state: state,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }))
    })();
  }, []);
}